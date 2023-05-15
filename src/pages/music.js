import React from 'react';
import Player from '../components/Player';
import imgSrc from '../assets/awayout.jpg';
import imgSrc2 from '../assets/myfault.jpg';
import imgSrc3 from '../assets/ghost.jpg';
import imgSrc4 from '../assets/secretending.jpg';
import imgSrc5 from '../assets/ultramarine.jpg';
import imgSrc6 from '../assets/weonfire.jpg';
import awayout from '../assets/awayout.mp3';
import myfault from '../assets/myfault.mp3';
import ghost from '../assets/ghost.mp3';
import secretending from '../assets/secretending.mp3';
import ultramarine from '../assets/ultramarine.mp3';
import weonfire from '../assets/weonfire.mp3';
import { FaSpotify, FaSoundcloud, FaApple, FaYoutube } from 'react-icons/fa';
import { SiTidal, SiGenius } from 'react-icons/si';
//import '../styles/app.css';

const MusicPage = () => {
  const tracks = [
	{
		title: "A Way Out",
		artist: "Tetra",
		audioSrc: awayout,
		image: imgSrc,
		color: "#00aeb0"
	  },
	  {
		title: "My Fault",
		artist: "Tetra",
		audioSrc: myfault,
		image: imgSrc2,
		color: "#ffb77a"
	  },
	  {
		title: "Ghost",
		artist: "Tetra",
		audioSrc: ghost,
		image: imgSrc3,
		color: "#5f9fff"
	  },
	  {
		title: "Secret Ending",
		artist: "Tetra Feat. Joven",
		audioSrc: secretending,
		image: imgSrc4,
		color: "#5f9fff"
	  },
	  {
		title: "Ultramarine",
		artist: "Tetra",
		audioSrc: ultramarine,
		image: imgSrc5,
		color: "#5f9fff"
	  },
	  {
		title: "We On Fire",
		artist: "Tetra",
		audioSrc: weonfire,
		image: imgSrc6,
		color: "#5f9fff"
	  }
    // add more tracks here
  ];

  return (
	<div className="flex flex-col items-center">
	  <Player tracks={tracks} />
	  <div className="flex space-x-4 mt-8 mb-8">
		<a href="https://open.spotify.com/artist/7zUMXgIz0g5CuFSilLSORs?si=bedUmj5wSCWtWQ7jRiHQLw" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors duration-300"><FaSpotify className="w-8 h-8" /></a>
		<a href="https://soundcloud.com/tetra" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors duration-300"><FaSoundcloud className="w-8 h-8" /></a>
		<a href="https://tidal.com/browse/artist/33497574" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors duration-300"><SiTidal className="w-8 h-8" /></a>
		<a href="https://music.apple.com/us/artist/tetra/1354069759" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors duration-300"><FaApple className="w-8 h-8" /></a>
		<a href="https://www.youtube.com/channel/UC34UXLnwwkrNg9juqmbz6lg" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors duration-300"><FaYoutube className="w-8 h-8" /></a>
		<a href="https://genius.com/artists/Tetra" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors duration-300"><SiGenius className="w-8 h-8" /></a>
	  </div>
	  {/* Add your music-related content here */}
	</div>
  );
};

export default MusicPage;

export const Head = () => <title>Music</title>;