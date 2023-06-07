import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import logo from "/src/images/logo.png";

export default function Nav({ menuLinks }) {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div
      className={`nav-container top-0 left-0 flex flex-col items-center justify-center text-xs ${
        isLandingPage ? "text-white" : "text-gray-600"
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
      <div className="font-bold"></div>
      <ul className="flex">
        {menuLinks.map(({ name, link, external = false }) => (
          <li
            key={name}
            className={`mr-4 last:mr-0 hover:text-white my-6 ${
              isLandingPage ? "text-white" : ""
            } z-50`}
          >
            {external ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="font-semibold"
              >
                {name}
              </a>
            ) : (
              <Link
                to={link}
                className={`font-semibold ${isLandingPage ? "text-white" : ""}`}
              >
                {name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
