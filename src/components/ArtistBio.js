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

const artistBio = () => {
  return (
    <Fragment>
      <div className="break-inside-avoid h-auto w-full max-w-lg p-2 rounded-lg bg-neutral-900 mb-2">
        <a className=" text-3xl text-neutral-300 font-bold">BIO</a>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-neutral-400 text-sm mb-6">
          Tetra is a multi-disciplinary artist and engineer from New York who is
          known for their unique blend of mediums and styles. Born and raised in
          the city, Tetra’s work often reflects the chaos and energy of their
          surroundings. They’re particularly interested in exploring the concept
          of entropy, and many of their pieces are inspired by the idea of
          battling against the inherent disorder of the universe.
        </p>
        <a className=" text-3xl text-neutral-300 font-bold">WEBSITE INFO</a>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-neutral-400 text-sm mb-6">
        This website is the work of Tetra, utilizing Gatsby, React JS, and Tailwind CSS for creation.
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
                08 – 12, ORIGIN
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
                13 – 18, EMBODIMENT
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
                19 – 22, EXPANSION
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
                23 – XX, PRIME
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
