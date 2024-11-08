"use client";

import { Button } from "@/components/ui/button";
import { CirclePlusIcon, LoaderIcon, RabbitIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EmptyState = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
    router.push("/create");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center w-full ">
      <RabbitIcon className="size-40" strokeWidth={1.2} />
      <h1 className="text-4xl text-neutral-600">No Videos Found</h1>
      <p className="text-lg text-neutral-500">Start creating some??</p>
      <Button
        variant="primary"
        className="group"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? (
          <LoaderIcon className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <>
            <CirclePlusIcon className="mr-2 h-5 w-5 transition-all ease-in-out duration-300 group-hover:animate-spin" />
            Create
          </>
        )}
      </Button>
    </div>
  );
};

export default EmptyState;
