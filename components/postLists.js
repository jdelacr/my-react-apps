import React, { Component } from "react";
import Link from "next/link";

export function getPost({ allPostdata }) {
  return (
    <ul>
      {allPostdata.map(({ id, date, title }) => (
        <li key={id}>
          {title}
          <br />
          <Link href={{ pathname: `posts/${id}` }}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default getPost;
