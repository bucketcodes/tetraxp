import * as React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import profilePic from "../assets/portrait.jpg";
import era1 from "../assets/kidportrait.jpg";
import era1art from "../assets/06-09.jpg";
import era2 from "../assets/10-15.jpg";
import era3 from "../assets/16-19.jpg";
import era4 from "../assets/20-xx.jpg";
import ironman from "../assets/ironman.png";
import lagif from "../assets/la-gif.gif";
import sonic from "../assets/sonic.png";
import end from "../assets/end.png";
import timeless2 from "../assets/timeless2.jpg";
import timelesspics from "../assets/timelesspics.jpg";
import ahhermes from "../assets/ahhermes.webp";
import yeeevs from "../assets/yeeevs.jpg";
import me16 from "../assets/me16.jpg";
import johnperform from "../assets/johnperform.webp";
import jaybw from "../assets/jaybw.webp";
import me2019 from "../assets/me2019.webp";
import beat from "../assets/beat.webp";
import art2018 from "../assets/art2018.jpg";
import sunny from "../assets/sunny.jpg";
import timeless2020 from "../assets/timeless2020.jpg";
import cheers from "../assets/cheers.jpg";
import nft1 from "../assets/nft1.webp";
import janrecap from "../assets/janrecap.webp";
import garnet from "../assets/garnet.webp";
import ultramarine from "../assets/ultramarine.webp";
import julyaugart from "../assets/julyaugart.webp";
import death from "../assets/death.webp";
import selfie2016 from "../assets/selfie2016.webp";
import cloudcrux from "../assets/cloudcrux.jpg";
import johnkev2014 from "../assets/johnkev2014.webp";
import winter2020shoot from "../assets/winter2020shoot.webp";
import rc from "../assets/rc.webp";
import vivi from "../assets/vivi.webp";
import desktop1 from "../assets/desktop1.webp";
import desktop2 from "../assets/desktop2.webp";
import pa2021 from "../assets/pa2021.webp";
import john2020shoot from "../assets/john2020shoot.webp";
import {
  Stepper,
  Step,
  Button,
  Typography,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
} from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillBehanceCircle,
} from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { HiMusicNote } from "react-icons/hi";
import { MdOutlineFacebook } from "react-icons/Md";
import { useState, useEffect } from "react";

