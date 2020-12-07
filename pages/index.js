<<<<<<< Updated upstream
import React, { Component } from "react";

export class Home extends React.Component {
  render() {
    return <>hello</>;
  }
=======
import matter from "gray-matter";
import React, { Component } from "react";
import Link from "next/link";

function Home({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={{
              pathname: "/posts/[...slug]",
              query: { slug: post.slug },
            }}
          >
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
>>>>>>> Stashed changes
}

export default Home;
