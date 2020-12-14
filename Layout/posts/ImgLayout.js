import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import style from "../../styles/components/posts.module.css";

function ImgLayout({
  children,
  headline = "No Headline",
  author = "Unknown Author",
  img = "default",
}) {
  return (
    <>
      <div>
        <img src={`/${img}.png`} className={style.postHero} />
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterbottom="true"
        >
          {headline}
        </Typography>
        <Divider />
        <div className={style.postBody}>
          <Typography variant="body1" component="body1">
            {children}
          </Typography>
        </div>
        <Divider />
        <Typography variant="body2">{author}</Typography>
      </div>
    </>
  );
}

export default ImgLayout;
