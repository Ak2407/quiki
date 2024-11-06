import { getSub } from "@/actions/get-subscription";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const Usage = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  let subscription: string | null = null;

  try {
    if (userId) {
      subscription = await getSub(userId);
    }
  } catch (error) {
    toast.error("Error fetching subscription ");
    console.error("Error fetching subscription ", error);
  }

  return (
    <div className="flex flex-col items-start border rounded-lg max-w-[800px]">
      <div className="flex flex-col gap-6 p-4 border-b w-full">
        <div className="flex flex-row gap-2">
          <h1 className="text-xl font-semibold">Plan Summary</h1>

          <span className="inline-flex items-center h-[20px] rounded-md bg-gray-50 px-2 py-1 text-xs font-bold text-gray-600 ring-1 ring-inset ring-gray-500/10">
            {subscription?.toUpperCase()}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-8 w-full">
          <div className="flex flex-col gap-2 flex-1">
            <h1 className="text-xl font-bold text-neutral-800">
              1 <span className="text-sm font-normal ">video left</span>
            </h1>
            <Progress value={33} />
          </div>
          <div className="flex flex-row gap-6 ">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light">Price/Month</p>
              <h1 className="font-medium ">$0</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light">Included Videos</p>
              <h1 className="font-medium ">1</h1>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-light">Renewal Date</p>
              <h1 className="font-medium ">Nov 1, 2024</h1>
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

export default Usage;
