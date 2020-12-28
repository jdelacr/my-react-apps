import React, { Component } from "react";
import Layout from "../Layout/Layout";
import style from "../styles/pages/about.module.css";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";

export class about extends Component {
  render() {
    return (
      <Layout title="About the blog">
        <Typography variant="h2" component="h2" align="center">
          About the website
        </Typography>
        <Typography variant="subtitle1" align="center">
          Let me start by welcoming you to my React blog website!
        </Typography>
        <Divider />
        <Toolbar />
        <Typography>
          The purpose of this website is meant for me to learn React and post
          the web applications I have made in order to increase my portfolio.
          This website will track the progress I have made based on what I have
          produced or my thoughts on learning React. I will also post some of
          the applications that I am currently working on and give my thoughts
          on its progress whether I am struggling or find something interesting
          while developing it.
        </Typography>
        <Toolbar />
        <Divider />
        <Toolbar />
        <Typography>
          Most of my projects will be hosted on Vercel. For the backend, it will
          vary as some might be hosted in Firebase or Heroku, depending which
          one is in need the most. The blog is currently using Material-UI as
          the CSS framework to ease the creation of the blog.
        </Typography>
      </Layout>
    );
  }
}

export default about;
