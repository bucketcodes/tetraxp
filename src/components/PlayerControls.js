import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

const PlayerControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="text-neutral-600 text-2xl ">
      <button
        type="button"
        className="prev hover:text-white transition-colors duration-200 w-10 h-10"
        aria-label="Previous"
        onClick={onPrevClick}
      >
        <FontAwesomeIcon icon={faBackward} />
      </button>
      {isPlaying ? (
        <button
          type="button"
          className="pause hover:text-white transition-colors duration-200 w-10 h-10"
          onClick={() => onPlayPauseClick(false)}
          aria-label="Pause"
        >
          <FontAwesomeIcon icon={faPause} />
        </button>
      ) : (
        <button
          type="button"
          className="play hover:text-white transition-colors duration-200 w-10 h-10"
          onClick={() => onPlayPauseClick(true)}
          aria-label="Play"
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
      )}
      <button
        type="button"
        className="next hover:text-white transition-colors duration-200 w-10 h-10"
        aria-label="Next"
        onClick={onNextClick}
      >
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};

export default PlayerControls;
