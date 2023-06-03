import * as React from "react";
import { ReactSVG } from "react-svg";
import fnd from "../assets/fnd.svg";
import dibs from "../assets/dib.svg";
import tezos from "../assets/tez.svg";
import os from "../assets/os.svg";
import ethereal from "../assets/ethereal.webp";
import epoch from "../assets/epoch.png";
import blood from "../assets/blood.png";
import tetra from "../assets/tetra.png";
import osmosis from "../assets/osmosis.png";
import max from "../assets/max.png";
import { motion } from "framer-motion";

const links = [
  {
    href: "https://foundation.app/@TETRA",
    target: "_blank",
    rel: "noopener noreferrer",
    label: "Foundation",
    icon: fnd,
  },
  {
    href: "https://www.1stdibs.com/nft/profile/Tetra/",
    target: "_blank",
    rel: "noopener noreferrer",
    label: "1st Dibs",
    icon: dibs,
  },
  {
    href: "https://opensea.io/tetra",
    target: "_blank",
    rel: "noopener noreferrer",
    label: "OpenSea",
    icon: os,
  },
  {
    href: "https://objkt.com/profile/tetra/",
    target: "_blank",
    rel: "noopener noreferrer",
    label: "Tezos",
    icon: tezos,
  },
];

const NFTPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center">
        <div className="flex space-x-7 mb-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel={link.rel}
              className=""
            >
              <ReactSVG
                aria-label={link.label}
                src={link.icon}
                type="image/svg+xml"
                alt={link.label}
                className="fill-neutral-600 hover:fill-white transition-colors duration-300 mr-4 last:mr-0 w-5 h-5"
              />
            </a>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8 select-none">
          <a
            href="https://foundation.app/collection/epoch-f9d7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-125 duration-300 h-auto max-w-full rounded-lg"
          >
            <img src={epoch} alt="Epoch Collection"></img>
          </a>
          <a
            href="https://foundation.app/collection/osmos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-125 duration-300 h-auto max-w-full rounded-lg ml-auto select-none"
          >
            <img src={osmosis} alt="Osmosis Collection"></img>
          </a>
          <a
            href="https://foundation.app/collection/pjkt-ethos"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-125 duration-300 h-auto max-w-full rounded-lg mx-auto select-none"
          >
            <img src={ethereal} alt="Ethereal Collection"></img>
          </a>
          <a
            href="https://foundation.app/collection/riversofblood"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-125 duration-300 h-auto max-w-full rounded-lg select-none"
          >
            <img src={blood} alt="The Rivers of Blood Collection"></img>
          </a>
          <a
            href="https://foundation.app/collection/tetraworld"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-125 duration-300 h-auto max-w-full rounded-lg mx-auto select-none"
          >
            <img src={tetra} alt="Tetra Collection"></img>
          </a>
          <a
            href="https://app.manifold.xyz/c/BEYONDMAXIMUM"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:brightness-125 duration-300 h-auto max-w-full rounded-lg ml-auto select-none"
          >
            <img src={max} alt="Beyond Maximum Editions"></img>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
export default NFTPage;

export const Head = () => <title>NFT</title>;
