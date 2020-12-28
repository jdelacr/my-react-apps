import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import style from "../../styles/components/posts.module.css";

function ImgLayout({
  children,
  headline = "No Headline",
  author = "Unknown Author",
  img = "default",
  date,
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
          className={style.postHeader}
        >
          {headline}
        </Typography>
        <Divider />
        <div className={style.postAuthor}>
          <Typography variant="subtitle1">{author}</Typography>
          <Typography variant="subtitle2">{date}</Typography>
        </div>
        <div className={style.postBody}>
          <Typography variant="h5">{children}</Typography>
        </div>
      </div>
    </>
  );
}

export default ImgLayout;
