import React, { Component } from "react";
import { getPostData } from "../lib/posts";
import { getPost } from "../components/postLists";

export function Home({ allPostdata }) {
  const data = getPost({ allPostdata });

  return (
    <>
      <div>{data}</div>
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
