import { getAllPosts } from "@/app/lib/posts/post";

const PostPage = ({ params }: { params: { slugs: string[] } }) => {
  const { slugs } = params as { slugs: string[] };

  const slug = `${slugs.join("/")}`;
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    // TODO: Post가 없어요
    return <></>;
  }

  return <div>post slug : {post.slug}</div>;
};

export default PostPage;
