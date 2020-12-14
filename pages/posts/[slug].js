import React, { Component } from "react";
import matter from "gray-matter";
import Layout from "../../Layout/Layout";
import NoPostImgLayout from "../../Layout/posts/NoImgLayout";
import WithPostImgLayout from "../../Layout/posts/NoImgLayout";

function PostTemplate({ content, data }) {
  const frontmatter = data;
  return (
    <Layout title={frontmatter.title}>
      {frontmatter.img != null ? (
        <WithPostImgLayout headline={frontmatter.title}>
          {content}
        </WithPostImgLayout>
      ) : (
        <NoPostImgLayout title={frontmatter.title}>{content}</NoPostImgLayout>
      )}
    </Layout>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  console.log({ slug });

  const content = await import(`../../posts/${slug}.md`);
  /* console.log(content); */

  const data = matter(content.default);

  return { ...data };

  return { slug };
};

export default PostTemplate;
