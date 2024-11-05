import { auth } from "@/auth";
import { Skeleton } from "@/components/ui/skeleton";

const Title = async () => {
  const session = await auth();

  return (
    <div>
      {session?.user ? (
        <h1 className="text-3xl lg:text-4xl font-bold text-neutral-700">
          Welcome, {session.user.name} 👋
        </h1>
      ) : (
        <Skeleton className="h-10 w-full" />
      )}
    </div>
  );
};

export default Title;
