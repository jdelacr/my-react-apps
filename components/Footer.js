import React, { Component } from "react";
import Link from "next/link";
import style from "../styles/components/footer.module.css";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Diveder from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export class Footer extends Component {
  render() {
    return (
      <footer className={`${style.footer} ${style.footerBg}`}>
        <div className={`${style.footerLeft}`}>
          <img src="/React.png" alt="React Logo" className={style.footerLogo} />
        </div>
        <div className={`${style.footerRight}`}>
          <Typography variant="h5" align="center">
            Sitemap
          </Typography>
          <Diveder></Diveder>
          <List>
            <ListItemLink href="/">
              <ListItemText primary="Home" />
            </ListItemLink>
            <ListItemLink href="/posts">
              <ListItemText primary="Posts" />
            </ListItemLink>
            <ListItemLink href="/about">
              <ListItemText primary="About" />
            </ListItemLink>
            <ListItemLink href="/contact">
              <ListItemText primary="Contacts" />
            </ListItemLink>
          </List>
        </div>
      </footer>
    );
  }
}

export default Footer;
