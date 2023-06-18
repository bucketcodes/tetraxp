import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import logo from "/src/images/logo.png";

export default function Nav({ menuLinks, activePage }) {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = navRef.current.offsetHeight;
      if (window.pageYOffset > navHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Existing Navbar */}
      <div
        ref={navRef}
        className={`nav-container top-0 left-0 flex flex-col items-center justify-center text-xs ${
          activePage === location.pathname ? "text-white" : "text-gray-600"
        } uppercase bg-transparent w-full z-50`}
      >
        <div className="flex flex-wrap w-full items-center justify-center mt-6 z-50">
          {!isLandingPage && (
            <div className="w-auto logo">
              <Link to="/">
                <img src={logo} alt="Logo" width="80" />
              </Link>
            </div>
          )}
        </div>
        <ul className="flex">
          {menuLinks.map(({ name, link, external = false }) => (
            <li
              key={name}
              className={`mr-4 last:mr-0 hover:text-white mb-6 mt-4 ${
                isLandingPage ? "text-white" : ""
              } z-50`}
            >
              {external ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold"
                >
                  {name}
                </a>
              ) : (
                <Link
                  activeClassName="text-white"
                  to={link}
                  className="font-semibold"
                >
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Sticky Navbar */}
      {isSticky && (
        <div
        className={`z-80 fixed sticky-nav top-0 left-0 flex flex-col items-center justify-center text-x bg-[#0D0D0F]  ${
          activePage === location.pathname ? "text-white" : "text-gray-600"
        } uppercase w-full z-80`}
      >
          <ul className="flex">
            {menuLinks.map(({ name, link, external = false }) => (
              <li
                key={name}
              className={`mr-4 last:mr-0 hover:text-white mb-4 mt-4 ${
                isLandingPage ? "text-white" : ""
              } z-80`}
              >
                {external ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold"
                  >
                    {name}
                  </a>
                ) : (
                  <Link
                    activeClassName="text-white"
                    to={link}
                    className="font-semibold"
                  >
                    {name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}