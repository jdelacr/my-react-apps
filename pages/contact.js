import React, { Component } from "react";
import Layout from "../Layout/Layout";
import style from "../styles/pages/contact.module.css";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
                <Typography>dsds</Typography>
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
