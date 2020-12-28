import React, { Component } from "react";
import matter from "gray-matter";
import Layout from "../../Layout/Layout";
import NoPostImgLayout from "../../Layout/posts/NoImgLayout";
import WithPostImgLayout from "../../Layout/posts/ImgLayout";

function PostTemplate({ content, data }) {
  const frontmatter = data;
  return (
    <Layout title={frontmatter.title}>
      {frontmatter.img != null ? (
        <WithPostImgLayout
          headline={frontmatter.title}
          author={frontmatter.author}
          img={frontmatter.img}
          date={frontmatter.date}
        >
          {content}
        </WithPostImgLayout>
      ) : (
        <NoPostImgLayout
          headline={frontmatter.title}
          title={frontmatter.title}
          author={frontmatter.author}
          date={frontmatter.date}
        >
          {content}
        </NoPostImgLayout>
      )}
    </Layout>
  );
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;

  const content = await import(`../../posts/${slug}.md`);

  const data = matter(content.default);

  return { ...data };
};

export default PostTemplate;
