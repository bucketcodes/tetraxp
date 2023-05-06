import { StaticQuery, graphql } from "gatsby";
import Nav from "./Nav";
import "../styles/global.css";
import React from "react";



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
                external
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
          <main className="px-4 w-full">{children}</main>
        </>
      )}
    />
  );
};

export default Layout;
