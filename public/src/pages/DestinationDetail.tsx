TypeScript
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function IslandFAQ() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-serif mb-6">Frequently Asked Questions</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left font-medium text-lg">
            What are the common tourist traps to avoid in St. Lucia?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Avoid unauthorized street guides at the base of the Pitons who quote high cash rates. Instead, pre-book certified local guides through vetted networks like Numada's direct local contacts.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left font-medium text-lg">
            What is an authentic off-menu dish to try?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Skip the resort buffet and seek out local spots serving true green fig and saltfish prepared with local bouyon spices.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
