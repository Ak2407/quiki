import { Suspense } from "react";
import { getSub } from "@/actions/get-subscription";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { planDetails } from "@/lib/constants";
import { Skeleton } from "@/components/ui/skeleton";

const UsageContent = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  let plan;
  let subscription;
  let renewalDate;

  if (userId) {
    subscription = await getSub(userId);
    if (subscription) {
      const subDate = subscription.subscriptionDate;
      subDate?.setMonth(subDate?.getMonth() + 1);
      renewalDate = subDate?.toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });
      plan = planDetails[subscription.subscriptionStatus];
    }
  }

  const videoCount = subscription?.videoCount ?? 0;
  const videoLimit = plan?.videoLimit ?? 1;
  const videosLeft = Math.max(videoLimit - videoCount, 0);
  const progressPercentage = (videoCount / videoLimit) * 100;

  return (
    <div className="flex flex-col items-start border rounded-lg max-w-[800px]">
      <div className="flex flex-col gap-6 p-4 border-b w-full">
        <div className="flex flex-row gap-2">
          <h1 className="text-xl font-semibold">Plan Summary</h1>
          <span className="inline-flex items-center h-[20px] rounded-md bg-gray-50 px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
            {plan?.name ?? "No Plan"}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-8 w-full">
          <div className="flex flex-col gap-2 flex-1">
            <h1 className="text-xl font-bold text-neutral-800">
              {videosLeft}{" "}
              <span className="text-sm font-normal ">
                video{videosLeft !== 1 ? "s" : ""} left
              </span>
            </h1>
            <Progress value={progressPercentage} />
          </div>
          <div className="flex flex-row gap-6 ">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light">Price/Month</p>
              <h1 className="font-medium ">${plan?.price ?? 0}</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light">Included Videos</p>
              <h1 className="font-medium ">{videoLimit}</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light">Expiry Date</p>
              <h1 className="font-medium text-sm ">{renewalDate ?? "N/A"}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-end p-4 bg-gray-50 ">
        <Button variant="outline" className="w-full sm:max-w-[90px]">
          Upgrade
        </Button>
      </div>
    </div>
  );
};

const Usage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <UsageContent />
    </Suspense>
  );
};

const Loading = () => {
  return (
    <div className="flex flex-col items-start border rounded-lg max-w-[800px]">
      <div className="flex flex-col gap-6 p-4 border-b w-full">
        <div className="flex flex-row gap-2">
          <Skeleton className="h-7 w-32" />
          <Skeleton className="h-5 w-20" />
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-8 w-full">
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-2 w-full" />
          </div>
          <div className="flex flex-row gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col gap-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-6 w-16" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-end p-4 bg-gray-50">
        <Button variant="outline" className="w-full sm:max-w-[90px]" disabled>
          Upgrade
        </Button>
      </div>
    </div>
  );
};

export default Usage;
