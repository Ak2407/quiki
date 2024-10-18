import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-6 mx-auto w-[95%] lg:w-[70%] py-10 text-neutral-600 ">
      <div className="flex flex-col gap-12 items-start justify-center w-full">
        <h1 className="text-5xl lg:text-6xl font-black text-sky-700">
          Privacy Policy
        </h1>
        <p className="italic">Last updated: Oct 18 , 2024</p>
        <Separator />
      </div>
      <div className="flex flex-col gap-8 items-start justify-evenly w-[95%] py-10 ">
        <p>
          At Quiki, we are committed to protecting your privacy and the security
          of your personal information. This Privacy Policy outlines how we
          collect, use, store, and disclose the data we gather when you use our
          website and services, including our practices regarding Google user
          data.
        </p>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">
            Information We Collect
          </h1>
          <p>
            When you use Quiki, we may collect certain personally identifiable
            information, such as your name, email address, and phone number. If
            you choose to integrate our service with Google, we may also collect
            Google user data as permitted by you through Google's consent
            process.
            <br />
            <br />
            We use this information to provide and improve our services,
            communicate with you, and personalize your experience. We do not
            share your personal data with third-party AI applications.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">
            Data Storage and Security
          </h1>
          <p>
            We store Google user data securely on our servers, using
            industry-standard encryption and security measures. We retain this
            data only for as long as necessary to fulfill the purposes described
            in this Privacy Policy, unless a longer retention period is required
            by law.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">
            Sharing of Google User Data
          </h1>
          <div className="flex flex-col w-full items-start justify-center gap-6">
            <p>
              We engage third-party service providers to perform various
              functions on our behalf. These functions may include data
              processing, providing customer support, processing transactions,
              or performing analytics. When we share Google user data with these
              third parties, it is solely for the purpose of enabling them to
              perform these services on our behalf.
            </p>
            <p>To protect your privacy: </p>
            <ul className="list-disc marker:text-gray-300 ml-6 space-y-4">
              <li>
                We ensure that these third parties are bound by strict
                confidentiality and data security agreements.
              </li>
              <li>
                We require them to comply with our privacy standards and
                applicable data protection laws.
              </li>
              <li>
                We only provide them with the information necessary to perform
                their specific services.
              </li>
            </ul>
            <p>
              Please note that these third-party service providers have their
              own privacy policies. If you have any concerns regarding the
              privacy practices of our service providers, please contact us
              directly.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">
            Cookies and Log Data
          </h1>
          <p>
            When you visit Quiki, we may collect log data, such as your IP
            address, browser type, and pages visited. We may also use cookies to
            enhance your user experience and gather analytics about how our site
            is used.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">Third-Party Links</h1>
          <p>
            Our website may contain links to third-party sites. Please be aware
            that we are not responsible for the privacy practices of these
            sites. We encourage you to review the privacy policies of any site
            you visit.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">
            Children's Privacy
          </h1>
          <p>
            Quiki is not intended for use by children under the age of 13. We do
            not knowingly collect personal information from children under 13.
            If we discover that a child under 13 has provided us with personal
            information, we will delete it from our servers immediately.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">
            Changes to This Privacy Policy
          </h1>
          <p>
            We may update this Privacy Policy from time to time. When we make
            changes, we will revise the "last updated" date at the top of the
            policy. We encourage you to review this policy periodically to stay
            informed about how we protect your privacy.
          </p>
        </section>
        <section className="flex flex-col gap-6 items-start justify-center w-full">
          <h1 className="text-2xl text-sky-700 font-bold">Contact Us</h1>
          <p>
            If you have any questions or concerns about our Privacy Policy,
            please contact us at{" "}
            <span>
              <a
                href="mailto:akshu.24gupta@gmail.com"
                className="text-sky-700 underline"
              >
                akshu.24gupta@gmail.com
              </a>
            </span>{" "}
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
