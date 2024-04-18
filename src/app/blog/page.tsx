import Link from "next/link";
import { getAllPosts } from "../lib/posts/post";

const PostListPage = () => {
  const posts = getAllPosts();
  console.log(posts);

  return (
    <ul>
      {posts?.map((post, i) => {
        const keyofPost = `post-${i}`;
        console.log(">> post.slug::", post.slug);
        return (
          <Link key={keyofPost} href={`/blog/${post.slug}`}>
            {post.slug}
          </Link>
        );
      })}
    </ul>
  );
};

export default PostListPage;
