import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="w-fit flex gap-4 items-center justify-center hover:opacity-85 ">
        <Image height={30} width={30} src="/icon.svg" alt="logo" />
        <p className="text-xl text-sky-700/50 hidden sm:block">/</p>
        <h1 className="text-xl font-extrabold text-sky-700 hidden sm:block">
          QUIKI
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
