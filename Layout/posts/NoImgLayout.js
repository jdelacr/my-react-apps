import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

function NoImgLayout({
  children,
  headline = "No Headline",
  author = "Unknown Author",
}) {
  return (
    <>
      <div>
        <Typography variant="h2" component="h2" align="center" gutterbottom>
          {headline}
        </Typography>
        <Divider />
        <Typography variant="body1" component="body1">
          {children}
        </Typography>
      </div>
    </>
  );
}

export default NoImgLayout;