const SkillBar = ({ skillName, progress }) => {
  const [currentProgress, setCurrentProgress] = useState(0);

  useEffect(() => {
    setCurrentProgress(progress);
  }, [progress]);

  return (
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs font-bold mr-2 b text-neutral-400">
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

const AboutPage = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  return (
    <div>
      <div className="flex max-w-xs mx-auto mb-10 sm:mb-10">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
          lineClassName="bg-neutral-800"
          activeLineClassName="bg-red-500"
        >
          <Step
            className="h-2 w-2 ring-opacity-0 bg-neutral-500"
            activeClassName="bg-red-500"
            completedClassName="bg-red-500"
            onClick={() => setActiveStep(0)}
          >
            <div className="absolute -bottom-[1.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "red" : "gray"}
                className="text-xs pointer-events-none select-none"
              >
                Bio
              </Typography>
            </div>
          </Step>
          <Step
            className="h-2 w-2 ring-opacity-0 bg-neutral-500"
            activeClassName="bg-red-500"
            completedClassName="bg-red-500"
            onClick={() => setActiveStep(1)}
          >
            <div className="absolute -bottom-[1.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "red" : "gray"}
                className="text-xs pointer-events-none select-none"
              >
                09 – 12
              </Typography>
            </div>
          </Step>
          <Step
            className="h-2 w-2 ring-opacity-0 bg-neutral-500"
            activeClassName="bg-red-500"
            completedClassName="bg-red-500"
            onClick={() => setActiveStep(2)}
          >
            <div className="absolute -bottom-[1.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "red" : "gray"}
                className="text-xs pointer-events-none select-none"
              >
                13 – 18
              </Typography>
            </div>
          </Step>
          <Step
            className="h-2 w-2 ring-opacity-0 bg-neutral-500"
            activeClassName="bg-red-500"
            completedClassName="bg-red-500"
            onClick={() => setActiveStep(3)}
          >
            <div className="absolute -bottom-[1.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 3 ? "red" : "gray"}
                className="text-xs pointer-events-none select-none"
              >
                19 – 22
              </Typography>
            </div>
          </Step>
          <Step
            className="h-2 w-2 ring-opacity-0 bg-neutral-500"
            activeClassName="bg-red-500"
            completedClassName="bg-red-500"
            onClick={() => setActiveStep(4)}
          >
            <div className="absolute -bottom-[1.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 4 ? "red" : "gray"}
                className="text-xs pointer-events-none select-none"
              >
                23 – XX
              </Typography>
            </div>
          </Step>
        </Stepper>
      </div>

      {activeStep === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center mx-auto px-4 md:max-w-max mb-8">
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={profilePic}
                alt={`Tetra portrait`}
              />
            </div>
            <h1 className=" mt-2 text-2xl font-bold">TETRA</h1>
            <p className="text-sm mb-2 text-neutral-600">
              Multidisciplinary Artist / Engineer
            </p>
            <div className="flex space-x-3">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/tetra.eth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <AiFillInstagram className="w-4 h-4" />
              </a>
              <a
                aria-label="Twitter"
                href="https://twitter.com/tetragocommando"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <AiFillTwitterCircle className="w-4 h-4" />
              </a>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/tetraxp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <MdOutlineFacebook className="w-4 h-4" />
              </a>
            </div>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <div className="flex flex-col">
              <SkillBar skillName="Creativity" progress={100} />
              <SkillBar skillName="Resilience" progress={99} />
              <SkillBar skillName="Versatility" progress={90} />
              <SkillBar skillName="Entropy" progress={95} />
              <SkillBar skillName="Influence" progress={85} />
            </div>
          </div>

          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <h2 className="text-lg font-bold">BIO</h2>
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
            <h2 className="text-lg font-bold mt-2">TIMELINE (AGES)</h2>
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
        </div>
      )}

      {activeStep === 1 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center mx-auto px-4 md:max-w-max mb-8">
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={era1}
                alt={`Tetra portrait`}
              />
            </div>
            <h1 className=" mt-2 text-2xl font-bold">TETRA</h1>
            <p className="text-sm mb-2 text-neutral-600">Future Veterinarian</p>
            <div className="flex space-x-3">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/tetra.eth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <AiFillInstagram className="w-4 h-4" />
              </a>
              <a
                aria-label="Twitter"
                href="https://twitter.com/tetragocommando"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <AiFillTwitterCircle className="w-4 h-4" />
              </a>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/tetraxp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <MdOutlineFacebook className="w-4 h-4" />
              </a>
            </div>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <div className="flex flex-col">
              <SkillBar skillName="Creativity" progress={60} />
              <SkillBar skillName="Resilience" progress={46} />
              <SkillBar skillName="Versatility" progress={37} />
              <SkillBar skillName="Entropy" progress={24} />
              <SkillBar skillName="Influence" progress={15} />
            </div>
          </div>

          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <h1 className=" text-2xl font-bold">ORIGIN ERA</h1>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              I spent a lot of time being creative, imagining different Zoo
              Tycoon 2 Parks, dreaming of becoming a Veterinarian, working with
              various animals and drawing the ones I liked in old notebooks, or
              just playing PlayStation 2, finding glitches in Ratchet:
              Deadlocked and trying to break the game. I built forums on
              InvisionFree, uploaded images and photos on Photobucket, and made
              friends from around the world on MSN. Humble and naive beginnings,
              where the transition from Dial-Up to DSL was significant.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={era1art}
                alt={`Old Signature Tags`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Signature Tags (2006)
            </p>
          </div>

          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <h1 className=" text-2xl font-bold">LEGENDS IN TIME</h1>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              My childhood was marked by a thrilling adventure in the virtual
              world of Ratchet: Deadlocked on PlayStation 2, a 2005 action
              platformer game by Insomniac. I joined a clan called the Crazy
              Killers, who later changed their name to Legends in Time. They
              introduced me to the forums, where I discovered the wonders of
              online community. I was amazed by the cool graphical signatures
              that everyone had, but I had no clue how to make them. My first
              attempt was a crude tracing of a Ratchet & Clank picture in paint.
              I thought it was ingenious, but I was naive.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={rc}
                alt={`Ratchet and Clank Signature`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              First Signature Ever Created (2006)
            </p>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              I realized that I had reached the limit of my artistic abilities
              at that time. The only thing I could do was draw in my notebook
              with a pencil. I decided to ask for help from other members on the
              forums who had amazing signatures. One of my favorite characters
              was Vivi from Final Fantasy 9, I used his image as my signature
              for a while.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={vivi}
                alt={`Vivi Signature`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Vivi Signature (2006)
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <h1 className=" text-2xl font-bold">WINDOWS XP</h1>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              I tried to create my own aesthetic on the computer screen, but it
              was a hopeless endeavor. I scattered my icons all over the
              desktop, thinking that it looked cool. But I had to share the
              desktop with my brother, who was into making beats at the time. We
              had FL Studio 6. We avoided using Internet Explorer, opting for
              Opera and Firefox instead. I dabbled mainly with Gimp, Zoo Tycoon
              2, and Rollercoaster Tycoon 3.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={desktop1}
                alt={`Desktop Screenshot 2007`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              First Desktop Screenshot (2007)
            </p>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              I had a knack for exploring the inner workings of Windows and
              installing custom themes, rather than using actual design
              software. So it didn’t take me long to figure out what appealed to
              my eyes more.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={desktop2}
                alt={`New Desktop`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Windows XP Custom Theme (2007)
            </p>
          </div>
        </div>
      )}

      {activeStep === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center mx-auto px-4 md:max-w-max mb-8">
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={era2}
                alt={`Tetra portrait`}
              />
            </div>
            <h1 className=" mt-2 text-2xl font-bold">TETRA</h1>
            <p className="text-sm mb-2 text-neutral-600">
              Artist / Server Owner / Engineer
            </p>
            <div className="flex space-x-3">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/tetra.eth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <AiFillInstagram className="w-4 h-4" />
              </a>
              <a
                aria-label="Twitter"
                href="https://twitter.com/tetragocommando"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <AiFillTwitterCircle className="w-4 h-4" />
              </a>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/tetraxp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <MdOutlineFacebook className="w-4 h-4" />
              </a>
            </div>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <div className="flex flex-col">
              <SkillBar skillName="Creativity" progress={75} />
              <SkillBar skillName="Resilience" progress={65} />
              <SkillBar skillName="Versatility" progress={60} />
              <SkillBar skillName="Entropy" progress={45} />
              <SkillBar skillName="Influence" progress={40} />
            </div>
          </div>

          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <h1 className=" text-2xl font-bold">EMBODIMENT ERA</h1>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              I had a lot of roles to play when I was of this age. It didn't
              seem like work, but I was taking on a lot of responsibilities. I
              had to balance school, gaming community, recording studio, graphic
              design, and more. I started turning my room into a music hub,
              sharpening my Photoshop skills through community projects and
              making cover art for friends and locals.
            </p>
            <p className="text-gray-600 text-xs mb-6">
              This was where I adapted to the tools that I'd use later on. I was
              discovering who I was and having fun. There were so many
              distractions, so many things to learn, every day was a new
              adventure.{" "}
              <b>
                <a href="https://cloudcrux.com/">CloudCrux</a>
              </b>{" "}
              expanded rapidly running various modded minecraft modpacks.
              Ableton became like an extension of me, mixing and mastering
              friends vocals on a regular basis. But all of it was preparing me
              for what was ahead.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={johnkev2014}
                alt={`CloudCrux Network`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Tetra HQ recording with Yeeevs, Bronx (Fall 2014)
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={cloudcrux}
                alt={`CloudCrux Network`}
              />
            </div>
            <h1 className=" mt-2 text-2xl font-bold">CLOUDCRUX NETWORK</h1>
            <p className="text-sm mb-2 text-neutral-600">Founded 2013</p>
            <div className="flex space-x-3">
              <a
                aria-label="Foundation"
                href="https://cloudcrux.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <FaGlobe className="w-4 h-4" />
              </a>
            </div>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              After leaving Hydrocity Gaming, I witnessed the emergence of some
              sub-communities that branched out and connected with each other.
              Some examples were Disorderly Gaming, Realms of Denryden, and many
              more. I founded CloudCrux with my friend Mikey, and it became a
              vital part of our community-building experience.
            </p>
            <p className="text-gray-600 text-xs mb-6">
              From him, I learned the ins and outs of Linux Debian, Server
              Management, and back-end work. It was a whole new world for me,
              but I loved it. We ran different custom modpack servers, depending
              on donations to maintain them. We created perks, lootboxes, and
              other rewards to entice and keep players without putting in any of
              our own money, since we were too broke to do so. We also enjoyed
              playing the modpacks ourselves, making sure they were as smooth as
              possible. But with java, there were always some glitches, like
              server memory leaks, incompatible blocks, and various unexpected
              problems. We tried our best to fix and prevent them with extra
              plugins or custom mods. It was a tough challenge, but we were
              dedicated to making a great experience.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={ironman}
                alt={`Ironman`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Ironman Signature (Spring 2013)
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={sonic}
                alt={`Hydrosis`}
              />
            </div>
            <h2 className="text-lg font-bold">HYDROCITY GAMING</h2>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              I started a thread on Hydrocity Gaming, a gaming community that I
              was part of, to showcase my signature designs. A signature is a
              small image that appears at the bottom of a forum post. I offered
              to make personalized signatures for anyone who wanted one, and
              soon I had hundreds of requests. My thread became the most popular
              one on the forums, with thousands of views and comments. I enjoyed
              making signatures for every active member who asked for one, using
              Photoshop to create unique and appealing graphics.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={end}
                alt={`TheMrTaco The End Signature`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              TheMrTaco Ender Dragon Signature (Spring 2013)
            </p>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>

            <p className="text-gray-600 text-xs mb-6">
              This project helped me refine my Photoshop skills and learn new
              techniques. It also helped me connect with many people from
              different backgrounds and interests, and form lasting friendships
              with some of them. We still keep in touch to this day. This was my
              creative outlet during school, where I could express myself and
              have fun, apart from my later server ownership responsibilities.
            </p>
          </div>
        </div>
      )}

      {activeStep === 3 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center mx-auto px-4 md:max-w-max mb-8">
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={era3}
                alt={`Tetra portrait`}
              />
            </div>
            <h1 className=" mt-2 text-2xl font-bold">TETRA</h1>
            <p className="text-sm mb-2 text-neutral-600">
              Cover Artist / Engineer
            </p>
            <div className="flex space-x-3">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/tetra.eth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <AiFillInstagram className="w-4 h-4" />
              </a>
              <a
                aria-label="Twitter"
                href="https://twitter.com/tetragocommando"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <AiFillTwitterCircle className="w-4 h-4" />
              </a>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/tetraxp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <MdOutlineFacebook className="w-4 h-4" />
              </a>
            </div>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <div className="flex flex-col">
              <SkillBar skillName="Creativity" progress={83} />
              <SkillBar skillName="Resilience" progress={70} />
              <SkillBar skillName="Versatility" progress={85} />
              <SkillBar skillName="Entropy" progress={100} />
              <SkillBar skillName="Influence" progress={55} />
            </div>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <h1 className=" text-2xl font-bold">EXPANSION ERA</h1>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              The world was against me. It was a perilous time full of
              betrayals, deaths, and changes of values. I could hardly smile,
              chaos was everywhere. I started to hate school and the people
              around me, but nothing drove me more to create. Creating was my
              only escape. I had left my role as Server Owner at Cloudcrux, and
              began to focus on other things. I was more passionate about making
              music, networking for artwork, photography, and shooting videos
              than ever before.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={me16}
                alt={`2016 John in Van Cortlandt`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Van Cortlandt Park, Bronx (Fall 2016)
            </p>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              I created my first well-crafted song of my own in 2017. It was
              called GTA over a BlackCivic beat. 2018 was a tough but
              transformative year for me. I filmed my first music video that
              summer, flew to LA by myself, and upgraded my equipment with my
              own money. LA was an amazing trip that taught me how to depend on
              myself and collaborate with other talented music artists. We had a
              blast, just vibing, living, and creating.
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={yeeevs}
                alt={`Yeeevs`}
              />
            </div>
            <h1 className=" mt-2 text-2xl font-bold">AH! HERMES</h1>
            <p className="text-sm mb-2 text-neutral-600">
              International Artist Collective (Winter 2019)
            </p>
            <div className="flex space-x-3">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/ah.hermes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <AiFillInstagram className="w-4 h-4" />
              </a>
              <a
                aria-label="Audius"
                href="https://audius.co/ahhermes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <HiMusicNote className="w-4 h-4" />
              </a>
            </div>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              Ah! Hermes was created in 2012, but 2019 was when we turned it
              into a collective of local and international music artists and
              producers. We were a versatile group with different skills and
              talents. I was an engineer, videographer, and a facilitator who
              helped some members record and produce their music. My room became
              Tetra HQ, where we had meetings to inspire and support each other
              creatively. We also partnered with Audius to participate in
              virtual concerts and other platform features. It felt like we were
              exploring a new frontier after Soundcloud.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={ahhermes}
                alt={`Ahhermes`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Joven Freestyle, Tetra HQ (Winter 2019)
            </p>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              In late 2019, I stepped on the stage for the first time in my
              life. It was one of the most exhilarating and unforgettable
              experiences I ever had. The event was a small one, organized by a
              friend of a friend. I was there as a photographer, capturing the
              moments of the other performers. But I also had a chance to
              showcase my own talent. I performed a feature that I had written
              and rehearsed. It was my only set, but I’m glad I did it. I felt a
              rush of adrenaline and joy as I shared my words with the audience.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={johnperform}
                alt={`John Performance`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Tetra Performance, Brooklyn (Fall 2019)
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={timeless2}
                alt={`Timeless`}
              />
            </div>
            <h1 className=" mt-2 text-2xl font-bold">TIMELESS</h1>
            <p className="text-sm mb-2 text-neutral-600">
              New York Clothing Brand (Summer 2019)
            </p>
            <div className="flex space-x-3">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/ny.timeless/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <AiFillInstagram className="w-4 h-4" />
              </a>
              <a
                aria-label="Twitter"
                href="https://nytimeless.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <FaGlobe className="w-4 h-4" />
              </a>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/tetraxp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <MdOutlineFacebook className="w-4 h-4" />
              </a>
            </div>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              Timeless was created in 2019. It was one of the most ambitious
              projects started with me and my friends like brothers, Jay and
              Eddie. It had been a dream long before it became a reality. Take
              Initiative, Model Excellence, Live Efficient, Start Something.
              That was our motto. We wanted to brand ourselves in a way that
              reflected the authentic spirit of some young, hungry, New York
              natives. We learned how to screenprint from scratch, sold out
              every collection. I took most of the photos with my Canon. It was
              an unprecedented detour that truly paid off.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={timelesspics}
                alt={`Timeless Pics`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Timeless Shoots, Charlotte (Summer 2019)
            </p>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={jaybw}
                alt={`Timeless Pics`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Jay with Timeless Stickers, Charlotte (Summer 2019)
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={selfie2016}
                alt={`2016 John Selfie`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Yeeevs HQ, Bronx (Fall 2016)
            </p>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              This photo captures a moment when I was indulging in my passion
              for DIY fashion. I had a knack for transforming plain band
              t-shirts into unique and edgy pieces by bleaching and distressing
              them. I would resell the shirts on online platforms like Grailed
              and Mercari.
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={beat}
                alt={`LA Kyle Making a Beat while Driving`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Driving & Beatmaking, California (Summer 2018)
            </p>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              The year 2019 marked the zenith of this epoch. After completing my
              education, I accelerated my ambitions. I returned to the LA for
              the launch of Stay Sunny by Holland Izz. We founded Timeless in
              that same summer. When I came back to New York, we transformed Ah!
              Hermes into a formidable musical collective. It was a splendid
              culmination of what we had cultivated in the previous years.
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={art2018}
                alt={`LA`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Cover Artwork Compilation (Summer 2018)
            </p>
            <p className="text-gray-600 text-xs mb-6">
              Throughout this year, I focused on creating cover artwork for
              various clients while also exploring other artistic mediums. This
              was a way to cope with my emotions and to divert my attention from
              my troubles. I found it difficult to make art for myself, to
              express my own vision and feelings if it wasn't disguised through
              art I had done for others.
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={sunny}
                alt={`LA`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Holland Izz - Sunny Tapes Vol 1 (Summer 2018)
            </p>
          </div>
        </div>
      )}

      {activeStep === 4 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center mx-auto px-4 md:max-w-max mb-8">
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={era4}
                alt={`Tetra portrait`}
              />
            </div>
            <h1 className=" mt-2 text-2xl font-bold">TETRA</h1>
            <p className="text-sm mb-2 text-neutral-600">Artist</p>
            <div className="flex space-x-3">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/tetra.eth/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <AiFillInstagram className="w-4 h-4" />
              </a>
              <a
                aria-label="Twitter"
                href="https://twitter.com/tetragocommando"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <AiFillTwitterCircle className="w-4 h-4" />
              </a>
              <a
                aria-label="Facebook"
                href="https://www.facebook.com/tetraxp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <MdOutlineFacebook className="w-4 h-4" />
              </a>
            </div>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <div className="flex flex-col">
              <SkillBar skillName="Creativity" progress={100} />
              <SkillBar skillName="Resilience" progress={99} />
              <SkillBar skillName="Versatility" progress={90} />
              <SkillBar skillName="Entropy" progress={95} />
              <SkillBar skillName="Influence" progress={85} />
            </div>
            <div className="relative mt-4">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={john2020shoot}
                alt={`2020 John`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Garnet Christmas Shoot (Last Winter 2020)
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <h1 className=" text-2xl font-bold">PRIME ERA</h1>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={winter2020shoot}
                alt={`2020 John`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Garnet Christmas Shoot (Last Winter 2020)
            </p>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              2020 was one of the most progressive years, a true test of
              versatility and resilience. I spent a lot of time helping people
              get equipped for what might've seemed like the end. Whether it be
              getting them new hardware or benefits to aid them and their
              families, the art of this year was created in helping others. What
              should've been one month in North Carolina turned into six.
            </p>

            <p className="text-gray-600 text-xs mb-6">
              The only objective was to stay alive, survive, and innovate. I
              bought a laptop on my last thousand stuck in NC, but it helped me
              do everything that I did. I got my first car, I started making art
              for myself, things started to pick up pace.
            </p>
            <p className="text-gray-600 text-xs mb-6">
              Throughout the year of 2021, I traveled across Chicago and
              Charlotte, knocking on doors and pitching products as a
              salesperson. It was a grueling and exhausting job, but it also
              sparked my interest in a new form of artistic expression: minting
              NFTs. I was fascinated by the possibilities of digital art and
              blockchain technology, and I wanted to explore them more. So, by
              the end of the year, I made a bold decision: I quit my sales job
              and took some time off to figure out my situation with creating
              art.
            </p>
            <p className="text-gray-600 text-xs mb-6">
              I didn’t produce any new pieces during that period, but I felt
              that the break was necessary for my well-being and creativity.
              Now, I am a thriving full-time artist, living my dream and sharing
              my vision with the world. But I also know that I have a long way
              to go, and that I need to keep learning and growing as an artist.
              I am grateful for the journey that led me here, and I am excited
              for the future that awaits me.
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={janrecap}
                alt={`January Art Recap 2023`}
              />
            </div>
            <h1 className=" mt-2 text-2xl font-bold">TETRA RENAISSANCE</h1>
            <p className="text-sm mb-2 text-neutral-600">
              January Recap (First Winter 2023)
            </p>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              I had fallen into a creative slumber after settling down in North
              Carolina. I was struggling to make ends meet with random gigs and
              commissions. Then, in June of 2022, something clicked in me. I
              realized what I wanted to do. NFTs were not as hot as they used to
              be, but that was also a chance to start fresh. I committed to
              making a piece every day and never turning back.
            </p>
            <p className="text-gray-600 text-xs mb-6">
              In the past nine months, I have produced more than 200 pieces of
              art, making this the most prolific year of my career. I have
              achieved the dream of being a full-time artist, but this is just
              the start.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={julyaugart}
                alt={`julyaugart`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              July - August Art Highlights (Summer 2022)
            </p>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              My work is a reflection of my inner world, where I explore the
              contrasts and complexities of human emotions. I feel the solitude
              of the soul, the intensity of the passions, and the resolve of the
              will. I embrace a motto: “At war with entropy”, which captures the
              essence of our existence. We defy the inevitable decay and
              dissolution, we strive to create and preserve, even though we know
              that death awaits us all. The war with entropy is a hopeless one,
              but we fight. This is the story I tell through every piece I
              create.
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={nft1}
                alt={`I'll Protect You In Every Life`}
              />
            </div>
            <h1 className=" mt-2 text-2xl font-bold">NFTS</h1>
            <p className="text-sm mb-2 text-neutral-600">
              I'll Protect You in Every Life (Sold, 2022)
            </p>
            <div className="flex space-x-3">
              <a
                aria-label="Foundation"
                href="https://foundation.app/@TETRA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <FaGlobe className="w-4 h-4" />
              </a>
            </div>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              End of 2020, Audius had airdropped quite a few tokens to active
              members of the community. Considering that Ah! Hermes was still
              active digitally at the time, all of us had transitioned to the
              platform. I decided to convert the tokens to Ethereum, from there
              I found out about the NFT market, joining this Telegram Community
              named Art Gallery Auction House, setting up my MetaMask wallet,
              and selling my genesis piece on the marketplace called Rarible.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={death}
                alt={`January Art Recap 2023`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              After Death, the Gods Rise to Create the World Again (Sold, 2022)
            </p>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              This space has opened up a new world of possibilities for me as an
              artist. I have been able to sell my creations for more than I ever
              dreamed of. The digital economy is no longer a fantasy, but a
              reality. For years, I have been honing my skills and building my
              social currency, but there was never a real market for digital art
              beyond conventional commissions. Now, I have sold pieces for
              thousands of dollars, and they are all personal works that reflect
              my vision and passion. I realized that this art is eternal. A
              flame that was about to die out has been rekindled with more
              intensity than ever.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={cheers}
                alt={`Cheers Club`}
              />
            </div>

            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Cheers Club, 1 ETH (Sold 2021)
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={ultramarine}
                alt={`Ultramarine`}
              />
            </div>
            <h1 className=" mt-2 text-2xl font-bold">ULTRAMARINE</h1>
            <p className="text-sm mb-2 text-neutral-600">
              Released July 16, 2021
            </p>
            <div className="flex space-x-3">
              <a
                aria-label="Foundation"
                href="https://open.spotify.com/album/1qBikR7DOkbWVUYz1WrPwB?si=aSa8BMCFSrqkDe9X-kX0xw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <HiMusicNote className="w-4 h-4" />
              </a>
            </div>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              𝐔𝐋𝐓𝐑𝐀𝐌𝐀𝐑𝐈𝐍𝐄 (əltrəməˈrēn / pisces / waterbaby) is a collaborative
              project that features Tetra as the recording artist & engineer and
              Joven as the lead producer & engineer. It was started in the
              Bronx, NY, and completed in Chicago, IL. It explores the creation
              of man in their most natural element, through a transformative
              journey. The project blends experimental Caribbean sounds with the
              essence of Bronx boom-bap type flows. It is a short, yet rich
              journey of natives pushing the boundaries of traditional rap
              music.
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={garnet}
                alt={`GARNET ALBUM COVER`}
              />
            </div>
            <h1 className=" mt-2 text-2xl font-bold">GARNET</h1>
            <p className="text-sm mb-2 text-neutral-600">
              Released December 25, 2020
            </p>
            <div className="flex space-x-3">
              <a
                aria-label="Foundation"
                href="https://open.spotify.com/album/5xpBNPrFQH6BbiBrjSiYKA?si=CTPmGeb6SU6ERmzXQ8d1HQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-white transition-colors duration-300"
              >
                <HiMusicNote className="w-4 h-4" />
              </a>
            </div>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              Garnet was the first official album that I released on all music
              streaming platforms, introducing myself as a solo artist and an
              engineer to the world. It was a reflection of all the lessons and
              experiences I had gained from collaborating with amazing engineers
              and fellow artists who inspired me and helped me grow. It featured
              a diverse range of beats from OXVX, Navan, Remilia, MXXXY, Yung
              Paneer, and captivating vocals from Joven and Yeeevs. Put together
              all in Tetra HQ.
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={pa2021}
                alt={`2020 John`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Lake Wallenpaupack, Pennsylvania (First Winter 2021)
            </p>
          </div>
          <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
          <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={timeless2020}
                alt={`LA`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Timeless, Collection 3 (Spring 2020)
            </p>
            <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
            <p className="text-gray-600 text-xs mb-6">
              Even though the pandemic ravaged the world in the same month as
              our launch of Collection 3 for Timeless, we still succeeded in
              selling it. We overcame the challenges of lockdowns, supply chain
              disruptions and customer fears with our innovative and resilient
              strategies.
            </p>
            <div className="relative">
              <img
                className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
                src={me2019}
                alt={`2020 John`}
              />
            </div>
            <p className="text-xs mt-2 mb-2 text-neutral-600">
              Tetra Post-Performance, Brooklyn (First Winter 2020)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;

export const Head = () => <title>About</title>;
