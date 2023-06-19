import * as React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import collabs from "../assets/collabs.svg";
import { ReactSVG } from "react-svg";
import catalyst from "../assets/Catalyst.webp";
import reaperwolf from "../assets/Wolfgang.webp";
import purgatory from "../assets/Purgatory.webp";

const breakpointColumnsObj = {
  default: 6,
  1536: 5,
  1280: 4,
  1024: 4,
  768: 4,
  640: 4,
};

const WorksPage = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <div className="flex space-x-7 mb-6">
         {/* <a key={works} href="/works">
            <ReactSVG
              aria-label="Commissions"
              src={works}
              type="image/svg+xml"
              alt="Commissions"
              className="fill-neutral-600 hover:fill-white transition-colors duration-300 mr-4 last:mr-0 w-14 h-5"
            />
  </a>*/}
          <a key={collabs} href="/collabs">
            <ReactSVG
              aria-label="Collaborations"
              src={collabs}
              type="image/svg+xml"
              alt="Collaborations"
              className="fill-white transition-colors duration-300 mr-4 last:mr-0 w-14 h-5"
            />
          </a>
        </div>
      </div>
      <div>

      <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex justify-center gap-1"
          columnClassName="grid_column gap-8"
        >
          <a
            href="https://gallery.manifold.xyz/0x8478bd23db7a701bfc4f6175b565edce6ad1167d/37"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-125 duration-300 h-auto max-w-full"
          >
                    <img
            src={catalyst}
            alt={`Catalyst (2023)`}
            
          /></a>
          <a
            href="https://opensea.io/assets/ethereum/0x259808462d8c56dd252da349cfc2dd82330ed3e4/3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-125 duration-300 h-auto max-w-full"
          >
                              <img
            src={reaperwolf}
            alt={`ReaperWolf (2023)`}
          /></a>
          <a
            href="https://opensea.io/assets/ethereum/0x259808462d8c56dd252da349cfc2dd82330ed3e4/6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-125 duration-300 h-auto max-w-full"
          >
          <img
            src={purgatory}
            alt={`Purgatory (2023)`}
          /></a>
        </Masonry>
      </div>
    </motion.div>
  );
};

export default WorksPage;

export const Head = () => <title>Commissions</title>;
