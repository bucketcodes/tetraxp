import * as React from "react";
import era1art from "../assets/06-09.jpg";
import rc from "../assets/rc.webp";
import vivi from "../assets/vivi.webp";
import desktop1 from "../assets/desktop1.webp";
import desktop2 from "../assets/desktop2.webp";
import { Fragment } from "react";

const originEra = () => {
  return (
    <Fragment>
      <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
        <h1 className=" text-2xl font-bold">ORIGIN ERA</h1>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          I spent a lot of time exploring creativeness in weird ways, imagining
          different Zoo Tycoon 2 Parks, dreaming of becoming a Veterinarian,
          working with various animals and drawing the ones I liked in old
          notebooks, or just playing PlayStation 2, finding glitches in Ratchet:
          Deadlocked and trying to break the game. I built forums on
          InvisionFree, uploaded images and photos on Photobucket, and made
          friends from around the world on MSN. Humble and naive beginnings,
          where the transition from Dial-Up to DSL was still significant.
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
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          My childhood was marked by a thrilling adventure in the virtual world
          of Ratchet: Deadlocked on PlayStation 2, a 2005 action platformer game
          by Insomniac. I joined a clan called the Crazy Killers, who later
          changed their name to Legends in Time. They introduced me to the
          forums, where I discovered the wonders of online community. I was
          amazed by the cool graphical signatures that everyone had, but I had
          no clue how to make them. My first attempt was a crude tracing of a
          Ratchet & Clank picture in paint. I thought it was ingenious, but I
          was naive.
        </p>
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={rc}
            alt={`Ratchet and Clank Signature (2006)`}
          />
        </div>
        <p className="text-xs mt-2 mb-2 text-neutral-600">
          First Signature Ever Created (2006)
        </p>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          I realized that I had reached the limit of my artistic abilities at
          that time. The only thing I could do was draw in my notebook with a
          pencil. I decided to ask for help from other members on the forums who
          had amazing signatures. One of my favorite characters was Vivi from
          Final Fantasy 9, I used his image as my signature for a while.
        </p>
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={vivi}
            alt={`Vivi Signature (2006)`}
          />
        </div>
        <p className="text-xs mt-2 mb-2 text-neutral-600">
          Vivi Signature (2006)
        </p>
      </div>
      <div className="w-full sm:max-w-sm max-w-sm p-2 rounded-lg shadow-lg bg-neutral-900">
        <h1 className=" text-2xl font-bold">WINDOWS XP</h1>
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          I tried to create my own aesthetic on the computer screen, but it was
          a hopeless endeavor. I scattered my icons all over the desktop,
          thinking that it looked cool. But I had to share the desktop with my
          brother, who was into making beats at the time. We had FL Studio 6. We
          avoided using Internet Explorer, opting for Opera and Firefox instead.
          I dabbled mainly with Gimp, Zoo Tycoon 2, and Rollercoaster Tycoon 3.
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
        <hr className="w-full h-px mx-auto border-0 rounded mt-2 mb-4 bg-neutral-800"></hr>
        <p className="text-gray-600 text-xs mb-6">
          I had a knack for exploring the inner workings of Windows and
          installing custom themes, rather than using actual design software. So
          it didn’t take me long to figure out what appealed to my eyes more.
        </p>
        <div className="relative">
          <img
            className="object-cover w-full h-full rounded-lg transition-opacity duration-500"
            src={desktop2}
            alt={`Windows XP Custom Theme (2007)`}
          />
        </div>
        <p className="text-xs mt-2 mb-2 text-neutral-600">
          Windows XP Custom Theme (2007)
        </p>
      </div>
    </Fragment>
  );
};

export default originEra;
