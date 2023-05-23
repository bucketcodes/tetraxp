import * as React from "react";
import { ReactSVG } from "react-svg";
import fnd from "../assets/foundation.svg";
import dibs from "../assets/1stdibs.svg";
import tezos from "../assets/tezos.svg";
import os from "../assets/opensea.svg";
import ethereal from "../assets/ethereal.png";
import epoch from "../assets/epoch.png";
import blood from "../assets/blood.png";
import tetra from "../assets/tetra.png";
import osmosis from "../assets/osmosis.png";
import max from "../assets/max.png";

const NFTPage = () => {
  return (
    <div className="items-center">
      <div className="flex justify-center">
        <a
          href="https://foundation.app/@TETRA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG
            aria-label="Foundation"
            src={fnd}
            type="image/svg+xml"
            alt="Foundation"
            className="fill-neutral-600 hover:fill-white transition-colors duration-300 lg:w-32 lg:h-32 md:w-32 md:h-32 sm:w-20 sm:h-20 w-20 h-20 mr-4"
          />
        </a>
        <a
          href="https://www.1stdibs.com/nft/profile/Tetra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG
            aria-label="1stDibs"
            src={dibs}
            type="image/svg+xml"
            alt="1st Dibs"
            className="fill-neutral-600 hover:fill-white transition-colors duration-300 lg:w-32 lg:h-32 md:w-32 md:h-32 sm:w-20 sm:h-20 w-20 h-20 mr-4"
          />
        </a>
        <a
          href="https://opensea.io/tetra"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG
            aria-label="OpenSea"
            src={os}
            type="image/svg+xml"
            alt="OpenSea"
            className="fill-neutral-600 hover:fill-white transition-colors duration-300 lg:w-32 lg:h-32 md:w-32 md:h-32 sm:w-20 sm:h-20 w-20 h-20 mr-4"
          />
        </a>
        <a
          href="https://objkt.com/profile/tetra/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG
            aria-label="Tezos"
            src={tezos}
            type="image/svg+xml"
            alt="Tezos"
            className="fill-neutral-600 hover:fill-white transition-colors duration-300 lg:w-32 lg:h-32 md:w-32 md:h-32 sm:w-20 sm:h-20 w-20 h-20"
          />
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8 select-none">
        <a
          href="https://foundation.app/collection/epoch-f9d7"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:brightness-125 duration-300 h-auto max-w-full rounded-lg"
        >
          <img src={ethereal} alt="Epoch Collection"></img>
        </a>
        <a
          href="https://foundation.app/collection/pjkt-ethos"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:brightness-125 duration-300 h-auto max-w-full rounded-lg mx-auto select-none"
        >
          <img src={epoch} alt="Ethereal Collection"></img>
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
  );
};
export default NFTPage;

export const Head = () => <title>NFT</title>;
