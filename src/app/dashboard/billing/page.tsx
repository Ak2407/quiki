import { Separator } from "@/components/ui/separator";
import Usage from "./_components/Usage";
import Pricing from "@/app/(marketing)/_components/pricing";

const Billing = () => {
  return (
    <div className="flex flex-col gap-4 w-full ">
      <div className="w-full space-y-4 p-8">
        <h1 className="text-2xl font-semibold">Subscription & Billing</h1>
        <Separator className="w-full" />
      </div>
      <div className="w-full px-8">
        <Usage />
      </div>

      <Pricing />
    </div>
  );
};

export default Billing;
