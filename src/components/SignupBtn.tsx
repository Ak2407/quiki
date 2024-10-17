"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { Loader } from "lucide-react";

const SignupBtn = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <Link href="/sign-up" className="w-full">
      <Button
        variant="primary"
        onClick={() => setDisabled(true)}
        disabled={disabled}
        className="w-full"
      >
        {!disabled ? "Sign up" : <Loader className="animate-spin w-4 h-4" />}
      </Button>
    </Link>
  );
};

export default SignupBtn;
