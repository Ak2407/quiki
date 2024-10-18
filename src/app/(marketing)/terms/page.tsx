import { Separator } from "@/components/ui/separator";

export default function Terms() {
  return (
    <div className="flex flex-col items-start justify-center gap-6 mx-auto w-[95%] lg:w-[70%] py-10 text-neutral-600  ">
      <div className="flex flex-col gap-12 items-start justify-center w-full">
        <h1 className="text-5xl lg:text-6xl font-black text-sky-700">
          Terms of Service
        </h1>
        <p className="italic">Last updated: Oct 18, 2024</p>
        <Separator />
      </div>
      <div className="flex flex-col gap-8 items-start justify-evenly w-[95%] pt-10 ">
        <p>
          Welcome to Quiki! These Terms of Service (&quot;Terms&quot;) govern
          your use of our website and services. By accessing or using Quiki, you
          agree to be bound by these Terms. If you do not agree with any part of
          these Terms, please do not use our website or services.
        </p>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">User Content</h1>
          <p>
            When you upload images to Quiki, you retain all copyrights and other
            intellectual property rights in your content. We do not add your
            images to our database or make them accessible to other users. By
            uploading images, you grant us a limited, non-exclusive,
            royalty-free, and worldwide license to use, copy, and display your
            content solely for the purpose of providing our services.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">
            Third-Party Websites and Services
          </h1>
          <p>
            Quiki may provide links to third-party websites or services. We do
            not endorse, control, or assume responsibility for the content,
            privacy policies, or practices of any third-party websites. Your use
            of third-party websites is at your own risk and subject to their
            respective terms and conditions.
          </p>
          <p>
            Quiki utilizes YouTube API Services. By using our services, you
            agree to be bound by the{" "}
            <a
              href="https://www.youtube.com/t/terms"
              className="text-sky-700 underline"
            >
              YouTube Terms of Service
            </a>{" "}
            and the{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-sky-700 underline"
            >
              Google Privacy Policy
            </a>
            .
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">Disclaimers</h1>
          <p>
            Quiki is provided &quot;as is&quot; and without warranties of any
            kind, whether express or implied. We do not guarantee that our
            website or services will be error-free, uninterrupted, or secure.
            Your use of Quiki is at your own risk, and you assume full
            responsibility for any damages or losses that may result from your
            use of our website or services.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">
            Limitation of Liability
          </h1>
          <p>
            To the fullest extent permitted by law, Quiki and its affiliates,
            officers, employees, agents, and partners shall not be liable for
            any indirect, incidental, special, consequential, or punitive
            damages arising out of or relating to your use of our website or
            services, whether based on warranty, contract, tort (including
            negligence), or any other legal theory.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">
            Intellectual Property
          </h1>
          <p>
            The Quiki logo and other trademarks, service marks, graphics, and
            logos used in connection with our website and services are our
            intellectual property. You may not use our trademarks without our
            express written permission.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">Termination</h1>
          <p>
            We reserve the right to terminate your access to Quiki at any time,
            without notice, for any reason, including, but not limited to, a
            breach of these Terms.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">Governing Law</h1>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of [Your Jurisdiction], without giving effect to any
            principles of conflicts of law.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">
            Changes to These Terms
          </h1>
          <p>
            We may update these Terms from time to time. The most current
            version will always be available on our website. By continuing to
            use Quiki after any changes, you agree to be bound by the updated
            Terms.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">Contact Us</h1>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <span>
              <a
                href="mailto:akshu.24gupta@gmail.com"
                className="text-sky-700 underline"
              >
                akshu.24gupta@gmail.com
              </a>
            </span>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
