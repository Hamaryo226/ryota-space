import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CodeBlock } from "./code-block";

interface AccordionCodeBlockProps {
  title: string;
  description?: string;
  code: string;
  language: string;
  codeTitle?: string;
}

export function AccordionCodeBlock({
  title,
  description,
  code,
  language,
  codeTitle,
}: AccordionCodeBlockProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          {description && (
            <p className="mb-4 text-sm text-muted-foreground">{description}</p>
          )}
          <CodeBlock code={code} language={language} title={codeTitle} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
