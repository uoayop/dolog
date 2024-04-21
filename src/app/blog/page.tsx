import Link from "next/link";
import { getAllPosts } from "../lib/posts/post";

const PostListPage = () => {
  const posts = getAllPosts();

  return (
    <ul className="border border-black">
      {posts?.map((post, i) => {
        const keyofPost = `post-${i}`;
        return (
          <li
            key={keyofPost}
            className={`${i === 0 ? "" : "border-t border-black"} p-2`}
          >
            <Link href={`/blog/${post.slug}`}>{post.slug}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default PostListPage;
