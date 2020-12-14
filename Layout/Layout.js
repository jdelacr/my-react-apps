import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import "fontsource-roboto";

function Layout({ children, title = "No title" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Header />
      <Toolbar />
      <Container maxWidth="md">{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
