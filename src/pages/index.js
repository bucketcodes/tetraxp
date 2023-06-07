import React, { useState, useEffect, Fragment, useRef } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import logo from "/src/images/logo.png";
import imgSrc4 from "../assets/secretending.jpg";
import imgSrc5 from "../assets/ultramarine.jpg";
import imgSrc6 from "../assets/weonfire.jpg";

const images = [imgSrc4, imgSrc5, imgSrc6]; // Add more image paths as needed

const ParallaxImages = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { scrollY } = useViewportScroll();
  const imageRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollY.get();
      imageRefs.current.forEach((ref, index) => {
        if (ref && ref.offsetTop !== undefined) {
          const yPos = -(scrollTop - ref.offsetTop) / 2; // Adjust the parallax effect speed here
          ref.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        }
      });
    };

    scrollY.onChange(handleScroll);
    return () => scrollY.clearListeners();
  }, [scrollY]);

  return (
    <Fragment>
      {images.map((src, index) => (
        <motion.img
          key={index}
          ref={(ref) => (imageRefs.current[index] = ref)}
          src={src}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}

      {/* Rest of your component code */}
    </Fragment>
  );
};

const IndexPage = () => {
  return (
    <Fragment>
      <ParallaxImages />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <img src={logo} alt="Your Logo" className="w-64 h-64 object-contain" />
        <div className="text-6xl font-bold text-white mt-8">TETRA</div>
        <div className="text-lg text-white mt-4">AT WAR WITH ENTROPY</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-8 rounded">
          WORK
        </button>
      </div>

      {/* Additional Sections */}
      <div className="h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Section 1</h2>
        <p>Content for section 1 goes here.</p>
      </div>

      <div className="h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Section 2</h2>
        <p>Content for section 2 goes here.</p>
      </div>

      <div className="h-screen flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Section 3</h2>
        <p>Content for section 3 goes here.</p>
      </div>
      {/* Rest of your component code */}
    </Fragment>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
