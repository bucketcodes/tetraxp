import React from "react";
import Player from "../components/Player";
import imgSrc from "../assets/awayout.jpg";
import imgSrc2 from "../assets/myfault.jpg";
import imgSrc3 from "../assets/ghost.jpg";
import imgSrc4 from "../assets/secretending.jpg";
import imgSrc5 from "../assets/ultramarine.jpg";
import imgSrc6 from "../assets/weonfire.jpg";
import awayout from "../assets/awayout.mp3";
import myfault from "../assets/myfault.mp3";
import ghost from "../assets/ghost.mp3";
import secretending from "../assets/secretending.mp3";
import ultramarine from "../assets/ultramarine.mp3";
import weonfire from "../assets/weonfire.mp3";
import { FaSpotify, FaSoundcloud, FaApple, FaYoutube } from "react-icons/fa";
import { SiTidal, SiGenius } from "react-icons/si";
import { motion } from "framer-motion";
//import '../styles/app.css';

const socialLinks = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/7zUMXgIz0g5CuFSilLSORs?si=bedUmj5wSCWtWQ7jRiHQLw",
    icon: FaSpotify,
  },
  {
    label: "Soundcloud",
    href: "https://soundcloud.com/tetra",
    icon: FaSoundcloud,
  },
  {
    label: "Tidal",
    href: "https://tidal.com/browse/artist/33497574",
    icon: SiTidal,
  },
  {
    label: "Apple",
    href: "https://music.apple.com/us/artist/tetra/1354069759",
    icon: FaApple,
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/channel/UC34UXLnwwkrNg9juqmbz6lg",
    icon: FaYoutube,
  },
  {
    label: "Genius",
    href: "https://genius.com/artists/Tetra",
    icon: SiGenius,
  },
];

const renderSocialLinks = (trackLinks) => {
  return (
    <div className="flex space-x-7 mb-6">
      {socialLinks.map((link) => {
        const hasLink = link.key in trackLinks;
        const IconComponent = link.icon;
        return (
          <a
            key={link.label}
            aria-label={link.label}
            href={trackLinks[link.key]}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-neutral-500 hover:text-white transition-colors duration-300 ${
              hasLink ? "" : "hidden"
            }`}
          >
            <IconComponent className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
};

const MusicPage = () => {
  const tracks = [
    {
      title: "A Way Out (Unreleased)",
      artist: "Tetra",
      audioSrc: awayout,
      image: imgSrc,
      color: "#00aeb0",
    },
    {
      title: "My Fault",
      artist: "Tetra",
      audioSrc: myfault,
      image: imgSrc2,
      color: "#ffb77a",
      links: {
        spotify:
          "https://open.spotify.com/track/0GOdziwqmS18jR71Vtt6tQ?si=6f06db9e5e834d59",
        apple:
          "https://music.apple.com/us/album/my-fault/1576790571?i=1576790578",
      },
    },
    {
      title: "Ghost",
      artist: "Tetra",
      audioSrc: ghost,
      image: imgSrc3,
      color: "#5f9fff",
      links: {
        spotify:
          "https://open.spotify.com/track/0y2BwUOKg6T6ihcP5f1Nir?si=1c566660fdc64a04",
        apple: "https://music.apple.com/us/album/ghost/1546326755?i=1546326824",
      },
    },
    {
      title: "Secret Ending",
      artist: "Tetra Feat. Joven",
      audioSrc: secretending,
      image: imgSrc4,
      color: "#5f9fff",
      links: {
        spotify:
          "https://open.spotify.com/track/0gDPFuA32U50fyE5JWHMRi?si=1e9e552ebf354b29",
        apple:
          "https://music.apple.com/us/album/secret-ending-feat-joven/1546326755?i=1546326823",
      },
    },
    {
      title: "Ultramarine",
      artist: "Tetra",
      audioSrc: ultramarine,
      image: imgSrc5,
      color: "#5f9fff",
      links: {
        spotify:
          "https://open.spotify.com/track/4Fejo5EJSTS2aXtCPWqCn3?si=4b95010be2164cb6",
        apple:
          "https://music.apple.com/us/album/ultramarine/1576790571?i=1576790579",
      },
    },
    {
      title: "We On Fire",
      artist: "Tetra",
      audioSrc: weonfire,
      image: imgSrc6,
      color: "#5f9fff",
      links: {
        spotify:
          "https://open.spotify.com/track/1OiCLdKM4U9uQv8N8WRNMM?si=60927f9f5c7d4566",
        apple:
          "https://music.apple.com/us/album/we-on-fire/1576790571?i=1576790577",
      },
    },
    // add more tracks here
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <div className="flex space-x-7 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              aria-label={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors duration-300"
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <Player tracks={tracks} />
    </motion.div>
  );
};

export default MusicPage;

export const Head = () => <title>Music</title>;
