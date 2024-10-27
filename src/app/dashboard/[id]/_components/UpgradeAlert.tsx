import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

const UpgradeAlert = () => {
  return (
    <Alert className="mb-6 bg-red-50 border-red-200 text-red-900">
      <AlertDescription className="flex gap-2 items-center justify-between">
        <span>
          Cannot generate more videos on the free plan. Upgrade to create more.
        </span>
        <Link href="/dashboard/billing">
          <h1 className="text-sm font-medium hover:underline underline-offset-4">
            Upgrade
          </h1>
        </Link>
      </AlertDescription>
    </Alert>
  );
};

export default UpgradeAlert;
