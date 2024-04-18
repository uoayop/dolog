import { getAllPosts } from "../lib/posts/post";

export const gteStaticProps = () => {
  return {
    props: {
      posts: getAllPosts(),
    },
  };
};

const PostListPage = ({ posts }: { posts: { slug: string }[] }) => {
  return (
    <ul>
      {posts.map((post, i) => {
        const keyofPost = `post-${i}`;
        return <li key={keyofPost}>{post.slug}</li>;
      })}
    </ul>
  );
};

export default PostListPage;
