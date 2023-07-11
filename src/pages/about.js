import * as React from "react";
import profilePic from "../assets/elmo.jpg";
import era1 from "../assets/kidportrait.jpg";
import era2 from "../assets/10-15.jpg";
import era3 from "../assets/16-19.jpg";
import era4 from "../assets/20-xx.jpg";
import cv from "../assets/cv.pdf";
import { motion } from "framer-motion";
import threads from "../assets/threads.svg";
import { ReactSVG } from "react-svg";

import { Stepper, Step, Button, Typography } from "@material-tailwind/react";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
import { useState, useEffect, lazy, Suspense } from "react";

const Bio = lazy(() => import("../components/ArtistBio"));
const OriginEra = lazy(() => import("../components/Era1Origin"));
const EmbodimentEra = lazy(() => import("../components/Era2Embodiment"));
const ExpansionEra = lazy(() => import("../components/Era3Expansion"));
const PrimeEra = lazy(() => import("../components/Era4Prime"));

const SkillBar = ({ skillName, progress }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    setCurrentProgress(progress);
  }, [progress]);

  return (
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-bold mr-2 b text-neutral-400">
        {skillName}
      </span>
      <div className="w-3/4 bg-neutral-800 rounded-full">
        <div
          className="bg-red-500 h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${currentProgress}%` }}
        ></div>
      </div>
    </div>
  );
};
const skills = [
  { name: "Creativity", progress: [100, 55, 75, 83, 100] },
  { name: "Curiosity", progress: [96, 75, 55, 78, 96] },
  { name: "Resilience", progress: [99, 46, 61, 70, 99] },
  { name: "Versatility", progress: [90, 37, 60, 85, 90] },
  { name: "Entropy", progress: [95, 24, 65, 100, 95] },
  { name: "Wisdom", progress: [85, 12, 33, 55, 85] },
];

const ThreadsIcon = ({ className }) => {
  return (
    <ReactSVG
      aria-label="Threads Icon"
      src={threads}
      type="image/svg+xml"
      alt="Threads Icon"
      className={`fill-neutral-500 hover:fill-white transition-colors duration-300 !w-[1.07rem] !h-5`}
    />
  );
};

const socialMediaLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tetraxp",
    icon: <AiFillInstagram className="w-6 h-6" />,
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@tetraxp",
    icon: <ThreadsIcon className="w-6 h-6" />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/tetragocommando",
    icon: <AiFillTwitterCircle className="w-6 h-6" />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/tetraxp",
    icon: <MdOutlineFacebook className="w-6 h-6" />,
  },
];

