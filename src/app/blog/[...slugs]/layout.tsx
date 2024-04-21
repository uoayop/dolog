const PostDetailLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className="grid grid-cols-4 justify-between mb-3">
        <article className="min-h-full col-span-3 p-3 border border-black">
          {children}
        </article>
        <div className=" p-3 border border-black">목차</div>
      </section>
      <section className="flex items-center justify-center min-h-10 border border-black p-3">
        <div>댓글</div>
      </section>
    </>
  );
};

export default PostDetailLayout;
