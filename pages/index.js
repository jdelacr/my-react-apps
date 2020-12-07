import React, { Component } from "react";
import { getPostData } from "../lib/posts";
import Link from "next/link";

export function Home({ allPostdata }) {
  return (
    <>
      <div>
        <ul>
          {allPostdata.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              <Link href={{ pathname: `posts/${id}` }}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostdata = getPostData();

  return {
    props: {
      allPostdata,
    },
  };
}

export default Home;
