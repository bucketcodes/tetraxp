import React, { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import PlayerControls from "./PlayerControls";

const Player = ({ tracks }) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [isAudioReady, setIsAudioReady] = useState(false);

  const audioRef = useRef(new Audio());
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { title, artist, image, audioSrc } = tracks[trackIndex];
  const { duration } = audioRef.current;
  const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : "0%";
  const currentVolume = volume;

  const trackStyling = {
    backgroundImage: `-webkit-gradient(linear, 0% 0%, 98% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #222))`,
  };

  const volumeStyling = {
    backgroundImage: `-webkit-gradient(linear, 0% 0%, 98% 0%, color-stop(${currentVolume}, #fff), color-stop(${currentVolume}, #222))`,
  };

  const toNextTrack = useCallback(() => {
    setTrackIndex(currentIndex => (currentIndex < tracks.length - 1) ? currentIndex + 1 : 0);
  }, [tracks.length]);

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

  const onScrub = value => {
    if (value < 0) {
      value = 0;
    }
    if (isAudioReady) {
      cancelAnimationFrame(intervalRef.current);
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
    }
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const toPrevTrack = () => {
    setTrackIndex(trackIndex => (trackIndex - 1 < 0) ? tracks.length - 1 : trackIndex - 1);
  };

  const onVolumeChange = value => {
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

  useLayoutEffect(() => {
    if (audioSrc) {
      audioRef.current.pause();
      audioRef.current = new Audio(audioSrc);
      setTrackProgress(audioRef.current.currentTime);

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
      audioRef.current.pause();
      cancelAnimationFrame(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
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
              onChange={e => onScrub(e.target.value)}
              onTouchStart={e => onScrub(e.target.value)}
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
                  onChange={e => onVolumeChange(e.target.value)}
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
