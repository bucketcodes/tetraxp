import * as React from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import collabs from "../assets/collabs.svg";
import { ReactSVG } from "react-svg";
import catalyst from "../assets/Catalyst.webp";
import reaperwolf from "../assets/Wolfgang.webp";
import purgatory from "../assets/Purgatory.webp";
import bornchosen from "../images/art/BORN CHOSEN.jpeg";
import goodriddance from "../images/art/Good Riddance.jpeg";
import ineverymotion from "../images/art/In Every Motion.jpeg";
import { Link } from "gatsby";

const breakpointColumnsObj = {
  default: 5,
  1536: 5,
  1280: 4,
  1024: 3,
  768: 2,
  640: 2,
};
const images = [
  {
    link: "https://gallery.manifold.xyz/0x8478bd23db7a701bfc4f6175b565edce6ad1167d/37",
    alt: "Catalyst (2023)",
    src: catalyst,
  },
  {
    link: "https://opensea.io/assets/ethereum/0x259808462d8c56dd252da349cfc2dd82330ed3e4/3",
    alt: "ReaperWolf (2023)",
    src: reaperwolf,
  },
  {
    link: "https://opensea.io/assets/ethereum/0x259808462d8c56dd252da349cfc2dd82330ed3e4/6",
    alt: "Purgatory (2023)",
    src: purgatory,
  },
  {
    link: "https://foundation.app/@TETRA/tetraworld/10",
    alt: "Born Chosen (2022)",
    src: bornchosen,
  },
  {
    link: "https://foundation.app/@MakingIt247/makingit/115",
    alt: "Good Riddance (2023)",
    src: goodriddance,
  },
  {
    alt: "Good Riddance (2023)",
    src: ineverymotion,
  },
  // add more images here
];
const CollabsPage = () => {

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
            <Link to="/collabs/">
              <ReactSVG
                aria-label="Collaborations"
                src={collabs}
                type="image/svg+xml"
                alt="Collaborations"
                className="fill-white hover:fill-white transition-colors duration-300 mr-4 last:mr-0 w-7 h-7"
              />
            </Link>
        </div>
      </div>
      <div>

      <Masonry
  breakpointCols={breakpointColumnsObj}
  className="flex justify-center gap-1"
>
  {images.map((image, index) => (
    <div key={index} className="grid mb-1">
      <a
        href={image.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:brightness-125 duration-300 h-auto max-w-full"
      >
        <img src={image.src} alt={image.alt} />
      </a>
    </div>
  ))}
</Masonry>
      </div>
    </motion.div>
  );
};

export default CollabsPage;

export const Head = () => (
  <>
    <title>TETRA ➕ - Collaborations</title>
    <meta name="description" content="Previous collaborations on projects and artworks that emerged from the synergy of brilliant minds and creative souls, some pieces may be available for purchase." />
    <meta name="keywords" content="TETRA, collaborations, website, art" />
    <meta name="author" content="Tetra, John Perez" />
    <meta name="robots" content="index, follow" />
  </>
)

