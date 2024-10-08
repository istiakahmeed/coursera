import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <img
            src="/public/faq.png"
            alt="Educator pointing upwards"
            width={400}
            height={600}
            className="rounded-lg"
          />
          <Card className="absolute bottom-4 left-4 right-4 bg-[#1c2a34] text-white">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">
                Contact Us For a{" "}
                <span className="text-red-500">Free Learning</span>
              </h3>
              <p className="text-lg font-semibold mb-2">
                Consulting Evaluation
              </p>
              <div className="flex items-center">
                <svg
                  className=" w-6 h-6 mr-2"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-red-500">088 4500 105</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <div className="inline-block bg-red-100 text-red-500 px-2 py-1 rounded-full text-sm font-semibold mb-2">
            FAQ
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-6">
            Architect client-centered total linkage for intuitive benefits.
            Dynamically restore convergence before real-time restore.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                1. Why choose us for your education?
              </AccordionTrigger>
              <AccordionContent>
                We care about safety big time — and so do your site&apos;s
                visitors. With a Shared Hosting account, you get an SSL
                certificate for free to add to your site. In this day and age,
                having an SSL for your site is a no-brainer best practice. Not
                only does an SSL help your visitors feel safe interacting with
                your site — this is particularly important if you run an
                e-commerce site.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                2. Why choose us for your education?
              </AccordionTrigger>
              <AccordionContent>
                This content is not visible in the image. You would need to
                provide the actual answer or leave it empty if unknown.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3. What We Offer To You?</AccordionTrigger>
              <AccordionContent>
                This content is not visible in the image. You would need to
                provide the actual answer or leave it empty if unknown.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How We Provide Services For You?
              </AccordionTrigger>
              <AccordionContent>
                This content is not visible in the image. You would need to
                provide the actual answer or leave it empty if unknown.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
