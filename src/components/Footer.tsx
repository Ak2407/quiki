"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="border-t w-full px-6 py-4 flex flex-col-reverse gap-2 sm:flex-row items-center justify-between ">
      <div className="flex-col items-start justify-center gap-2 hidden sm:flex">
        <Logo />
      </div>

      <p className="text-sm text-zinc-500">
        © 2024 Quiki. All rights reserved.
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link href="/terms">
          <Button
            variant="link"
            className={
              pathname === "/terms"
                ? "text-zinc-800"
                : "text-zinc-500 hover:text-zinc-800"
            }
          >
            Terms of service
          </Button>
        </Link>
        <Link href="/privacy">
          <Button
            variant="link"
            className={
              pathname === "/privacy"
                ? "text-zinc-800"
                : "text-zinc-500 hover:text-zinc-800"
            }
          >
            Privacy Policy
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
