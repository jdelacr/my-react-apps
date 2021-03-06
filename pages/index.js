import React, { Component } from "react";
import { getPostData } from "../lib/posts";
import { getPost } from "../components/MainPost";
import styles from "../styles/pages/home.module.css";
import Layout from "../Layout/Layout";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

export function Home({ allPostdata }) {
  const mainPost = getPost({ allPostdata });

  return (
    <Layout title="Home">
      <div className={styles.home}>
        <div className={styles.post_feed}>
          <Typography
            variant="h3"
            component="h3"
            className={styles.post_header}
          >
            Latest Posts:
          </Typography>
          <Divider />
          <div>{mainPost}</div>
        </div>
        <Card className={styles.post_aside} elevation={0}>
          <CardContent>
            <Typography variant="h5" component="h5" align="center">
              Welcome to my React post!
            </Typography>
            <Divider />
            <Typography variant="body1">
              The purpose of this blog is to track my progress on using React.js
              and give my initial thoughts and progress on making an app using
              React.js. The blog is currently hosted in Vercel.
            </Typography>
          </CardContent>
        </Card>
      </div>
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

export default Home;
