import * as React from "react";
import { motion } from "framer-motion";
import johnperform from "../images/art/ACCELERATOR.jpeg";
import logo from "/src/images/logo.png";

const IndexPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -z-auto top-0 left-0 w-full h-full flex justify-center items-center ">
        <div className="opacity-20 -z-10">
          <img
            className="object-cover w-full h-full transition-opacity duration-500 "
            src={johnperform}
            alt={`John Performance`}
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <img
            src={logo}
            alt="Your Logo"
            className="w-64 h-64 object-contain"
          />
          <div className="text-4xl font-bold text-gray-700 mt-8">
            Your Title
          </div>
          <div className="text-lg text-gray-600 mt-4">Your Subtitle</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-8 rounded">
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
