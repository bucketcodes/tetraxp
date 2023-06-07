import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import johnperform from "../assets/johnperform.webp";
import logo from "/src/images/logo.png";
import imgSrc4 from "../assets/secretending.jpg";
import imgSrc5 from "../assets/ultramarine.jpg";
import imgSrc6 from "../assets/weonfire.jpg";

const images = [
  imgSrc4,
  imgSrc5,
  imgSrc6,
  // Add more image paths as needed
];

const IndexPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -z-auto top-0 left-0 w-full h-full flex justify-center items-center">
        <img
          className="object-cover w-full h-full transition-opacity duration-500 opacity-0 hover:opacity-100"
          src={images[currentImage]}
          alt={`Slide ${currentImage}`}
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <img
            src={logo}
            alt="Your Logo"
            className="w-64 h-64 object-contain"
          />
          <div className="text-6xl font-bold text-white mt-8">TETRA</div>
          <div className="text-lg text-white mt-4">AT WAR WITH ENTROPY</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-8 rounded">
            WORK
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center"></div>
      </div>
    </motion.div>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
