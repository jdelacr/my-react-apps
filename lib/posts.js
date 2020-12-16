import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "posts");

export function getPostData() {
  const fileNames = fs.readdirSync(contentDir);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.slice(0, -3);

    const fullPath = path.join(contentDir, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    const matterData = matter(fileContent);

    return {
      id,
      ...matterData.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
