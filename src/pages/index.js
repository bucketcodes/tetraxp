import React, { useState, useEffect, Fragment } from "react";
import { motion } from "framer-motion";
import logo from "/src/images/logo.png";
import imgSrc4 from "../assets/So Sick of Feeling.webp";
import imgSrc5 from "../assets/I Yearn for Your Return.webp";
import imgSrc6 from "../assets/I Picked These Flowers For You.webp";
import imgSrc7 from "../assets/The Truth Is So Clear.webp";
import imgThumb from "../images/art/The Color of Her Aura.jpeg";
import classnames from "classnames";
import tetralogo from "../images/tetraw.svg";
import { ReactSVG } from "react-svg";
import threads from "../assets/threads.svg";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillBehanceCircle,
} from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";

const images = [imgSrc4, imgSrc5, imgSrc6, imgSrc7];

const ParallaxImages = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loadedImages, setLoadedImages] = useState([images[0]]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const nextImage = (prevImage + 1) % images.length;
        if (!loadedImages.includes(images[nextImage])) {
          setLoadedImages([...loadedImages, images[nextImage]]);
        }
        return nextImage;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [loadedImages]);

  return (
    <Fragment>
      {loadedImages.map((src, index) => {
        const isActive = index === currentImage;
        return (
          <motion.img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={classnames(
              "z-10 absolute top-0 left-0 w-full h-full object-cover",
              {
                "opacity-100": isActive,
                "opacity-0": !isActive,
              }
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        );
      })}
    </Fragment>
  );
};

const ThreadsIcon = ({ className }) => {
  return (
    <ReactSVG
      aria-label="Threads Icon"
      src={threads}
      type="image/svg+xml"
      alt="Threads Icon"
      className={`fill-white hover:fill-white transition-colors duration-300 mx-4 !w-[1.5rem] content-evenly !h-7`}
    />
  );
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tetraxp",
    icon: AiFillInstagram,
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@tetraxp",
    icon: ThreadsIcon,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/tetragocommando",
    icon: AiFillTwitterCircle,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/tetraxp",
    icon: MdOutlineFacebook,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/tetraxp",
    icon: AiFillBehanceCircle,
  },
];

const IndexPage = () => {
  return (
    <Fragment>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50">
      <ParallaxImages /></div>
      <div className="z-20 absolute top-0 left-0 object-cover w-full h-full flex flex-col justify-center items-center">
         {/* new element */}
         <ReactSVG
                aria-label="Tetra Logo"
                src={tetralogo}
                type="image/svg+xml"
                alt="TetraLogo"
                className="fill-neutral-600 hover:fill-white transition-colors duration-300 mr-4 last:mr-0 w-64 h-50"
              />
        <h1 className="text-6xl font-bold text-white mt-8">TETRA</h1>
        <div className="text-lg font-semibold text-white text-bold mt-4">
          CREATING THE WORLD OF TOMORROW
        </div>
        <a href="/art">
          <button className="border border-white text-white font-bold py-2 px-4 mt-8 rounded-lg bg-transparent hover:text-black transition-colors duration-300 hover:bg-white hover:text-neutral-800">
            ENTER THE WORLD
          </button>
        </a>
        <div className="absolute bottom-12 flex flex-row items-center">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            aria-label={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transform text-white mt-8"
          >
            <link.icon className="w-8 h-8 mx-4 hover:border-solid inline-block" />
          </a>
        ))}
      </div>
      </div>
      {/* Additional Section */}
    </Fragment>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>TETRA ➕ - Creating the World of Tomorrow</title>
    <meta name="description" content="Tetra is a multi-disciplinary artist and engineer from New York known for their unique blend of various mediums and styles. Creating the world of tomorrow." />
    <meta name="keywords" content="TETRA, home, website, art" />
    <meta name="author" content="Tetra, John Perez" />
    <meta name="robots" content="index, follow" />
    <meta name="image" content={imgThumb} />
  </>
)
