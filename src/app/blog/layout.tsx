import HeaderLogo from "../components/logo/HeaderLogo";

const PostListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="flex items-center text-center p-1">
      <HeaderLogo />
    </header>
  );
};

const Footer = () => {
  return <footer className="text-center align-end">푸터</footer>;
};

export default PostListLayout;
