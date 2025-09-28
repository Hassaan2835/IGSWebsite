

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Pill, Shield, Bone, Brain, Droplet, Weight, Baby, HeartPulse } from 'lucide-react';
import { productCategories } from '@/lib/mock-data';
import { ReactElement } from 'react';
import { AnimatedSection } from '@/components/animated-section';

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
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground-dark">
              Welcome to <span className="text-primary">IGS Health Care</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Your trusted partner in natural healthcare. Discover our commitment to quality, innovation, and your well-being.
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
              alt="IGS Health Care Logo"
              fill
              data-ai-hint="company logo"
              className="rounded-xl shadow-2xl object-contain"
            />
          </div>
        </div>
      </section>

      <section id="categories" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Product Categories</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Browse our specialized products designed to address your specific health needs.
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

      <section className="py-16 md:py-24 bg-primary/5 overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
           <AnimatedSection animation="slideInFromLeft" className="order-last md:order-first">
             <div className="relative h-64 md:h-auto">
               <Image
                src="https://www.guardian.in/cdn/shop/articles/What-Is-The-Impact-of-Multivitamins-On-Your-Body.jpg?v=1713937505&width=1000"
                alt="A modern research laboratory"
                width={600}
                height={450}
                data-ai-hint="modern laboratory"
                className="rounded-xl shadow-xl object-cover w-full h-full"
              />
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slideInFromRight" className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Vision &amp; Mission</h2>
            <p className="text-muted-foreground">
              We are dedicated to enhancing community health by providing premium, natural medicines. Our vision is to be a leader in the healthcare industry, recognized for our innovation and unwavering commitment to quality. We adhere strictly to WHO standards for good manufacturing practices, ensuring every product is safe and effective.
            </p>
            <Button asChild variant="outline">
              <Link href="/about">Learn More</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Approach</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From concept to consumer, our process is defined by excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="flex flex-col items-center text-center p-6 space-y-3">
              <Shield className="w-12 h-12 text-accent" />
              <h3 className="text-xl font-semibold">Marketing and Sales</h3>
              <p className="text-muted-foreground">We build strong relationships with distributors and healthcare professionals to ensure our products reach those in need.</p>
            </div>
             <div className="flex flex-col items-center text-center p-6 space-y-3">
              <Shield className="w-12 h-12 text-accent" />
              <h3 className="text-xl font-semibold">Building Trust</h3>
              <p className="text-muted-foreground">We aim to build trust with partners and consumers through transparency, quality, and a commitment to health.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

    
