import React, { Component } from "react";
import Layout from "../Layout/Layout";
import style from "../styles/pages/contact.module.css";
import { Typography, Toolbar, Divider } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function ListItemLink(props) {
  return <ListItem button component="a" target="_blank" {...props} />;
}

export class contact extends Component {
  render() {
    return (
      <Layout title="Contact">
        <Typography variant="h2" component="h2" align="center">
          Contact Information
        </Typography>
        <Typography variant="subtitle1" align="center">
          Get in touch with me!
        </Typography>
        <Divider />
        <Toolbar />
        <div className={style.contact}>
          <div className={style.contactLeft}>
            <Card>
              <CardContent>
                <Typography>Contacts:</Typography>
                <Divider />
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="delacruz.janjustyn@gmail.com"
                      secondary="Email"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary="(571)-426-0429" secondary="Phone" />
                  </ListItem>
                </List>
                <Typography>Socials:</Typography>
                <Divider />
                <List>
                  <ListItemLink href="https://www.linkedin.com/in/janjustyn/">
                    <ListItemIcon>
                      <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" />
                  </ListItemLink>
                  <ListItemLink href="https://github.com/jdelacr">
                    <ListItemIcon>
                      <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary="Github" />
                  </ListItemLink>
                </List>
              </CardContent>
            </Card>
          </div>
          <div className={style.contactRight}>
            <img
              src="/contactme.png"
              alt="contact image"
              className={style.contactImg}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default contact;
