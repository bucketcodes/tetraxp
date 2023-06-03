import * as React from "react";
import { motion } from "framer-motion";
import johnperform from "../assets/johnperform.webp";

const IndexPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-cover bg-center h-screen"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            src="your-logo.png"
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
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <img
          className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
          src={johnperform}
          alt={`John Performance`}
        />
      </div>
    </motion.div>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
