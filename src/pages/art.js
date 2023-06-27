import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Masonry from "react-masonry-css";
import prand from "pure-rand";
import { motion } from "framer-motion";
//import works from "../assets/works.svg";
import collabs from "../assets/collabs.svg";
import { ReactSVG } from "react-svg";


const breakpointColumnsObj = {
  default: 6,
  1536: 5,
  1280: 4,
  1024: 3,
  768: 2,
  640: 2,
};

const ArtPage = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.classList.remove("modal-open");
  };

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativePath: { regex: "/art/" } }
        sort: { birthTime: DESC }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP]
                quality: 50
                breakpoints: [240, 576, 768, 992, 1200]
                layout: CONSTRAINED
              )
            }
            relativePath
          }
        }
      }
    }
  `);

  const shuffledEdges = shuffleArray([...data.allFile.edges]);

const links = [
  /*{
    href: "/works",
    label: "Commissions",
    icon: works,
  },*/
  {
    href: "/collabs",
    label: "Collaborations",
    icon: collabs,
  }
];

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
                className="fill-neutral-600 hover:fill-white transition-colors duration-300 mr-4 last:mr-0 w-14 h-5"
              />
            </a>
          ))}
        </div>
        </div>
      <div>
        {selectedImage && (
          <div
            className="z-20 modal-container top-0 left-0 z-50 w-full bg-black backdrop-blur-sm bg-opacity-75 flex justify-center items-center"
            onClick={closeModal}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                closeModal();
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Close Modal"
          >
            <div
              className="max-w-full w-full h-screen flex justify-center items-center z-20"
              style={{ maxWidth: "90vw", maxHeight: "100vh" }}
            >
              <GatsbyImage
                style={{ maxHeight: "90vh" }}
                image={getImage(selectedImage.node.childImageSharp)}
                alt=""
                layout="constrained"
                objectFit="contain"
                aspectRatio={
                  selectedImage.node.childImageSharp.gatsbyImageData.aspectRatio
                }
              />
              {selectedImage && (
                <div className="fixed top-0 left-0 w-full bg-black text-white text-center py-2 z-20">
                  <p className="text-lg font-bold">
                    {selectedImage.node.relativePath
                      .split("/")
                      .pop()
                      .split(".")[0]
                      .toUpperCase()}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex"
          columnClassName="grid_column gap-8"
        >
          {shuffledEdges.map(({ node }, index) => (
            <div
              key={index}
              className="grid"
              style={{
                marginBottom: "4px",
                marginLeft: "2px",
                marginRight: "2px",
              }}
            >
              <button
                type="button"
                onClick={() => openModal({ node })}
                className="w-full my-image-button"
              >
                <GatsbyImage
                  image={getImage(node)}
                  alt=""
                  layout="constrained"
                />
                <p
                  className="text-gray-500"
                  style={{ display: "none", marginBottom: "8px" }}
                >
                  {node.relativePath
                    .split("/")
                    .pop()
                    .split(".")[0]
                    .toUpperCase()}
                </p>
              </button>
            </div>
          ))}
        </Masonry>
      </div>
    </motion.div>
  );
};

const shuffleArray = (arr) => {
  const seed = 35224111;
  const rng = prand.mersenne(seed);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = prand.unsafeUniformIntDistribution(0, i, rng);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default ArtPage;

export const Head = () => (
  <>
    <title>TETRA ➕ - Personal Art Portfolio</title>
    <meta name="description" content="Creations of Tetra, a marvel that reveals the extremities of emotion. Hundreds of compositions from 2023 crafted in mixed media, digitally refined and enhanced." />
    <meta name="keywords" content="TETRA, portfolio, graphics design, art" />
    <meta name="author" content="Tetra, John Perez" />
    <meta name="robots" content="index, follow" />
  </>
)
