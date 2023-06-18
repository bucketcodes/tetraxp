import * as React from "react";
import timeless2 from "../assets/timeless2.jpg";
import timelesspics from "../assets/timelesspics.jpg";
import ahhermes from "../assets/ahhermes.webp";
import yeeevs from "../assets/yeeevs.jpg";
import me16 from "../assets/me16.jpg";
import johnperform from "../assets/johnperform.webp";
import jaybw from "../assets/jaybw.webp";
import beat from "../assets/beat.webp";
import art2018 from "../assets/art2018.jpg";
import sunny from "../assets/sunny.jpg";
import selfie2016 from "../assets/selfie2016.webp";
import { Fragment } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { HiMusicNote } from "react-icons/hi";
import { MdOutlineFacebook } from "react-icons/Md";

const expansionEra = () => {
  return (
    <Fragment>
      <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
        <h1 className=" text-2xl font-bold">EXPANSION ERA</h1>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          The world was against me. It was a perilous time full of betrayals,
          deaths, and changes of values. I could hardly smile, chaos was
          everywhere. I started to hate school and the people around me, but
          nothing drove me more to create. Creating was my only escape. I had
          left my role as Server Owner at Cloudcrux, and began to focus on other
          things. I was more passionate about making music, networking for
          artwork, photography, and shooting videos than ever before.
        </p>
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={me16}
            alt={`Van Cortlandt Park, Bronx (Shot by Yeeevs) (Fall 2016)`}
          />
        </div>
        <p className="text-xs mt-2 mb-2 text-neutral-600">
          Van Cortlandt Park, Bronx (Shot by Yeeevs) (Fall 2016)
        </p>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          I created my first well-crafted song of my own in 2017. It was called
          GTA over a BlackCivic beat. 2018 was a tough but transformative year
          for me; I filmed my first music video that summer, flew to LA by
          myself, and upgraded my equipment with my own money. LA was an amazing
          trip that taught me how to depend on myself and collaborate with other
          talented music artists. We had a blast, just vibing, living, and
          creating. I was creating a catalyst.
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
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          Ah! Hermes was created in 2012, but 2019 was when we turned it into a
          collective of local and international music artists and producers. We
          were a versatile group with different skills and talents. I was an
          engineer, videographer, and a facilitator who helped some members
          record and produce their music. My room became Tetra HQ, where we had
          meetings to inspire and support each other creatively. We also
          partnered with Audius to participate in virtual concerts and other
          platform features. It felt like we were exploring a new frontier after
          Soundcloud.
        </p>
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={ahhermes}
            alt={`Joven Freestyle, Tetra HQ (Winter 2019)`}
          />
        </div>
        <p className="text-xs mt-2 mb-2 text-neutral-600">
          Joven Freestyle, Tetra HQ (Winter 2019)
        </p>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          In late 2019, I stepped on the stage for the first time in my life. It
          was one of the most exhilarating and unforgettable experiences I ever
          had. The event was a small one, organized by a friend of a friend. I
          was there as a photographer, capturing the moments of the other
          performers. But I also had a chance to showcase my own talent. I
          performed a feature that I had written and rehearsed. It was my only
          set, but I’m glad I did it. I felt a rush of adrenaline and joy as I
          shared my words with the audience.
        </p>
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={johnperform}
            alt={`Tetra Performance, Brooklyn (Shot by Joven) (Fall 2019)`}
          />
        </div>
        <p className="text-xs mt-2 mb-2 text-neutral-600">
          Tetra Performance, Brooklyn (Shot by Joven) (Fall 2019)
        </p>
      </div>
      <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={timeless2}
            alt={`Timeless Photoshop Shoots Eddie/Jay/Tetra (2019)`}
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
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          Timeless was created in 2019. It was one of the most ambitious
          projects started with me and my friends like brothers, Jay and Eddie.
          It had been a dream long before it became a reality. Take Initiative,
          Model Excellence, Live Efficient, Start Something. That was our motto.
          We wanted to brand ourselves in a way that reflected the authentic
          spirit of some young, hungry, New York natives. We learned how to
          screenprint from scratch, sold out every collection. I took most of
          the photos with my Canon. It was an unprecedented detour that truly
          paid off.
        </p>
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={timelesspics}
            alt={`Timeless Shoots, Charlotte (Summer 2019)`}
          />
        </div>
        <p className="text-xs mt-2 mb-2 text-neutral-600">
          Timeless Shoots, Charlotte (Summer 2019)
        </p>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={jaybw}
            alt={`Jay with Timeless Stickers, Charlotte (Summer 2019)`}
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
            alt={`Portrait at Yeeevs HQ, Bronx (Fall 2016)`}
          />
        </div>
        <p className="text-xs mt-2 mb-2 text-neutral-600">
          Portrait at Yeeevs HQ, Bronx (Fall 2016)
        </p>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          This photo captures a moment when I was indulging in my passion for
          DIY fashion. I had a knack for transforming plain band t-shirts into
          unique and edgy pieces by bleaching and distressing them. I would
          resell the shirts on online platforms like Grailed and Mercari. At the
          time, I went over to Yeeev's crib to get some help to shoot the
          shirts, although many shots were left unused, there are still gem
          portraits from this day archived.
        </p>
      </div>
      <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={beat}
            alt={`Kyle Driving & Beatmaking, California (Summer 2018)`}
          />
        </div>
        <p className="text-xs mt-2 mb-2 text-neutral-600">
          Kyle Driving & Beatmaking, California (Summer 2018)
        </p>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          The year 2019 marked the zenith of this epoch. After completing my
          education, I accelerated my ambitions. After the recharge I felt in
          going to LA the first time in 2018, I returned to the LA for the
          launch of Stay Sunny by Holland Izz, had a successful launch party for
          that as well. We founded Timeless in that same summer. When I came
          back to New York, we transformed Ah! Hermes into a formidable musical
          collective. It was a splendid culmination of what we had cultivated in
          the previous years.
        </p>
      </div>
      <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={art2018}
            alt={`Cover Artwork Compilation (Summer 2018)`}
          />
        </div>
        <p className="text-xs mt-2 mb-2 text-neutral-600">
          Cover Artwork Compilation (Summer 2018)
        </p>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          Throughout this year, I focused on creating cover artwork for various
          clients while also exploring other artistic mediums. This was a way to
          cope with my emotions and to divert my attention from my troubles. I
          found it difficult to make art for myself, to express my own vision
          and feelings if it wasn't disguised through art I had done for others.
        </p>
      </div>
      <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={sunny}
            alt={`Holland Izz - Sunny Tapes Vol 1 (Summer 2018)`}
          />
        </div>
        <p className="text-xs mt-2 mb-2 text-neutral-600">
          Holland Izz - Sunny Tapes Vol 1 (Summer 2018)
        </p>
      </div>
    </Fragment>
  );
};

export default expansionEra;
