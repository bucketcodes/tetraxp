import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useLayoutEffect,
} from "react";
import PlayerControls from "./PlayerControls";

// A custom hook to handle the audio playback and state
const useAudioPlayer = (tracks) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [isAudioReady, setIsAudioReady] = useState(false);

  const { title, artist, image, audioSrc } = tracks[trackIndex];

  const audioRef = useRef(new Audio());
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";

  const trackStyling = {
    backgroundImage: `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #222))`,
  };
  const volumeStyling = {
    backgroundImage: `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${volume}, #fff), color-stop(${volume}, #222))`,
  };

  // A function to move to the next i
  const toNextTrack = useCallback(() => {
    setTrackIndex((currentIndex) => {
      if (currentIndex < tracks.length - 1) {
        return currentIndex + 1;
      } else {
        return 0;
      }
    });
  }, [tracks.length]);

  // A function to start the timer for updating the track progress
  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  }, [toNextTrack]);

  // A function to handle scrubbing the track progress
  const onScrub = useCallback(
    (value) => {
      if (isAudioReady) {
        cancelAnimationFrame(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
      }
    },
    [isAudioReady]
  );

  // A function to handle scrubbing end
  const onScrubEnd = useCallback(() => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  }, [isPlaying, startTimer]);

  // A function to move to the previous track
  const toPrevTrack = useCallback(() => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  }, [trackIndex, tracks.length]);

  // A function to handle volume change
  const onVolumeChange = useCallback((value) => {
    setVolume(value);
    audioRef.current.volume = value;
  }, []);

  // A function to handle the canplaythrough event
  const handleCanPlayThrough = useCallback(() => {
    setIsAudioReady(true);
  }, []);

  // A layout effect to play or pause the audio
  useLayoutEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      audioRef.current.volume = volume;
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, startTimer]);

  // A layout effect to change the audio source
  useLayoutEffect(() => {
    if (audioSrc) {
      audioRef.current.pause();

      audioRef.current = new Audio(audioSrc);
      setTrackProgress(audioRef.current.currentTime);

      audioRef.current.addEventListener("canplaythrough", handleCanPlayThrough);

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

  // An effect to clean up the timer and event listener
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      cancelAnimationFrame(intervalRef.current);
      audioRef.current.removeEventListener(
        "canplaythrough",
        handleCanPlayThrough
      );
    };
  }, []);

  // Return the state and functions to use in the component
  return {
    title,
    artist,
    image,
    trackProgress,
    trackStyling,
    volume,
    volumeStyling,
    isPlaying,
    onScrub,
    onScrubEnd,
    toPrevTrack,
    toNextTrack,
    onVolumeChange,
  };
};

// The Player component that uses the custom hook
const Player = ({ tracks }) => {
  // Destructure the state and functions from the custom hook
  const {
    title,
    artist,
    image,
    trackProgress,
    trackStyling,
    volume,
    volumeStyling,
    isPlaying,
    onScrub,
    onScrubEnd,
    toPrevTrack,
    toNextTrack,
    onVolumeChange,
    duration,
    setIsPlaying,
  } = useAudioPlayer(tracks);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full sm:max-w-sm max-w-sm p-4 rounded-lg shadow-lg bg-neutral-900">
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={image}
            alt={`track artwork for ${title} by ${artist}`}
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold text-neutral-400">{title}</h2>
          <h3 className="text-sm text-neutral-600">{artist}</h3>
          <div className="relative mt-4">
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
            <div
              className={`flex items-center sm:justify-between justify-center mt-4`}
            >
              <PlayerControls
                isPlaying={isPlaying}
                onPrevClick={toPrevTrack}
                onNextClick={toNextTrack}
                onPlayPauseClick={setIsPlaying} // Add this
              />
              <div className={`flex items-center hidden sm:block`}>
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
    </div>
  );
};

export default Player;
