"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const UpgradeAlert = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const handleUpgrade = () => {
    setLoading(true);
    router.push("/dashboard/billing");
  };

  return (
    <Alert className="mb-6 bg-red-50 border-red-200 text-red-900">
      <AlertDescription className="flex gap-2 items-center justify-between">
        <span>
          Cannot generate more videos on the free plan. Upgrade to create more.
        </span>
        <button onClick={handleUpgrade} disabled={loading}>
          {loading ? (
            <LoaderIcon className="animate-spin h-5 w-5 mr-2" />
          ) : (
            <h1 className="text-sm font-medium hover:underline underline-offset-4">
              Upgrade
            </h1>
          )}
        </button>
      </AlertDescription>
    </Alert>
  );
};

export default UpgradeAlert;
