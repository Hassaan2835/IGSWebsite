import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Pill, Shield, Bone, Brain, Droplet, Weight, Baby, HeartPulse } from 'lucide-react';
import { productCategories } from '@/lib/mock-data';
import { ReactElement } from 'react';
import { AnimatedSection } from '@/components/animated-section';

export const metadata: Metadata = {
  title: 'IGS Health Care — Natural Healthcare Products in Pakistan',
  description:
    'IGS Health Care offers WHO-GMP certified natural medicines: vitamins, calcium supplements, iron syrups, immune boosters, memory enhancers and more. Trusted by families across Pakistan.',
  alternates: { canonical: 'https://www.igshealthcare.com' },
  openGraph: {
    title: 'IGS Health Care — Natural Healthcare Products in Pakistan',
    description:
      'WHO-GMP certified natural medicines for the whole family. Vitamins, calcium, iron, immune boosters & more.',
    url: 'https://www.igshealthcare.com',
    type: 'website',
  },
};

// ── JSON-LD: FAQ Page (AEO) ────────────────────────────────────────────────
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What products does IGS Health Care offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IGS Health Care offers a wide range of natural health supplements including multivitamins, calcium tablets and syrups, iron deficiency treatments, immune boosters, memory boosters, liver support, and infant colic relief products.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are IGS Health Care products GMP certified?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All IGS Health Care products are manufactured in compliance with WHO Good Manufacturing Practices (GMP) to ensure the highest standards of quality, safety, and efficacy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I buy IGS Health Care products in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IGS Health Care products are available through authorised distributors, pharmacies, and healthcare professionals across Pakistan. You can also contact us via our website for more information.',
      },
    },
    {
      '@type': 'Question',
      name: 'What vitamins does IGS Health Care sell?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IGS Health Care sells multivitamin tablets (IG-VIT, MY VITA), multivitamin syrups (My-Vita Syp), antioxidant softgels (G-Austin G-10), CoQ10 tablets (Ieco-10), and Vitamin D3 instant shots (Quick-D Insta Shot) in vanilla, strawberry, and mango flavours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does IGS Health Care have products for infants and children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. IGS Health Care offers infant-specific products including Dontiv 5 for colic pain relief, CILOF-A Drops for iron and vitamin A deficiency in infants, and multivitamin drops suitable for young children.',
      },
    },
  ],
};

// ── JSON-LD: Speakable (GEO — AI & voice assistant optimisation) ──────────
const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'IGS Health Care — Natural Healthcare Products in Pakistan',
  url: 'https://www.igshealthcare.com',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.speakable-intro', '.speakable-mission'],
  },
};

const categoryIcons: { [key: string]: ReactElement } = {
  'vitamins': <Pill className="w-8 h-8" />,
  'joint-bone-health': <Bone className="w-8 h-8" />,
  'iron-deficiency': <Droplet className="w-8 h-8" />,
  'colic-pain': <Baby className="w-8 h-8" />,
  'weight-loss-liver': <Weight className="w-8 h-8" />,
  'immune-booster': <HeartPulse className="w-8 h-8" />,
  'memory-booster': <Brain className="w-8 h-8" />,
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      {/* Hero */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-primary/10" aria-label="Hero">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground-dark">
              Welcome to <span className="text-primary">IGS Health Care</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground speakable-intro">
              Your trusted partner in natural healthcare across Pakistan. Discover our WHO-GMP certified commitment to quality, innovation, and your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 hover:text-primary">
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-96">
            <Image
              src="https://uploads.onecompiler.io/43vh7ked9/43vj7vcae/Logo_IGS_Health_Care-removebg-preview.png"
              alt="IGS Health Care Logo — Natural Healthcare Products Pakistan"
              fill
              priority
              data-ai-hint="company logo"
              className="rounded-xl shadow-2xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="categories" className="py-16 md:py-24 bg-background" aria-label="Product Categories">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Product Categories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Browse our specialised natural health products — from vitamins and calcium supplements to immune boosters and infant care solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.slice(0, 6).map((category) => (
              <Card key={category.id} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit text-primary">
                    {categoryIcons[category.id] || <Pill className="w-8 h-8" />}
                  </div>
                  <CardTitle className="pt-4">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{category.description}</CardDescription>
                  <Button asChild variant="link" className="mt-4 text-primary">
                    <Link href={`/products?category=${category.id}`}>View Products</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-primary/5 overflow-x-hidden" aria-label="Vision and Mission">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="slideInFromLeft" className="order-last md:order-first">
            <div className="relative h-64 md:h-auto">
              <Image
                src="https://www.guardian.in/cdn/shop/articles/What-Is-The-Impact-of-Multivitamins-On-Your-Body.jpg?v=1713937505&width=1000"
                alt="IGS Health Care natural vitamins and health supplements"
                width={600}
                height={450}
                data-ai-hint="modern laboratory"
                className="rounded-xl shadow-xl object-cover w-full h-full"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideInFromRight" className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Vision &amp; Mission</h2>
            <p className="text-muted-foreground speakable-mission">
              We are dedicated to enhancing community health across Pakistan by providing premium, natural medicines. Our vision is to be a leader in the healthcare industry, recognised for our innovation and unwavering commitment to quality. We adhere strictly to WHO standards for Good Manufacturing Practices (GMP), ensuring every product is safe, effective, and accessible.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-background" aria-label="Our Approach">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From concept to consumer, our process is defined by excellence, transparency, and a commitment to your health.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center p-6 space-y-3">
              <Shield className="w-12 h-12 text-accent" aria-hidden="true" />
              <h3 className="text-xl font-semibold">Marketing and Sales</h3>
              <p className="text-muted-foreground">We build strong relationships with distributors and healthcare professionals to ensure our products reach those in need across Pakistan.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 space-y-3">
              <Shield className="w-12 h-12 text-accent" aria-hidden="true" />
              <h3 className="text-xl font-semibold">Building Trust</h3>
              <p className="text-muted-foreground">We aim to build trust with partners and consumers through transparency, quality assurance, and a deep commitment to health outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section — visible to users AND AI engines */}
      <section className="py-16 md:py-24 bg-primary/5" aria-label="Frequently Asked Questions">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Are IGS Health Care products GMP certified?',
                a: 'Yes. All our products are manufactured under WHO Good Manufacturing Practices (GMP), ensuring every product meets the highest standards of safety and efficacy.',
              },
              {
                q: 'What healthcare products does IGS Health Care offer?',
                a: 'We offer multivitamins, calcium supplements, iron deficiency syrups, immune boosters, memory enhancers, liver support formulas, and infant colic relief products — all made from natural ingredients.',
              },
              {
                q: 'Where are IGS Health Care products available in Pakistan?',
                a: 'Our products are available through authorised distributors, pharmacies, and healthcare professionals across Pakistan. Contact us for your nearest stockist.',
              },
              {
                q: 'Do you have products suitable for infants and children?',
                a: 'Yes. We offer paediatric formulations including Dontiv 5 for colic pain, CILOF-A Drops for iron and vitamin A deficiency, and multivitamin drops for young children.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border rounded-xl p-6 bg-background shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{q}</h3>
                <p className="text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
