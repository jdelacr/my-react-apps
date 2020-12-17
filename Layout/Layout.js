import React from "react";
import Head from "next/head";
import Header from "../components/Navigation";
import Footer from "../components/Footer";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import "fontsource-roboto";
import style from "../styles/components/layout.module.css";

function Layout({ children, title = "No title" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Header />
      <Toolbar />
      <Container maxWidth="md" className={style.layoutHeight}>
        <Toolbar />
        {children}
      </Container>
      <Toolbar />
      <Footer />
    </>
  );
}

export default Layout;
