import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  Fragment,
} from "react";
import PlayerControls from "./PlayerControls"; // Importing the PlayerControls component
import { FaSpotify, FaSoundcloud, FaApple, FaYoutube } from "react-icons/fa"; // Importing icons from react-icons library

// Function to format time in seconds to mm:ss format
const formatTime = (timeInSeconds) => {
  if (isNaN(timeInSeconds)) {
    return "0:00";
  }
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Player = ({ tracks }) => {
  // Component starts here with the Player function component

  // State variables
  const [trackIndex, setTrackIndex] = useState(0); // Current index of the selected track
  const [trackProgress, setTrackProgress] = useState(0); // Progress (in seconds) of the currently playing track
  const [isPlaying, setIsPlaying] = useState(false); // Flag indicating whether the track is currently playing or paused
  const [volume, setVolume] = useState(0.2); // Volume level of the audio player
  const [isAudioReady, setIsAudioReady] = useState(false); // Flag indicating whether the audio player is ready to play

  // Refs
  const audioRef = useRef(null); // Ref to the <audio> element
  const intervalRef = useRef(); // Ref to the setInterval function
  const isReady = useRef(false); // Ref to track if the audio player is ready

  // Destructure the current track details from the tracks array
  const { title, artist, image, audioSrc } = tracks[trackIndex];
  const intervalId = useRef(null);
  // Get the duration of the current track from the audio element or default to 0 if not available
  const { duration } = audioRef?.current || { duration: 0 };

  // Calculate the current percentage progress of the track
  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";

  // Get the current volume level
  const currentVolume = volume;

  // CSS styling for the track progress bar
  const trackStyling = {
    backgroundImage: `-webkit-gradient(linear, 0% 0%, 98% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #222))`,
  };

  // CSS styling for the volume slider
  const volumeStyling = {
    backgroundImage: `-webkit-gradient(linear, 0% 0%, 98% 0%, color-stop(${currentVolume}, #fff), color-stop(${currentVolume}, #222))`,
  };

  // Function to go to the previous track
  const toPrevTrack = useCallback(() => {
    setTrackIndex((trackIndex) =>
      trackIndex - 1 < 0 ? tracks.length - 1 : trackIndex - 1
    ); // Decrement the track index and wrap around if necessary
  }, [tracks]);

  // Function to go to the next track
  const toNextTrack = useCallback(() => {
    setTrackIndex((currentIndex) =>
      currentIndex < tracks.length - 1 ? currentIndex + 1 : 0
    ); // Increment the track index and wrap around if necessary
  }, [tracks]);

  // Function to start the timer for track progress
  const startTimer = useCallback(() => {
    clearInterval(intervalRef.current); // Clear the previous interval
    intervalRef.current = setInterval(() => {
      if (audioRef.current?.ended) {
        // If the current track has ended
        toNextTrack(); // Go to the next track
      } else {
        setTrackProgress(audioRef?.current?.currentTime || 0); // Update the track progress based on the current time of the audio player
      }
    }, 1000); // Update every second
  }, [toNextTrack]);

  // Function called when scrubbing the track progress bar
  const onScrub = useCallback(
    (value) => {
      const adjustedValue = Math.max(value, 0); // Ensure the value is not negative
      if (audioRef.current) {
        audioRef.current.currentTime = adjustedValue; // Update the current time of the audio player
        setTrackProgress(audioRef.current.currentTime); // Update the track progress
        // Check if the audio player is paused and hasn't started playing yet
        if (
          audioRef.current.paused &&
          audioRef.current.readyState === HTMLMediaElement.HAVE_METADATA
        ) {
          audioRef.current
            .play() // Play the audio player
            .then(() => {
              // Playback started successfully, start the timer for track progress
              startTimer();
            })
            .catch((error) => {
              // Handle any errors that occur during playback
              console.error("Failed to play the audio:", error);
            });
        }
      }
    },
    [audioRef, setTrackProgress, startTimer]
  );

  // Function called when scrubbing ends
  const onScrubEnd = useCallback(() => {
    if (!isPlaying) {
      setIsPlaying(true); // If not playing, start playing
    }
    startTimer(); // Start the timer for track progress
  }, [isPlaying, setIsPlaying, startTimer]);

  // Function called when the volume slider changes
  const onVolumeChange = (value) => {
    setVolume(value); // Update the volume state
    if (audioRef.current) {
      audioRef.current.volume = value; // Update the volume of the audio player
    }
  };

  // Function to render social links for a track
  const renderSocialLinks = (trackLinks) => {
    if (!trackLinks) {
      return null; // If no track links are provided, return null
    }

    const handleSocialIconClick = (event) => {
      event.stopPropagation(); // Prevent click event from propagating to the parent container
    };

    return (
      <div className="flex space-x-4" onClick={handleSocialIconClick}>
        {Object.entries(trackLinks).map(([linkKey, linkValue]) => {
          const IconComponent = getIconComponent(linkKey); // Get the appropriate icon component based on the link key

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

  // Function to get the appropriate icon component based on the link key
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
        return null; // If no matching link key, return null
    }
  };

  // Function to select a track by its index
  const selectTrack = (index) => {
    if (index === trackIndex) {
      if (!isPlaying) {
        setIsPlaying(true);
      }
      setTrackProgress(0);
    } else {
      if (audioRef.current) {
        audioRef.current.pause(); // Pause the current audio if it exists
      }
      setTrackIndex(index);
      setIsPlaying(false);
      setTrackProgress(0);
    }
  };

  // useEffect hook for playing/pausing the audio player and starting the timer
  useEffect(() => {
    if (audioRef && audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer(); // Start the timer for track progress
        audioRef.current.volume = volume; // Set the volume of the audio player

        // Check if the audio player is ready to play
        if (audioRef.current.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
          audioRef.current
            .play() // Play the audio player
            .then(() => {
              // Playback started successfully, start the timer for track progress
              startTimer();
            })
            .catch((error) => {
              // Handle any errors that occur during playback
              console.error("Failed to play the audio:", error);
            });
        } else {
          // If the audio player is not ready, wait for the "canplay" event before attempting to play
          const canPlayHandler = () => {
            audioRef.current.removeEventListener("canplay", canPlayHandler);
            audioRef.current
              .play() // Play the audio player
              .then(() => {
                // Playback started successfully, start the timer for track progress
                startTimer();
              })
              .catch((error) => {
                // Handle any errors that occur during playback
                console.error("Failed to play the audio:", error);
              });
          };
          audioRef.current.addEventListener("canplay", canPlayHandler);
        }
      } else {
        audioRef.current.pause(); // Pause the audio player
      }
    }
  }, [isPlaying, startTimer, volume]);

  useEffect(() => {
    // Check if there is an audio source
    if (audioSrc) {
      // Pause the currently playing audio (if any)
      if (audioRef.current) {
        audioRef.current.pause();
      }

      // Create a new audio element
      const audioElement = document.createElement("audio");

      // Set the source of the audio element
      audioElement.src = audioSrc;

      if (audioRef.current) {
        audioElement.volume = audioRef.current.volume;
      }
      // Assign the audio element to the ref
      audioRef.current = audioElement;

      // Set the initial track progress to the current time of the audio
      setTrackProgress(audioRef?.current?.currentTime);

      // Define a callback function to handle when the audio is ready to play
      const handleAudioReady = () => {
        setIsAudioReady(true);
      };

      // Add an event listener to the "canplaythrough" event of the audio element
      audioElement.addEventListener("canplaythrough", handleAudioReady);

      // Check if the component is ready to play audio
      if (isReady.current) {
        // Start playing the audio
        setIsPlaying(true);
        startTimer();

        // Play the audio and catch any errors
        audioElement.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        // Mark the component as ready to play audio
        isReady.current = true;
      }

      // Cleanup function to be executed when the component unmounts
      return () => {
        console.log("Component unmounted");
        console.log(audioRef);
        // Pause the audio
        if (audioElement) {
          audioElement.pause();
          // Remove the event listener
          audioElement.removeEventListener("canplaythrough", handleAudioReady);
        }

        // Clear the interval for updating the track progress
        clearInterval(intervalRef.current);
      };
    }
  }, [trackIndex, audioSrc, startTimer]);

  return (
    <Fragment>
      {/* The JSX code for rendering the player component */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center mx-auto px-4 md:max-w-max mb-8">
        <audio ref={audioRef} /> {/* Audio player element */}
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
              <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-neutral-500">
                  {formatTime(trackProgress)}
                </div>
                <div className="text-xs text-neutral-500">
                  {formatTime(duration)}
                </div>
              </div>
              {renderSocialLinks(tracks[trackIndex]?.trackLinks)}
            </div>
          </div>
        </div>
        <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900 overflow-y-scroll h-[33.75rem]">
          <div className="tracklist-body">
            {tracks.map((track, index) => (
              <div
                key={index}
                className={`tracklist-item ${
                  index === 0 ? "rounded-t-lg" : ""
                } ${index === tracks.length - 1 ? "rounded-b-lg" : ""} ${
                  index === trackIndex ? "selected" : ""
                } cursor-pointer select-none`}
                onClick={() => {
                  if (index !== trackIndex) {
                    selectTrack(index);
                  }
                }}
              >
                <div className="tracklist-item-image"></div>
                <div className="tracklist-item-details">
                  <div
                    className={`p-2 bg-gray-900 hover:bg-neutral-800 rounded-lg ${
                      track !== tracks[tracks.length - 1] ? "mb-2" : ""
                    } duration-300`}
                  >
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
