import React, { Component } from "react";

function ImgLayout({ children, headline = "No Headline" }) {
  return (
    <div>
      <h1>{headline}</h1>
      {children}
    </div>
  );
}

export default ImgLayout;
