import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Masonry from "react-masonry-css";
import prand from "pure-rand";

window.onload = function () {
  window.scrollTo(0, 0);
};

const breakpointColumnsObj = {
  default: 6,
  1536: 5,
  1280: 4,
  1024: 4,
  768: 4,
  640: 4,
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
                quality: 70
                breakpoints: [576, 768, 992, 1200]
              )
            }
            relativePath
          }
        }
      }
    }
  `);

  const shuffledEdges = shuffleArray([...data.allFile.edges]);

  return (
    <div>
      {selectedImage && (
        <div
          className="modal-container top-0 left-0 z-50 w-full bg-black backdrop-blur-sm bg-opacity-75 flex justify-center items-center"
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
            className="max-w-full w-full h-screen flex justify-center items-center"
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
              <div
                className="fixed top-0 left-0 w-full bg-black text-white text-center py-2"
                style={{ zIndex: "1", position: "fixed" }}
              >
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
                image={getImage(node.childImageSharp)}
                alt=""
                layout="fluid"
              />
              <p
                className="text-gray-500"
                style={{ display: "none", marginBottom: "8px" }}
              >
                {node.relativePath.split("/").pop().split(".")[0].toUpperCase()}
              </p>
            </button>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

const shuffleArray = (arr) => {
  const seed = 3242524521252;
  const rng = prand.mersenne(seed);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = prand.unsafeUniformIntDistribution(0, i, rng);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export default ArtPage;

export const Head = () => <title>Art</title>;
