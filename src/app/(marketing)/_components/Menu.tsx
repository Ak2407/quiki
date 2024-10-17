"use client";

import LoginBtn from "@/components/LoginBtn";
import SignupBtn from "@/components/SignupBtn";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import { Navbaritems } from "@/lib/constants";
import Link from "next/link";
import { useEffect } from "react";
import SocialButtons from "./SocialButtons";
import Logo from "@/components/Logo";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Menu = ({ isOpen, onClose }: MenuProps) => {
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onClose]);

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <DrawerContent className="p-4 flex items-center justify-center flex-col gap-10 ">
        {isSignedIn ? (
          <Link href="/dashboard" className="flex-1 w-full">
            <Button variant="primary" className="text-xs p-[6px] w-full">
              Dashboard
            </Button>
          </Link>
        ) : (
          <div className="flex items-center justify-center gap-4 w-full ">
            <LoginBtn />
            <SignupBtn />
          </div>
        )}
        <div className="flex flex-row gap-10 flex-wrap w-full items-start justify-center ">
          {Navbaritems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-zinc-500 font-medium text-lg hover:text-zinc-800 transition-colors  duration-100 "
            >
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
        <Separator />
        <div className="flex items-center justify-between  w-full ">
          <Logo />
          <SocialButtons />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Menu;
