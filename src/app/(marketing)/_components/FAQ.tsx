import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQitems } from "@/lib/constants";

const FAQ = () => {
  return (
    <div
      id="faq"
      className="flex flex-col items-start justify-center gap-10 p-4 lg:p-10 w-full"
    >
      <h1 className="text-center text-3xl font-bold lg:w-full">
        Frequently Asked Questions
      </h1>
      <div className="w-full">
        {FAQitems.map((item, index: number) => (
          <div key={index} className="w-full">
            <Accordion
              type="single"
              collapsible
              className="lg:w-[70%] lg:mx-auto"
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className=" lg:text-xl text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="lg:text-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
