import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

const UpgradeAlert = () => {
  return (
    <Alert className="mb-6 bg-[#FDF4ED] border-[#F9D4B4] text-[#B95000]">
      <AlertDescription className="flex items-center justify-between">
        <span>
          Cannot generate more videos on the free plan. Upgrade to create more.
        </span>
        <Button className="bg-[#B95000] hover:bg-[#A34600]">UPGRADE</Button>
      </AlertDescription>
    </Alert>
  );
};

export default UpgradeAlert;
