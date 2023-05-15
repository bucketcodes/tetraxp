import React, { useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faForward, faBackward } from "@fortawesome/free-solid-svg-icons";

const PlayerControls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }) => {
  const handlePlayPauseClick = useCallback((play) => {
    onPlayPauseClick(play);
  }, [onPlayPauseClick]);

  return (
    <div className="audio-controls text-4xl text-neutral-600 transition-colors duration-200">
      <button
        type="button"
        className="prev hover:text-white mr-8"
        aria-label="Previous"
        onClick={onPrevClick}
      >
        <FontAwesomeIcon icon={faBackward} />
      </button>
      {isPlaying ? (
        <button
          type="button"
          className="pause hover:text-white mr-8 transition-colors duration-200"
          onClick={() => handlePlayPauseClick(false)}
          aria-label="Pause"
        >
          <FontAwesomeIcon icon={faPause} />
        </button>
      ) : (
        <button
          type="button"
          className="play hover:text-white mr-8 transition-colors duration-200"
          onClick={() => handlePlayPauseClick(true)}
          aria-label="Play"
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
      )}
      <button
        type="button"
        className="next hover:text-white transition-colors duration-200"
        aria-label="Next"
        onClick={onNextClick}
      >
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};

export default PlayerControls;