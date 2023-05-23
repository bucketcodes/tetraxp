import * as React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import profilePic from "../assets/portrait.jpg";
import era1 from "../assets/kidportrait.jpg";
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
import { MdOutlineFacebook } from "react-icons/Md";

const SkillBar = ({ skillName, progress }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <span className="text-xs font-bold mr-2 b text-neutral-400">
        {skillName}
      </span>
      <div className="w-3/4 bg-neutral-800 rounded-full">
        <div
          className="bg-red-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
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
                06 – 09
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
                10 – 15
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
                16 – 19
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
                20 – XX
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
              <SkillBar skillName="Versatility" progress={94} />
              <SkillBar skillName="Entropy" progress={77} />
              <SkillBar skillName="Influence" progress={66} />
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
            <h2 className="text-lg font-bold mt-2">TIMELINE</h2>
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
                    06 – 09
                  </Typography>
                  <Typography
                    variant="h6"
                    className="leading-none text-sm text-neutral-700"
                  >
                    // ORIGIN ERA
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-2">
                  <Typography
                    variant="small"
                    className="text-xs text-gray-600"
                  >
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
                    10 – 15
                  </Typography>
                  <Typography
                    variant="h6"
                    className="leading-none text-sm text-neutral-700"
                  >
                    // EMBODIMENT ERA
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-2">
                  <Typography
                    variant="small"
                    className="text-xs text-gray-600"
                  >
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
                    16 – 19
                  </Typography>
                  <Typography
                    variant="h6"
                    className="leading-none text-sm text-neutral-700"
                  >
                    // EXISTENTIALISM ERA
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-2">
                  <Typography
                    variant="small"
                    className="text-xs text-gray-600"
                  >
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
                    20 – XX
                  </Typography>
                  <Typography
                    variant="h6"
                    className="leading-none text-sm text-neutral-700"
                  >
                    // PRIME ERA
                  </Typography>
                </TimelineHeader>
                <TimelineBody>
                  <Typography
                    variant="small"
                    className="text-xs text-gray-600"
                  >
                    Ultimate fruition, hyper self-awareness and realizations.
                    The journey has become lonely, but dreams have never been
                    closer within reach. A true prime, this is for life.
                  </Typography>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
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
              Tetra is more than just an artist, they are also a lifelong
              learner and a generous teacher. They have a thirst for knowledge
              and a flair for creativity, and they love to share their insights
              and abilities with others. They have a talent for finding
              solutions to complex problems, whether they relate to art,
              technology, or people. They have a solid academic background in
              computer science, and they have used their skills in various
              projects and roles. They have a vision of making the world a
              better place through their work, and they are always ready to take
              on new challenges and opportunities.
            </p>
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
              Tetra is more than just an artist, they are also a lifelong
              learner and a generous teacher. They have a thirst for knowledge
              and a flair for creativity, and they love to share their insights
              and abilities with others. They have a talent for finding
              solutions to complex problems, whether they relate to art,
              technology, or people. They have a solid academic background in
              computer science, and they have used their skills in various
              projects and roles. They have a vision of making the world a
              better place through their work, and they are always ready to take
              on new challenges and opportunities.
            </p>
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
             <SkillBar skillName="Versatility" progress={94} />
             <SkillBar skillName="Entropy" progress={77} />
             <SkillBar skillName="Influence" progress={66} />
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
           <h2 className="text-lg font-bold mt-2">TIMELINE</h2>
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
                   06 – 09
                 </Typography>
                 <Typography
                   variant="h6"
                   className="leading-none text-sm text-neutral-700"
                 >
                   // ORIGIN ERA
                 </Typography>
               </TimelineHeader>
               <TimelineBody className="pb-2">
                 <Typography
                   variant="small"
                   className="text-xs text-gray-600"
                 >
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
                   10 – 15
                 </Typography>
                 <Typography
                   variant="h6"
                   className="leading-none text-sm text-neutral-700"
                 >
                   // EMBODIMENT ERA
                 </Typography>
               </TimelineHeader>
               <TimelineBody className="pb-2">
                 <Typography
                   variant="small"
                   className="text-xs text-gray-600"
                 >
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
                   16 – 19
                 </Typography>
                 <Typography
                   variant="h6"
                   className="leading-none text-sm text-neutral-700"
                 >
                   // EXISTENTIALISM ERA
                 </Typography>
               </TimelineHeader>
               <TimelineBody className="pb-2">
                 <Typography
                   variant="small"
                   className="text-xs text-gray-600"
                 >
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
                   20 – XX
                 </Typography>
                 <Typography
                   variant="h6"
                   className="leading-none text-sm text-neutral-700"
                 >
                   // PRIME ERA
                 </Typography>
               </TimelineHeader>
               <TimelineBody>
                 <Typography
                   variant="small"
                   className="text-xs text-gray-600"
                 >
                   Ultimate fruition, hyper self-awareness and realizations.
                   The journey has become lonely, but dreams have never been
                   closer within reach. A true prime, this is for life.
                 </Typography>
               </TimelineBody>
             </TimelineItem>
           </Timeline>
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
             Tetra is more than just an artist, they are also a lifelong
             learner and a generous teacher. They have a thirst for knowledge
             and a flair for creativity, and they love to share their insights
             and abilities with others. They have a talent for finding
             solutions to complex problems, whether they relate to art,
             technology, or people. They have a solid academic background in
             computer science, and they have used their skills in various
             projects and roles. They have a vision of making the world a
             better place through their work, and they are always ready to take
             on new challenges and opportunities.
           </p>
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
             Tetra is more than just an artist, they are also a lifelong
             learner and a generous teacher. They have a thirst for knowledge
             and a flair for creativity, and they love to share their insights
             and abilities with others. They have a talent for finding
             solutions to complex problems, whether they relate to art,
             technology, or people. They have a solid academic background in
             computer science, and they have used their skills in various
             projects and roles. They have a vision of making the world a
             better place through their work, and they are always ready to take
             on new challenges and opportunities.
           </p>
         </div>
       </div>
     )}

      {activeStep === 2 && (
        <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900 mx-auto">
          <div className="p-2">
            <h2 className="text-lg font-bold mb-4 text-neutral-500">
              Education
            </h2>
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <IoMdSchool className="text-neutral-500 mr-2" />
                <div>
                  <h3 className="text-neutral-500 font-bold">School Name</h3>
                  <p className="text-neutral-600 text-xs">Degree</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <IoMdSchool className="text-neutral-500 mr-2" />
                <div>
                  <h3 className="text-neutral-500 font-bold">School Name</h3>
                  <p className="text-neutral-600 text-xs">Degree</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;

export const Head = () => <title>About</title>;
