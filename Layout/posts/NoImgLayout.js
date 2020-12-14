import React from "react";

function NoImgLayout({ children, headline = "No Headline" }) {
  return (
    <div>
      <h1>{headline}</h1>
      {children}
    </div>
  );
}

export default NoImgLayout;
