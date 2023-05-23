import React from "react";

function PlayerDetails({ song }) {
  return (
    <div className="music-player--details">
      <div className="details-img">
        <img
          className="details-img--image"
          src={song.img_src}
          alt={`${song.title} by ${song.artist}`}
        />
      </div>
      <div className="range"></div>
      <div className="artist-info">
        <h3 className="details-title">{song.title}</h3>
        <h4 className="details-artist">{song.artist}</h4>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default PlayerDetails;
