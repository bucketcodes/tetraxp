import * as React from "react";
import { Fragment } from "react";
import {
  Typography,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import mecanvas from "../assets/mecanvas.webp";
import heroes from "../assets/heroes.webp";
import snowed from "../assets/snowed.webp";
import legends from "../assets/legends.webp";

const artistBio = () => {
  return (
    <Fragment>
            <div className="break-inside-avoid h-auto w-full max-w-lg p-2 rounded-lg bg-neutral-900 mb-2">
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={mecanvas}
            alt={`Selfie with Canvases`}
          />
        </div>
        <h1 className="mt-2 text-neutral-300 text-3xl font-bold">WHO AM I?</h1>
        <p className="text-sm mt-2 mb-2 text-neutral-500">
          Testing Canvases (NC, Spring 2022)
        </p>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-neutral-400 text-sm mb-6">
          Young lombax, a precursor, keyblade wielder, transcendant of Sony consoles, devourer of infinite foods. 
          I go by Tetra, I am a multi-disciplinary artist and engineer from New York. I love to experiment with different 
          mediums and styles, creating works that capture the inherent chaos and energy of the universe around us. 
          I explore the concept of entropy, and the necessary balance and inveitability of things, acceptance of the idea
          that there is no underlying positives or negatives, it just is.
        </p>
        <p className="text-neutral-400 text-sm mb-6 italic">
          "The future is fluid. Each act, each decision, and each development creates new possibilities and eliminates others. The future is ours to direct." <a className="not-italic font-bold">- Jacque Fresco</a>
        </p>
        </div>
        <div className="break-inside-avoid h-auto w-full max-w-lg p-2 rounded-lg bg-neutral-900 mb-2">
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={legends}
            alt={`Snowed In`}
          />
        </div>
        <p className="text-sm mt-2 mb-2 text-neutral-500">
          Gamecube at Yeeevs' Crib  (NY, ????)
        </p>
        </div>
        <div className="break-inside-avoid h-auto w-full max-w-lg p-2 rounded-lg bg-neutral-900 mb-2">
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={heroes}
            alt={`Family`}
          />
        </div>
        <h1 className="mt-2 text-neutral-300 text-3xl font-bold">WHY ART?</h1>
        <p className="text-sm mt-2 mb-2 text-neutral-500">
          Family. (NY, Winter 2022)
        </p>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-neutral-400 text-sm mb-6">
        My art is a tribute to those who never had the chance to create, who always felt their dreams were out of reach. Through my art, I express myself, my vision, my thoughts with the world, hoping to inspire and resonate with others. I create to connect, with myself and with those who share my passion and struggles, who never felt they belonged or understood. My future is bigger than me, it always has been. I have a mission, a purpose, a calling to create.
        </p>
        <p className="text-neutral-400 text-sm mb-6">
        This is for those who saw the potential in me when I was blind to it, and for those who supported me through the hard times and celebrated with me through the good times, thank you. You are the reason I am here today, and I will always be grateful for your love and faith in me.        </p>
        </div>
        <div className="break-inside-avoid h-auto w-full max-w-lg p-2 rounded-lg bg-neutral-900 mb-2">
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={snowed}
            alt={`Snowed In`}
          />
        </div>
        <p className="text-sm mt-2 mb-2 text-neutral-500">
          Winter Archeology (NY, Winter 2022)
        </p>
        </div>
        <div className="break-inside-avoid h-auto w-full max-w-lg p-2 rounded-lg bg-neutral-900 mb-2">
        <a className=" text-3xl text-neutral-300 font-bold">WEBSITE INFO</a>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-neutral-400 text-sm mb-6">
        This website is the work of Tetra, with the help of Tim (Bucket Codes) creating the blueprint, utilizing Gatsby, React JS, and Tailwind CSS for creation.
        {" "}
          <b>
            <a href="https://github.com/bucketcodes/tetraxp">Click here</a>
          </b>{" "} for the Github repo.
        </p>
        </div>
        <div className="break-inside-avoid h-auto w-full max-w-lg p-2 rounded-lg bg-neutral-900 mb-2">
        <a className="mt-2 text-3xl font-bold text-neutral-300">TIMELINE (AGE, ERA)</a>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <Timeline>
          <TimelineItem>
            <TimelineConnector className="[&>*]:bg-red-500" />
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-red-500" />
              <Typography
                variant="h4"
                className="leading-none text-neutral-300"
              >
                08, ORIGIN
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-2">
              <Typography className="my-2 text-sm text-neutral-400">
                The genesis of life, the span of gestation. The dawn of
                creation, the roots of fervor. Historical snapshots, the nascent
                web.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector className="[&>*]:bg-red-500" />
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-red-500" />
              <Typography
                variant="h4"
                className="leading-none text-neutral-300"
              >
                13, EMBODIMENT
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-2">
              <Typography className="my-2 text-sm text-neutral-400">
                Existence, artistry for the world, a test of talent, a phase of
                learning. Blossoming into a maker, sowing the seeds.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector className="[&>*]:bg-red-500" />
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-red-500" />
              <Typography
                variant="h4"
                className="leading-none text-neutral-300"
              >
                19, EXPANSION
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-2">
              <Typography className="my-2 text-sm text-neutral-400">
                Cosmos-creating, earning from imagination, meeting of brutal
                truths, where a pastime turned into a refuge. A change in
                perspective.
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineConnector className="[&>*]:bg-red-500" />
            <TimelineHeader className="h-3">
              <TimelineIcon className="bg-red-500" />
              <Typography
                variant="h4"
                className="leading-none text-neutral-300"
              >
                23+, PRIME
              </Typography>
            </TimelineHeader>
            <TimelineBody>
              <Typography className="my-2 text-sm text-neutral-400">
                Final achievement, intense self-consciousness and insights. The
                voyage has grown solitary, but visions have never been nearer to
                grasp. A genuine peak, this is for eternity.
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </Fragment>
  );
};

export default artistBio;
