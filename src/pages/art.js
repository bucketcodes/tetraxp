import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import artImages from "../artImages.json";

const ArtPage = () => {
  return (
    <div>
      <StaticQuery
        query={graphql`
          query {
            allFile(filter: { relativePath: { regex: "/art/" } }) {
              edges {
                node {
                  childImageSharp {
                    gatsbyImageData(
                      width: 500
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
          <div className="flex flex-wrap w-full items-center justify-center gap-16">
            {data.allFile.edges.map(({ node }, index) => (
              <div key={index} className="w-auto">
                <GatsbyImage image={getImage(node.childImageSharp)} />
                <p className="text-gray-500">
                  {artImages
                    .find((aI) => aI.file === node.relativePath)
                    ?.name.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
};

export default ArtPage;

export const Head = () => <title>Art Page</title>;
