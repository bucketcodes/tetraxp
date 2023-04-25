import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import artImages from "../artImages.json";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 6,
  1200: 4,
  992: 3,
  768: 2,
  576: 1,
};

const ArtPage = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {selectedImage && (
        <div
          className="fixed top-0 left-0 z-50 w-full bg-black bg-opacity-75 flex justify-center items-center"
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
            style={{ maxWidth: "80vw", maxHeight: "100vh" }} // changed values here
          >
            <GatsbyImage
            style={{ maxHeight: "80vh"}} //Test
  image={getImage(selectedImage.childImageSharp)}
  alt=""
  layout="constrained"
  objectFit="contain"
  aspectRatio={selectedImage.childImageSharp.gatsbyImageData.aspectRatio}
/>

          </div>
        </div>
      )}
      <StaticQuery
        query={graphql`
          query {
            allFile(filter: { relativePath: { regex: "/art/" } }) {
              edges {
                node {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: TRACED_SVG
                      formats: [AUTO, WEBP]
                    )
                  }
                  relativePath
                }
              }
            }
          }
        `}
        render={(data) => (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex w-full"
            columnClassName="my-masonry-grid_column gap-8"
          >
            {data.allFile.edges.map(({ node }, index) => (
              <div
                key={index}
                className="my-masonry-grid px-2"
                style={{ marginBottom: "8px" }}
              >
                <button
                  type="button"
                  onClick={() => openModal(node)}
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
                    {artImages
                      .find((aI) => aI.file === node.relativePath)
                      ?.name.toUpperCase()}
                  </p>
                </button>
              </div>
            ))}
          </Masonry>
        )}
      />
    </div>
  );
};

export default ArtPage;

export const Head = () => <title>Art Page</title>;
