import React, { Component } from "react";
import Link from "next/link";
import nav from "../styles/components/nav.module.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

function ElevationNav(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export function Header(props) {
  return (
    <ElevationNav {...props}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">
            <Link href="/">
              <a className={nav.nav}>Home</a>
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link href="/posts">
              <a className={nav.nav}>Posts</a>
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link href="/about">
              <a className={nav.nav}>About</a>
            </Link>
          </Typography>
          <Typography variant="h6">
            <Link href="/contact">
              <a className={nav.nav}>Contact</a>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </ElevationNav>
  );
}

export default Header;
