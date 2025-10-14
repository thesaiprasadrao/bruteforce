import { ReactNode } from "react";
import { HyperText } from "../../ui/hyper-text";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";
import SocialCard from "@/components/ui/social-card";
interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

const DEFAULT_TITLE = "Got any QUESTIONS ?";

const DEFAULT_ITEMS: FAQItemProps[] = [
    
  {
    question: "Who can participate in the hackathon?",
    answer: (
      <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
        The hackathon is open to undergraduate and graduate students from all
        colleges. Teams (up to 3-4 members) are welcome to
        participate.
      </p>
    ),
  },
  {
    question: "When and where is the event held?",
    answer: (
      <p className="text-muted-foreground mb-4 max-w-[600px]">
        The event will be held on 28th October 2025 in the Department of CSBS , DSCE Campus.
      </p>
    ),
  },
  {
    question: "How do I register and what are the fees?",
    answer: (
      <p className="text-muted-foreground mb-4 max-w-[600px]">
        Registration is free. Just click here -  <a href="https://bruteforce.devfolio.co" target="_blank" rel="noopener noreferrer"> Devfolio</a>.
      </p>
    ),
  },
  {
    question: "What is the team size and prize structure?",
    answer: (
      <p className="text-muted-foreground mb-4 max-w-[580px]">
        Teams of up to 3-4 members are allowed. Prizes include cash awards,
        certifications etc. Final prize details will be
        announced closer to the event.
      </p>
    ),
  },
  {
    question: "Are mentors available?",
    answer: (
      <p className="text-muted-foreground mb-4 max-w-[580px]">
        Yes — we provide mentorship during the hackathon. 
      </p>
    ),
  },
  {
    question: "I have a question not listed here. Who can I contact?",
    answer: (
      <>
        <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
          You can reach out to us via any of these channels:
        </p>
        <div className="w-full flex justify-center">
          <SocialCard />
        </div>
      </>
    ),
  },
];

export default function FAQ({
  title = DEFAULT_TITLE,
  items = DEFAULT_ITEMS,
  className,
}: FAQProps) {
  const renderTitleNodes = (t: string) => {
    const target = "QUESTIONS ?";
    const idx = t.indexOf(target);
    if (idx !== -1) {
      return (
        <>
          {t.slice(0, idx)}
          <HyperText as="span" startOnView>{target}</HyperText>
          {t.slice(idx + target.length)}
        </>
      );
    }
    return t;
  };
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">{renderTitleNodes(title)}</h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem key={index} value={item.value || `item-${index + 1}`}>
                <AccordionTrigger>
                  <span>{item.question}</span>
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
