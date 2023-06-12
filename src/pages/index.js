import React, {
  useState,
  useEffect,
  Fragment,
  useRef,
} from "react";
import { motion } from "framer-motion";
import logo from "/src/images/logo.png";
import imgSrc4 from "../assets/So Sick of Feeling.webp";
import imgSrc5 from "../assets/I Yearn for Your Return.webp";
import imgSrc6 from "../assets/I Picked These Flowers For You.webp";
import imgSrc7 from "../assets/The Truth Is So Clear.webp";
import classnames from "classnames";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillBehanceCircle,
} from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/Md";

const images = [imgSrc4, imgSrc5, imgSrc6, imgSrc7]; // Add more image paths as needed

const ParallaxImages = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const imageRefs = useRef([]);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalRef.current); // Clear the interval on unmount
  }, []);

  return (
    <Fragment>
      {images.map((src, index) => (
        <motion.img
          key={index}
          ref={(ref) => (imageRefs.current[index] = ref)}
          src={src}
          alt={`Slide ${index}`}
          className={classnames(
            "z-10 absolute top-0 left-0 w-full h-full object-cover",
            {
              "opacity-100": index === currentImage,
              "opacity-0": index !== currentImage,
            }
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentImage ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
      {/* Rest of your component code */}
    </Fragment>
  );
};

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tetraxp/",
    icon: AiFillInstagram,
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
      <ParallaxImages />
      <div className=" z-20 absolute top-0 left-0 object-cover w-full h-full flex flex-col justify-center items-center">
        <img src={logo} alt="Your Logo" className="w-64 h-64 object-contain" />
        <div className="text-6xl font-bold text-white mt-8">TETRA</div>
        <div className="text-lg font-semibold text-white text-bold mt-4">
          CREATING THE WORLD OF TOMORROW
        </div>
        <a href="/art">
          <button class="border border-white text-white font-bold py-2 px-4 mt-8 rounded-lg bg-transparent hover:text-black transition-colors duration-300 hover:bg-white hover:text-neutral-800">
            PORTFOLIO
          </button>
        </a>
        <div className="absolute bottom-12">
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
      {/* Additional Sections */}
    </Fragment>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;