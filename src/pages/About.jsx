import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <Link className="muted small" to="/">
        Julian Ivaldy
      </Link>
      <h1>About</h1>
      <p>
        My name is Julian Ivaldy and I live in Los Angeles. I am currently
        working on <Link>Farcaster</Link>. Previously, I worked at{" "}
        <Link>Coinbase</Link>.
      </p>
      <h2>Contact</h2>
      <ul>
        <li>Send me a DM on Twitter.</li>
        <li>Please do not contact me on LinkedIn.</li>
        <li>
          As of October 2022, how I’m approaching{" "}
          <Link>angel investing and product input</Link>.
        </li>
      </ul>
      <h2>Misc.</h2>
      <ul>
        <li>
          <Link>Crypto reading list</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
