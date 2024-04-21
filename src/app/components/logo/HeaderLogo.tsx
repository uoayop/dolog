"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeaderLogo = () => {
  const router = useRouter();

  const handleClickLogo = () => {
    router.push("/");
  };

  return (
    <Image
      src="/dolog.png"
      alt="headerLogo"
      onClick={handleClickLogo}
      width={100}
      height={50}
    />
  );
};

export default HeaderLogo;
