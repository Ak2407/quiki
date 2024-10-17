"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { Loader } from "lucide-react";

const LoginBtn = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  return (
    <Link href="/sign-in" className="w-full">
      <Button
        variant="outline"
        className="px-[10px] w-full"
        onClick={() => setDisabled(true)}
        disabled={disabled}
      >
        {!disabled ? "Log in" : <Loader className="animate-spin w-4 h-4" />}
      </Button>
    </Link>
  );
};

export default LoginBtn;
