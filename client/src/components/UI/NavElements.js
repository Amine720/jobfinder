import React from "react";
import { Link } from "react-router-dom";

export const NavElements = () => {
  return (
    <>
      <li>
        <Link exact="true" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/listing">Find a job </Link>
      </li>
      <li>
        <a href="about.html">About</a>
      </li>
      <li>
        <a href="contact.html">Contact</a>
      </li>
    </>
  );
};
