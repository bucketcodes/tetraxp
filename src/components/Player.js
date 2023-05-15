import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import PlayerControls from "./PlayerControls";

const Player = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.20);

  const { title, artist, image, audioSrc } = tracks[trackIndex];

  const audioRef = useRef(new Audio());
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";

  const trackStyling = {
    backgroundImage: `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #222))`
  };
  const volumeStyling = {
    backgroundImage: `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${volume}, #fff), color-stop(${volume}, #222))`
  };

  const toNextTrack = useCallback(() => {
    setTrackIndex((currentIndex) => {
      if (currentIndex < tracks.length - 1) {
        return currentIndex + 1;
      } else {
        return 0;
      }
    });
  }, [tracks.length]);

  const startTimer = useCallback(() => {
    cancelAnimationFrame(intervalRef.current);

    intervalRef.current = requestAnimationFrame(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
        startTimer();
      }
    });
  }, [toNextTrack]);

  const onScrub = (value) => {
    cancelAnimationFrame(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const onVolumeChange = (value) => {
    setVolume(value);
    audioRef.current.volume = value;
  };

  useLayoutEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      audioRef.current.volume = volume;
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, startTimer]);
  
  useEffect(() => {
    if (audioSrc) {
      audioRef.current.pause();
  
      audioRef.current = new Audio(audioSrc);
      audioRef.current.volume = volume;
      setTrackProgress(audioRef.current.currentTime);
  
      audioRef.current.addEventListener('canplay', () => {
        if (isReady.current) {
          audioRef.current.play();
          setIsPlaying(true);
          startTimer();
        } else {
          isReady.current = true;
        }
      });
  
      audioRef.current.setAttribute('playsInline', '');
    }
  }, [trackIndex, audioSrc, startTimer]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      cancelAnimationFrame(intervalRef.current);
    };
  }, []);

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
              onMouseUp={onScrubEnd}
              onTouchEnd={onScrubEnd}
              onKeyUp={onScrubEnd}
              style={trackStyling}
            />
            <div className="flex items-center justify-between mt-4">
              <PlayerControls
                isPlaying={isPlaying}
                onPrevClick={toPrevTrack}
                onNextClick={toNextTrack}
                onPlayPauseClick={setIsPlaying}
              />
              <div className="flex items-center">
                <input
                  id="volume-slider"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  className="w-20 h-2 bg-gray-300 rounded-full appearance-none focus:outline-none"
                  onChange={(e) => onVolumeChange(e.target.value)}
                  onTouchStart={(e) => onVolumeChange(e.target.value)}
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