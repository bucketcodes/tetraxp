import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Nav({ siteTitle, menuLinks }) {
  return (
    <div className="flex flex-col w-full items-center my-8">
      <div className="font-bold">
        <StaticQuery
          query={graphql`
            query {
              file(name: { eq: "logo" }) {
                childImageSharp {
                  gatsbyImageData(
                    width: 200
                    placeholder: TRACED_SVG
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
          `}
          render={(data) => (
            <div className="flex flex-wrap w-full items-center justify-center gap-16">
              {data.file && (
                <div className="w-auto">
                  <Link to="/">
                    <GatsbyImage image={getImage(data.file.childImageSharp)} />
                  </Link>
                </div>
              )}
            </div>
          )}
        />
      </div>
      <ul className="flex">
        {menuLinks.map(({ name, link }) => (
          <li key={name} className="mr-4 last:mr-0 hover:text-gray-100">
            <Link activeClassName="text-gray-100" to={link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
