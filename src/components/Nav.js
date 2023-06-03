import React from "react";
import { Link } from "gatsby";
import logo from "/src/images/logo.png";

export default function Nav({ menuLinks }) {
  return (
    <div className="nav-container">
      <div className="font-bold">
        <div className="flex flex-wrap w-full items-center justify-center mt-6">
          <div className="w-auto logo z-50">
            <Link to="/">
              <img src={logo} alt="Logo" width="80" />
            </Link>
          </div>
        </div>
      </div>
      <ul className="flex z-50">
        {menuLinks.map(({ name, link, external = false }) => (
          <li key={name} className="mr-4 last:mr-0 hover:text-gray-100 my-6">
            {external ? (
              <a href={link} target="_blank" rel="noreferrer">
                {name}
              </a>
            ) : (
              <Link activeClassName="text-gray-100" to={link}>
                {name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
