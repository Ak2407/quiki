import { Separator } from "@/components/ui/separator";

export default function CancellationAndRefund() {
  return (
    <div className="flex flex-col items-start justify-center gap-6 mx-auto w-[95%] lg:w-[70%] py-10 text-neutral-600">
      <div className="flex flex-col gap-12 items-start justify-center w-full">
        <h1 className="text-5xl lg:text-6xl font-black text-sky-700">
          Cancellation and Refund Policy
        </h1>
        <p className="italic">Last updated: Oct 28, 2024</p>
        <Separator />
      </div>
      <div className="flex flex-col gap-8 items-start justify-evenly w-[95%] pt-10">
        <p>
          At Quiki, we strive to provide the best possible experience for our
          users. This Cancellation and Refund Policy outlines the terms and
          conditions regarding subscription cancellations and refunds for our AI
          shorts generator app.
        </p>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">
            Subscription Cancellation
          </h1>
          <p>
            You may cancel your Quiki subscription at any time. To cancel your
            subscription, please follow these steps:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>Log in to your Quiki account</li>
            <li>
              Navigate to the Account Settings or Subscription Management page
            </li>
            <li>Click on the &quot;Cancel Subscription&quot; button</li>
            <li>Follow the prompts to confirm your cancellation</li>
          </ol>
          <p>
            Upon cancellation, you will retain access to Quiki s services until
            the end of your current billing period. After this period, your
            account will be downgraded to the free tier or deactivated,
            depending on your chosen option.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">Refund Policy</h1>
          <p>
            Quiki offers a 7-day money-back guarantee for new subscriptions. If
            you are not satisfied with our service, you may request a full
            refund within 7 days of your initial subscription purchase. To
            request a refund, please contact our support team at{" "}
            <a
              href="mailto:akshu.24gupta@gmail.com"
              className="text-sky-700 underline"
            >
              akshu.24gupta@gmail.com
            </a>
            .
          </p>
          <p>Please note the following conditions regarding refunds:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Refunds are only available for first-time subscribers</li>
            <li>
              Refund requests made after the 7-day period will not be honored
            </li>
            <li>Refunds do not apply to subscription renewals or upgrades</li>
            <li>Processing fees, if any, are non-refundable</li>
          </ul>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">Pro-rated Refunds</h1>
          <p>
            Quiki does not offer pro-rated refunds for partial use of our
            services or for cancellations made after the 7-day refund period.
            Your subscription will remain active until the end of the current
            billing cycle, after which it will not renew.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">Exceptions</h1>
          <p>
            In cases of technical issues or service unavailability that
            significantly impact your ability to use Quiki, we may consider
            refund requests on a case-by-case basis. Please contact our support
            team with detailed information about the issue you experienced.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">
            Changes to This Policy
          </h1>
          <p>
            We reserve the right to modify this Cancellation and Refund Policy
            at any time. Any changes will be effective immediately upon posting
            the updated policy on our website. We encourage you to review this
            policy periodically for any changes.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">Contact Us</h1>
          <p>
            If you have any questions about our Cancellation and Refund Policy,
            please contact us at{" "}
            <a
              href="mailto:akshu.24gupta@gmail.com"
              className="text-sky-700 underline"
            >
              akshu.24gupta@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
