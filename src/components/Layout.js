import { StaticQuery, graphql } from "gatsby";
import Nav from "./Nav";
import "../styles/global.css";
import React from "react";
//import Background from "./Background";



const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              menuLinks {
                name
                link
              }
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Nav
            siteTitle={data.site.siteMetadata.title}
            menuLinks={data.site.siteMetadata.menuLinks}
          />
          <main className="px-4 w-full" style={{ zIndex: "1" }}>
            {children}
          </main>
        </>
      )}
    />
  );
};

export default Layout;
