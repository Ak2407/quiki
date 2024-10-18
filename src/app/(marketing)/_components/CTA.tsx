"use client";

import { Button } from "@/components/ui/button";
import { useSession } from "@clerk/nextjs";
import Link from "next/link";

const CTA = () => {
  const { session } = useSession();
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-[50%]">
      <Link href="/dashboard" className="w-full">
        <Button variant="primary" className="w-full py-6 text-lg">
          {session ? <h1>Dashboard</h1> : <h1>Get Started</h1>}
        </Button>
      </Link>
      <p className="text-sm italic text-neutral-500">first video on us!</p>
    </div>
  );
};

export default CTA;
