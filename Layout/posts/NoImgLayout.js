import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import style from "../../styles/components/posts.module.css";

function NoImgLayout({
  children,
  headline = "No Headline",
  author = "Unknown Author",
  date,
}) {
  return (
    <>
      <div>
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
        <Typography variant="h5">{children}</Typography>
      </div>
    </>
  );
}

export default NoImgLayout;
