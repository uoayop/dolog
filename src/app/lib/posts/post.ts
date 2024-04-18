import { sync } from "glob";
import path from "path";

const BASE_PATH = "/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

export const getAllPosts = () => {
  const postsPath = sync(`${POSTS_PATH}/**/*.mdx`);
  return postsPath.map((path) => ({
    slug: path.slice(path.indexOf(BASE_PATH)).replace("mdx", ""),
  }));
};
