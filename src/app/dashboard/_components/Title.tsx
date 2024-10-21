"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useUser } from "@clerk/nextjs";

const Title = () => {
  const { user, isLoaded } = useUser();

  return (
    <div>
      <h1 className="text-3xl lg:text-4xl font-bold text-neutral-700">
        {isLoaded ? (
          <h1>Welcome, {user?.firstName} 👋</h1>
        ) : (
          <Skeleton className="w-[30%] h-12" />
        )}
      </h1>
    </div>
  );
};

export default Title;
