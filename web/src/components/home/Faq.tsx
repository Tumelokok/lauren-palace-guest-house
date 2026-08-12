import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Container from "@/src/components/layout/Container"
import Section from "@/src/components/layout/Section"

const faqs = [
  {
    question: "What time is check-in?",
    answer:
      "Check-in details will be provided when your reservation is confirmed.",
  },
  {
    question: "What time is check-out?",
    answer:
      "Check-out details will be provided with your reservation confirmation.",
  },
  {
    question: "Is breakfast included?",
    answer:
      "Breakfast availability is being confirmed and will be shared once verified.",
  },
  {
    question: "Is secure parking available?",
    answer:
      "Parking arrangements are being confirmed to support guest convenience.",
  },
  {
    question: "Do all rooms have Wi-Fi?",
    answer:
      "Wi-Fi availability is being confirmed as part of room details.",
  },
  {
    question: "Are children welcome?",
    answer:
      "Children are welcome; please contact us for the best room recommendation.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancellation terms depend on the booking channel and will be provided at the time of booking.",
  },
  {
    question: "How can I make a booking?",
    answer:
      "Direct booking details are being prepared for the official website and can also be confirmed through our contact channels.",
  },
]

/**
 * FAQ section for the Lauren Palace Guest House homepage.
 */
export default function Faq() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-800">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Everything You Need To Know Before You Arrive
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            A few helpful answers to support your stay and make planning simple.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#fcfaf7_0%,#f8f2e9_100%)] p-4 shadow-[0_16px_40px_rgba(17,17,17,0.06)] sm:p-6">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((item) => (
              <AccordionItem
                key={item.question}
                value={item.question}
                className="rounded-[20px] border border-white/80 bg-white/90 px-4"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-slate-900">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pt-2 text-sm leading-7 text-slate-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  )
}
