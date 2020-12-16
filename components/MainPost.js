import React, { Component } from "react";
import Link from "next/link";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import card from "../styles/components/card.module.css";

export function getPost({ allPostdata }) {
  return (
    <ul>
      {allPostdata.map(({ id, date, title }) => (
        <li key={id} className={card.post_list}>
          <Card>
            <CardContent>
              <Typography variant="h4">
                <Link href={{ pathname: `/posts/${id}` }}>
                  <a className={card.post_link}>{title}</a>
                </Link>
              </Typography>
              <Typography variant="caption">{date}</Typography>
            </CardContent>
            <CardActions>
              <Link href={{ pathname: `/posts/${id}` }} component="button">
                <Button size="small">Read Post</Button>
              </Link>
            </CardActions>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default getPost;
