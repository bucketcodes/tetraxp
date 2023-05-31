import * as React from "react";
import ironman from "../assets/ironman.png";
import sonic from "../assets/sonic.png";
import end from "../assets/end.png";
import cloudcrux from "../assets/cloudcrux.jpg";
import johnkev2014 from "../assets/johnkev2014.webp";
import { Fragment } from "react";
import { FaGlobe } from "react-icons/fa";

const Era2Embodiment = ({}) => {
  return (
    <Fragment>
      <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
        <h1 className=" text-2xl font-bold">EMBODIMENT ERA</h1>
        <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          I had a lot of roles to play when I was of this age. It didn't seem
          like work, but I was taking on a lot of responsibilities. I had to
          balance school, gaming community, recording studio, graphic design,
          and more. I started turning my room into a music hub, sharpening my
          Photoshop skills through community projects and making cover art for
          friends and locals.
        </p>
        <p className="text-gray-600 text-xs mb-6">
          This was where I adapted to the tools that I'd use later on. I was
          discovering who I was and having fun. There were so many distractions,
          so many things to learn, every day was a new adventure.{" "}
          <b>
            <a href="https://cloudcrux.com/">CloudCrux</a>
          </b>{" "}
          expanded rapidly running various modded minecraft modpacks. Ableton
          became like an extension of me, mixing and mastering friends vocals on
          a regular basis. But all of it was preparing me for what was ahead.
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
        <h1 className="mt-2 text-2xl font-bold">CLOUDCRUX NETWORK</h1>
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
          sub-communities that branched out and connected with each other. Some
          examples were Disorderly Gaming, Realms of Denryden, and many more. I
          founded CloudCrux with my friend Mikey, and it became a vital part of
          our community-building experience.
        </p>
        <p className="text-gray-600 text-xs mb-6">
          From him, I learned the ins and outs of Linux Debian, Server
          Management, and back-end work. It was a whole new world for me, but I
          loved it. We ran different custom modpack servers, depending on
          donations to maintain them. We created perks, lootboxes, and other
          rewards to entice and keep players without putting in any of our own
          money, since we were too broke to do so. We also enjoyed playing the
          modpacks ourselves, making sure they were as smooth as possible. But
          with java, there were always some glitches, like server memory leaks,
          incompatible blocks, and various unexpected problems. We tried our
          best to fix and prevent them with extra plugins or custom mods. It was
          a tough challenge, but we were dedicated to making a great experience.
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
        <h1 className=" text-2xl font-bold">HYDROCITY GAMING</h1>
        <hr class="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          I started a thread on Hydrocity Gaming, a gaming community that I was
          part of, to showcase my signature designs. A signature is a small
          image that appears at the bottom of a forum post. I offered to make
          personalized signatures for anyone who wanted one, and soon I had
          hundreds of requests. My thread became the most popular one on the
          forums, with thousands of views and comments. I enjoyed making
          signatures for every active member who asked for one, using Photoshop
          to create unique and appealing graphics.
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
          techniques. It also helped me connect with many people from different
          backgrounds and interests, and form lasting friendships with some of
          them. We still keep in touch to this day. This was my creative outlet
          during school, where I could express myself and have fun, apart from
          my later server ownership responsibilities.
        </p>
      </div>
    </Fragment>
  );
};

export default Era2Embodiment;
