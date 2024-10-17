"use client";

import LoginBtn from "@/components/LoginBtn";
import Logo from "@/components/Logo";
import SignupBtn from "@/components/SignupBtn";
import { Navbaritems } from "@/lib/constants";
import Link from "next/link";
import SocialButtons from "./SocialButtons";
import { MenuIcon, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMenu } from "@/hooks/use-menu";
import Menu from "./Menu";
import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const isOpen = useMenu((state) => state.isOpen);
  const onOpen = useMenu((state) => state.onOpen);
  const onClose = useMenu((state) => state.onClose);

  const { isSignedIn } = useUser();

  return (
    <div className="flex flex-row items-center justify-between border-b h-[57px] px-6 sticky top-0 bg-white gap-4 ">
      <Menu isOpen={isOpen} onClose={onClose} />
      <div className="flex items-center justify-center gap-10">
        <Logo />
        <div className="gap-6 hidden sm:flex">
          {Navbaritems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-zinc-500 font-medium text-sm hover:text-zinc-800 transition-colors  duration-100 "
            >
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-10">
        <div className={`hidden lg:block `}>
          <SocialButtons />
        </div>
        {isSignedIn ? (
          <div className="flex items-center justify-center gap-2 ">
            <UserButton />
            <Link href="/dashboard" className="hidden sm:block ">
              <Button variant="link" className="text-sm flex gap-2 ">
                Dashboard
                <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="items-center justify-center gap-4 hidden sm:flex">
            <LoginBtn />
            <SignupBtn />
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          className="text-zinc-500 sm:hidden"
          onClick={() => onOpen()}
        >
          <MenuIcon className="w-6 h-6 " />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
