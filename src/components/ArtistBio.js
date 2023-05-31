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


const ArtistBio = ({}) => {
  return (
    <Fragment>
    <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
      <h1 className=" text-2xl font-bold">BIO</h1>
      <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
      <p className="text-gray-600 text-xs mb-6">
        Tetra is a multi-disciplinary artist from New York who is known
        for their unique blend of mediums and styles. Born and raised in
        the city, Tetra’s work often reflects the chaos and energy of
        their surroundings. They’re particularly interested in exploring
        the concept of entropy, and many of their pieces are inspired by
        the idea of battling against the inherent disorder of the
        universe.
      </p>
      <p className="text-gray-600 text-xs">
        Tetra is not only an artist, but also a lifelong learner and a
        generous teacher. With a thirst for knowledge and a flair for
        creativity, they love to share their insights and abilities with
        others. They have a talent for finding solutions to complex
        problems, whether they relate to art, technology, or people. They
        have a vision of making the world a better place through their
        work, and they are always ready to take on new challenges and
        opportunities that will help them grow and learn.
      </p>
      <h1 className="mt-2 text-2xl font-bold">TIMELINE (AGE)</h1>
      <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
      <Timeline>
        <TimelineItem>
          <TimelineConnector className="[&>*]:bg-red-500" />
          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-red-500" />
            <Typography
              variant="h6"
              className="leading-none text-neutral-400"
            >
              09 – 12
            </Typography>
            <Typography
              variant="h6"
              className="leading-none text-sm text-neutral-700"
            >
              // ORIGIN ERA
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-2">
            <Typography variant="small" className="text-xs text-gray-600">
              Early life development, incubation period. The beginning of
              creation, the origins of passion. Archival images, the early
              internet.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector className="[&>*]:bg-red-500" />
          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-red-500" />
            <Typography
              variant="h6"
              className="leading-none text-neutral-400"
            >
              13 – 18
            </Typography>
            <Typography
              variant="h6"
              className="leading-none text-sm text-neutral-700"
            >
              // EMBODIMENT ERA
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-2">
            <Typography variant="small" className="text-xs text-gray-600">
              Presence, creation for others, a measure of skill, a
              learning period. Growing into becoming a creator, planting
              the seeds.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector className="[&>*]:bg-red-500" />
          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-red-500" />
            <Typography
              variant="h6"
              className="leading-none text-neutral-400"
            >
              19 – 22
            </Typography>
            <Typography
              variant="h6"
              className="leading-none text-sm text-neutral-700"
            >
              // EXPANSION ERA
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-2">
            <Typography variant="small" className="text-xs text-gray-600">
              World-building, generation of income through vision,
              convergence of harsh realities, where a hobby became an
              escape. A shift in perception.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <TimelineItem>
          <TimelineConnector className="[&>*]:bg-red-500" />
          <TimelineHeader className="h-3">
            <TimelineIcon className="bg-red-500" />
            <Typography
              variant="h6"
              className="leading-none text-neutral-400"
            >
              23 – XX
            </Typography>
            <Typography
              variant="h6"
              className="leading-none text-sm text-neutral-700"
            >
              // PRIME ERA
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography variant="small" className="text-xs text-gray-600">
              Ultimate fruition, hyper self-awareness and realizations.
              The journey has become lonely, but dreams have never been
              closer within reach. A true prime, this is for life.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
    </Fragment>
  );
};

export default ArtistBio;
