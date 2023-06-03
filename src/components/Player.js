import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import PlayerControls from "./PlayerControls";
import { Fragment } from "react";
import { FaSpotify, FaSoundcloud, FaApple, FaYoutube } from "react-icons/fa";

const Player = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [isAudioReady, setIsAudioReady] = useState(false);

  const audioRef = useRef(null);
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { title, artist, image, audioSrc } = tracks[trackIndex];
  const { duration } = audioRef?.current || { duration: 0 };
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const currentVolume = volume;

  const trackStyling = {
    backgroundImage: `-webkit-gradient(linear, 0% 0%, 98% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #222))`,
  };

  const volumeStyling = {
    backgroundImage: `-webkit-gradient(linear, 0% 0%, 98% 0%, color-stop(${currentVolume}, #fff), color-stop(${currentVolume}, #222))`,
  };

  const toNextTrack = useCallback(() => {
    setTrackIndex((currentIndex) =>
      currentIndex < tracks.length - 1 ? currentIndex + 1 : 0
    );
  }, [tracks.length]);

  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (audioRef.current?.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef?.current?.currentTime || 0);
      }
    }, 1000);
  }, [toNextTrack]);

  const onScrub = (value) => {
    if (value < 0) {
      value = 0;
    }
    if (isAudioReady && audioRef) {
      cancelAnimationFrame(intervalRef.current);
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef?.current?.currentTime || 0);
    }
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    setTrackIndex((trackIndex) =>
      trackIndex - 1 < 0 ? tracks.length - 1 : trackIndex - 1
    );
  };

  const onVolumeChange = (value) => {
    setVolume(value);
    if (audioRef) {
      audioRef.current.volume = value;
    }
  };

  useLayoutEffect(() => {
    if (audioRef) {
      if (isPlaying) {
        audioRef.current.play();
        audioRef.current.volume = volume;
        startTimer();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, startTimer]);

  useLayoutEffect(() => {
    if (audioSrc) {
      audioRef.current.pause();
      audioRef.current = new Audio(audioSrc);
      setTrackProgress(audioRef?.current.currentTime);

      audioRef.current.addEventListener("canplaythrough", () => {
        setIsAudioReady(true);
      });

      if (isReady.current) {
        audioRef.current.play();
        audioRef.current.volume = volume;
        setIsPlaying(true);
        startTimer();
      } else {
        isReady.current = true;
      }
    }
  }, [trackIndex, audioSrc, startTimer]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      cancelAnimationFrame(intervalRef.current);
    };
  }, []);

  const selectTrack = (index) => {
    if (index === trackIndex) {
      if (!isPlaying) {
        setIsPlaying(true);
        setTrackProgress(0);
      }
    } else {
      setTrackIndex(index);
      setIsPlaying(true);
      setTrackProgress(0);
    }
  };

  const renderSocialLinks = (trackLinks) => {
    if (!trackLinks) {
      return null;
    }
    return (
      <div className="flex space-x-4">
        {Object.entries(trackLinks).map(([linkKey, linkValue]) => {
          const IconComponent = getIconComponent(linkKey);
          return (
            <a
              key={linkKey}
              href={linkValue}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconComponent className="w-4 h-4 text-neutral-500 hover:text-white transition-colors duration-300" />
            </a>
          );
        })}
      </div>
    );
  };

  const getIconComponent = (linkKey) => {
    switch (linkKey) {
      case "spotify":
        return FaSpotify;
      case "soundcloud":
        return FaSoundcloud;
      case "apple":
        return FaApple;
      case "youtube":
        return FaYoutube;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center mx-auto px-4 md:max-w-max mb-8">
        <audio ref={audioRef} />
        <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
          <div className="relative">
            <img
              className="object-cover w-full h-full rounded-lg"
              src={image}
              alt={`track artwork for ${title} by ${artist}`}
            />
          </div>
          <div className="p-2">
            <h2 className="text-sm font-bold text-neutral-400">{title}</h2>
            <h3 className="text-xs text-neutral-600">{artist}</h3>
            <div className="relative mt-2">
              <input
                type="range"
                value={trackProgress}
                step="1"
                min="0"
                max={duration ? duration : `${duration}`}
                className="w-full h-2 bg-gray-300 rounded-full appearance-none focus:outline-none"
                onChange={(e) => onScrub(e.target.value)}
                onTouchStart={(e) => onScrub(e.target.value)}
                onTouchEnd={onScrubEnd}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
                style={trackStyling}
              />
              <div className="flex items-center sm:justify-between justify-center mt-2">
                <PlayerControls
                  isPlaying={isPlaying}
                  onPrevClick={toPrevTrack}
                  onNextClick={toNextTrack}
                  onPlayPauseClick={setIsPlaying}
                />
                <div className="flex items-center hidden sm:block">
                  <input
                    id="volume-slider"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    className="w-20 h-2 bg-gray-300 rounded-full appearance-none focus:outline-none"
                    onChange={(e) => onVolumeChange(e.target.value)}
                    style={volumeStyling}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
          <div className="tracklist-body">
            {tracks.map((track, index) => (
              <div
                key={index}
                className={`tracklist-item ${
                  index === 0 ? "rounded-t-lg" : ""
                } ${index === tracks.length - 1 ? "rounded-b-lg" : ""} ${
                  index === trackIndex ? "selected" : ""
                } cursor-pointer select-none`}
                onClick={() => selectTrack(index)}
              >
                <div className="tracklist-item-image"></div>
                <div className="tracklist-item-details">
                  <div className="p-2 bg-gray-900 hover:bg-neutral-800 rounded-lg mb-2 duration-300">
                    <div className="flex items-center justify-between">
                      <div className="text-sm mr-2 font-bold text-neutral-400">
                        {track.title}
                      </div>
                      <div className="ml-auto">
                        {" "}
                        {/* Add this div with "ml-auto" class */}
                        {renderSocialLinks(track.links)}
                      </div>
                      <div className="text-xs text-neutral-600">
                        {track.length}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="text-xs text-neutral-600">
                        {track.artist}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Player;
