import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <header>
        <h1>Julian Ivaldy</h1>
      </header>
      <p>
        Working on <Link>Farcaster</Link>. More{" "}
        <Link to="/about">about me</Link>.
      </p>
      <hr />
      <h2>Posts</h2>
      <ul>
        <li>
          <Link>Crypto Reading list</Link>
        </li>
        <li>
          <Link>Book recommendations</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
