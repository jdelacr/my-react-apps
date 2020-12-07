import React, { Component } from "react";
import matter from "gray-matter";

function PostTemplate({ content, data }) {
  const frontmatter = data;
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <p>{content}</p>
    </>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  console.log({ slug });

  const content = await import(`../../content/${slug}.md`);

  const data = matter(content.default);

  return { ...data };

  return { slug };
};

export default PostTemplate;
