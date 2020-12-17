import React, { Component } from "react";
import Layout from "../Layout/Layout";
import style from "../styles/pages/post.module.css";
import { getPostData } from "../lib/posts";
import { getPost } from "../components/MainPost";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function sortPost({ allPostdata }, setSort) {
  if (setSort == "oldest") {
    return allPostdata.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } else {
    return allPostdata.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}

function posts({ allPostdata }) {
  const [sortedPost, setSort] = React.useState("");

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  sortPost({ allPostdata }, sortedPost);

  const mainPost = getPost({ allPostdata });

  return (
    <Layout title="React Posts">
      <FormControl className={style.postSelect}>
        <InputLabel>Sort</InputLabel>
        <Select value={sortedPost} onChange={handleSort}>
          <MenuItem value={"latest"}>Latest</MenuItem>
          <MenuItem value={"oldest"}>Oldest</MenuItem>
        </Select>
      </FormControl>

      {mainPost}
    </Layout>
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

export default posts;
