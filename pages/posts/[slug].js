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
        >
          {content}
        </WithPostImgLayout>
      ) : (
        <NoPostImgLayout
          headline={frontmatter.title}
          title={frontmatter.title}
          author={frontmatter.author}
        >
          {content}
        </NoPostImgLayout>
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
