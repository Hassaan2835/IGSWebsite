import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Microscope, Target, Lightbulb, Users, BarChart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-32 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About MediCatalog</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to natural medicine, quality, and community health.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://picsum.photos/600/500"
              alt="Team discussing"
              width={600}
              height={500}
              data-ai-hint="team discussion"
              className="rounded-xl shadow-xl object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission &amp; Vision</h2>
            <p className="text-muted-foreground">
              Our mission is to enhance the health and well-being of communities by providing premium-quality, natural medicines. We envision a world where everyone has access to safe, effective, and affordable healthcare solutions derived from nature.
            </p>
            <p className="text-muted-foreground">
              We are committed to being a leader in the healthcare industry, renowned for our innovation, integrity, and our unwavering dedication to our customers. We rigorously follow WHO recommendations for Good Manufacturing Practices (GMP) to ensure the highest standards of quality and safety in every product we create.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Operations</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Excellence in every step, from the lab to the market.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                  <div className="flex items-center gap-3">
                    <Microscope className="w-6 h-6 text-accent" />
                    Research &amp; Development
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground p-4">
                  Our R&amp;D department is the heartbeat of our innovation. We employ a team of dedicated scientists and researchers who are passionate about discovering the therapeutic potential of natural compounds. Our process involves rigorous scientific validation, clinical studies where appropriate, and a commitment to creating formulations that are both effective and safe for long-term use.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold">
                  <div className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-accent" />
                    Marketing and Sales
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground p-4">
                  Our marketing and sales strategy is built on education and partnership. We work closely with healthcare professionals, distributors, and retailers to ensure they have a deep understanding of our products and their benefits. We believe in building trust through transparency, providing clear, evidence-based information to both our partners and the end consumers. Our goal is to make our natural health solutions accessible to everyone who needs them.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center p-4">
                    <Lightbulb className="w-10 h-10 text-primary mb-4"/>
                    <h3 className="text-lg font-semibold">Innovation</h3>
                    <p className="text-muted-foreground mt-2">Constantly pursuing new research and natural solutions.</p>
                </div>
                <div className="flex flex-col items-center p-4">
                    <Users className="w-10 h-10 text-primary mb-4"/>
                    <h3 className="text-lg font-semibold">Customer-Centric</h3>
                    <p className="text-muted-foreground mt-2">Placing the well-being of our customers at the forefront.</p>
                </div>
                <div className="flex flex-col items-center p-4">
                    <BarChart className="w-10 h-10 text-primary mb-4"/>
                    <h3 className="text-lg font-semibold">Integrity</h3>
                    <p className="text-muted-foreground mt-2">Upholding the highest standards of quality and ethics.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
