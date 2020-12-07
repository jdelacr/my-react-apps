import React, { Component } from "react";

export function getPostId() {
  const { slug } = context.query;
  return { slug };
}

export default posts;
