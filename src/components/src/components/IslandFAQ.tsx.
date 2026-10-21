import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface IslandFAQProps {
  islandName: string;
}

export function IslandFAQ({ islandName }: IslandFAQProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-serif font-bold mb-6">Frequently Asked Questions about {islandName}</h2>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left font-medium text-base">
            What are the common tourist traps to avoid in {islandName}?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Avoid unauthorized street guides quoting high cash rates. Always pre-book certified local guides through trusted private networks.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left font-medium text-base">
            What are the best off-menu local dishes to try?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            Skip standard resort food and seek out authentic local spots serving traditional regional spice preparations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
Import and place <IslandFAQ islandName="{islandName}"/> right inside your DestinationDetail.tsx page.

3. Ensure Crawler Access in public/robots.txt
The Problem: If your robots.txt file is missing or blocks AI crawlers, tools like ChatGPT Search and Google-Extended won't be able to read your fresh travel briefs.

Where to fix: Create or check public/robots.txt in your repository root.

The Fix: Ensure it explicitly allows modern AI search agents:

Plaintext
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://numadatravel.com/sitemap.xml