const AboutPage = () => {
  const renderActiveStep = () => {
    switch (activeStep) {
      case 0:
        return <Bio />;
      case 1:
        return <OriginEra />;
      case 2:
        return <EmbodimentEra />;
      case 3:
        return <ExpansionEra />;
      case 4:
        return <PrimeEra />;
      default:
        return null;
    }
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div>
          <div className="flex max-w-xs mx-auto mb-10 z-5">
            <Stepper
              activeStep={activeStep}
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
              lineClassName="bg-neutral-800"
              activeLineClassName="bg-red-500"
              className="z-0"
            >
              <Step
                className="h-2 w-2 ring-opacity-0 bg-neutral-400"
                activeClassName="bg-red-500"
                completedClassName="bg-red-500"
                onClick={() => setActiveStep(0)}
              >
                <div className="absolute top-[1rem] w-max text-center">
                  <Typography
                    variant="h6"
                    color={activeStep === 0 ? "red" : "gray"}
                    activeClassName="bg-red-500"
                    className="pointer-events-none select-none text-xs"
                  >
                    Bio
                  </Typography>
                </div>
              </Step>
              <Step
                className="h-2 w-2 ring-opacity-0 bg-neutral-400"
                activeClassName="bg-red-500"
                completedClassName="bg-red-500"
                onClick={() => setActiveStep(1)}
              >
                <div className="absolute top-[1rem] w-max text-center">
                  <Typography
                    variant="h6"
                    color={activeStep === 1 ? "red" : "gray"}
                    className="pointer-events-none select-none text-xs"
                  >
                    08
                  </Typography>
                </div>
              </Step>
              <Step
                className="h-2 w-2 ring-opacity-0 bg-neutral-400"
                activeClassName="bg-red-500"
                completedClassName="bg-red-500"
                onClick={() => setActiveStep(2)}
              >
                <div className="absolute top-[1rem] w-max text-center text-xs">
                  <Typography
                    variant="h6"
                    color={activeStep === 2 ? "red" : "gray"}
                    className="pointer-events-none select-none text-xs"
                  >
                    13
                  </Typography>
                </div>
              </Step>
              <Step
                className="h-2 w-2 ring-opacity-0 bg-neutral-400"
                activeClassName="bg-red-500"
                completedClassName="bg-red-500"
                onClick={() => setActiveStep(3)}
              >
                <div className="absolute top-[1rem] w-max text-center">
                  <Typography
                    variant="h6"
                    color={activeStep === 3 ? "red" : "gray"}
                    className="pointer-events-none select-none text-xs"
                  >
                    19
                  </Typography>
                </div>
              </Step>
              <Step
                className="h-2 w-2 ring-opacity-0 bg-neutral-400"
                activeClassName="bg-red-500"
                completedClassName="bg-red-500"
                onClick={() => setActiveStep(4)}
              >
                <div className="absolute top-[1rem] w-max text-center">
                  <Typography
                    variant="h6"
                    color={activeStep === 4 ? "red" : "gray"}
                    className="pointer-events-none select-none text-xs"
                  >
                    23+
                  </Typography>
                </div>
              </Step>
            </Stepper>
          </div>
        </div>
        <Button
          variant="filled"
          color="red"
          onClick={handlePrev}
          disabled={isFirstStep}
          className="!fixed top-1/2 left-0 transform md:px-5 px-3 z-50 mx-2"
          //className="!fixed z-50 inset-x-0 mx-auto max-w-max right-full"
        >
          <FaArrowCircleLeft />
        </Button>
        <Button
          variant="filled"
          color="red"
          onClick={handleNext}
          disabled={isLastStep}
          //className="!fixed z-50  justify-center	"
          className="!fixed top-1/2 right-0 transform md:px-5 px-3 z-50 mx-2"
        >
          <FaArrowCircleRight />
        </Button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 justify-items-center mx-auto px-4 max-w-max mb-8">

          <div className="break-inside-avoid h-auto w-full max-w-lg p-2 rounded-lg bg-neutral-900 mb-2">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-all duration-500 ease-in-out pointer-events-none select-none"
                src={
                  activeStep === 0
                    ? profilePic
                    : activeStep === 1
                    ? era1
                    : activeStep === 2
                    ? era2
                    : activeStep === 3
                    ? era3
                    : activeStep === 4
                    ? era4
                    : profilePic
                }
                alt={`Tetra portrait`}
              />
            </div>
            <h1 className=" mt-2 text-3xl font-bold text-neutral-300">
              {activeStep === 0
                ? "JOHN"
                : activeStep === 1
                ? "DEADLOCKED"
                : activeStep === 2
                ? "FLYZ"
                : activeStep === 3
                ? "GARGANT"
                : activeStep === 4
                ? "TETRA"
                : "TETRA"}
            </h1>
            <p className="text-sm mb-2 text-neutral-500">
              {activeStep === 0
                ? "Multidisciplinary Artist + Engineer + Lover of Food"
                : activeStep === 1
                ? "Future Veterinarian"
                : activeStep === 2
                ? "Artist + Server Owner + Engineer"
                : activeStep === 3
                ? "Cover Artist + Engineer"
                : activeStep === 4
                ? "Artist"
                : "Multidisciplinary Artist / Engineer"}
            </p>
            <div className="flex space-x-5 items-center">
              {socialMediaLinks.map((link) => (
                <a
                  key={link.label}
                  aria-label={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-white transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>

            <div className="flex flex-col">
              {skills.map((skill, index) => (
                <SkillBar
                  key={index}
                  skillName={skill.name}
                  progress={skill.progress[activeStep]}
                />
              ))}
            </div>
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold rounded-lg bg-neutral-800 text-white text-sm py-1 mt-2 mb-1 text-center block hover:bg-red-500 transition-colors duration-300"
            >
              <AiOutlineCloudDownload className="inline-block w-6 h-6 mr-2" />
              DOWNLOAD CV
            </a>
          </div>

          <Suspense fallback={<div></div>}>{renderActiveStep()}</Suspense>
          </div>

        </div>
    </motion.div>
  );
};

export default AboutPage;

export const Head = () => (
  <>
    <title>TETRA ➕ - About the Artist</title>
    <meta
      name="description"
      content="Discover how Tetra combines Digital Art and AI to create a new form of Renaissance that challenges the boundaries of art and technology."
    />
    <meta name="keywords" content="TETRA, about, website, art" />
    <meta name="author" content="Tetra, John Perez" />
    <meta name="robots" content="index, follow" />
  </>
);
