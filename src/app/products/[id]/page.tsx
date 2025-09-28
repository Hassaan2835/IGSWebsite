
'use client';

import Image from 'next/image';
import { products } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EnhanceDescriptionTool } from '@/components/enhance-description-tool';
import { useState, use, useEffect, useCallback } from 'react';
import { Star, StarHalf, X, ChevronLeft, ChevronRight, Award, ShieldCheck, Leaf, Sprout, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  
  // Create a list of images to be used as thumbnails
  const imageThumbnails = [
    product?.image,
    'https://picsum.photos/seed/p1/500/600',
    'https://picsum.photos/seed/p2/500/600',
    'https://picsum.photos/seed/p3/500/600',
  ].filter(Boolean) as string[];
  
  const [activeImage, setActiveImage] = useState(imageThumbnails[0]);

  const activeImageIndex = imageThumbnails.indexOf(activeImage);

  const nextImage = useCallback(() => {
    setActiveImage(imageThumbnails[(activeImageIndex + 1) % imageThumbnails.length]);
  }, [activeImageIndex, imageThumbnails]);

  const prevImage = useCallback(() => {
    setActiveImage(imageThumbnails[(activeImageIndex - 1 + imageThumbnails.length) % imageThumbnails.length]);
  }, [activeImageIndex, imageThumbnails]);
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isImageModalOpen) {
        if (event.key === 'ArrowRight') {
          nextImage();
        } else if (event.key === 'ArrowLeft') {
          prevImage();
        } else if (event.key === 'Escape') {
          setIsImageModalOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isImageModalOpen, nextImage, prevImage]);


  if (!product) {
    notFound();
  }

  const certifications = [
    { name: "ISO", icon: <Award className="w-6 h-6 text-blue-600" /> },
    { name: "GMP", icon: <ShieldCheck className="w-6 h-6 text-green-600" /> },
    { name: "DRAP", icon: <CheckCircle2 className="w-6 h-6 text-blue-800" /> },
    { name: "HACCP", icon: <ShieldCheck className="w-6 h-6 text-red-600" /> },
    { name: "Halal", icon: <Leaf className="w-6 h-6 text-green-700" /> },
    { name: "Non-GMO", icon: <Sprout className="w-6 h-6 text-green-500" /> },
    { name: "Vegan", icon: <Leaf className="w-6 h-6 text-green-800" /> }
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="text-sm text-muted-foreground mb-4">
        <Link href="/" className="hover:text-primary">Home</Link>
        {' / '}
        <Link href="/products" className="hover:text-primary">Products</Link>
        {' / '}
        <span className="font-medium text-foreground">{product.name}</span>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column: Image Gallery */}
        <div className="flex flex-col items-center gap-4">
          <div 
            className="relative aspect-[4/5] w-full max-w-md rounded-lg overflow-hidden shadow-lg border cursor-pointer"
            onClick={() => setIsImageModalOpen(true)}
          >
            <Image
              src={activeImage || product.image}
              alt={product.name}
              fill
              data-ai-hint={product.dataAiHint}
              className="object-contain p-4"
            />
          </div>
          <div className="flex gap-2">
            {imageThumbnails.map((img, index) => (
              <button
                key={index}
                className={`w-20 h-20 rounded-md border-2 overflow-hidden ${activeImage === img ? 'border-primary' : 'border-transparent'}`}
                onClick={() => setActiveImage(img)}
              >
                <Image src={img} alt={`${product.name} thumbnail ${index + 1}`} width={80} height={80} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          
          {/* Offers & Discount Section */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-semibold">Offers & Discount</CardTitle>
              <Link href="#" className="text-sm text-primary hover:underline">View All</Link>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                <div className="flex items-center gap-4">
                  <Image src="https://picsum.photos/seed/offer1/64/64" alt="Offer" width={64} height={64} className="rounded-md" />
                  <div>
                    <p className="font-semibold">2 Biotin + Free Bonex-D Offer</p>
                    <Badge variant="secondary">For online customers only</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground line-through">Rs.4,850.</p>
                  <p className="text-lg font-bold text-primary">Rs.2,300</p>
                </div>
              </div>
               <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                <div className="flex items-center gap-4">
                  <Image src="https://picsum.photos/seed/offer2/64/64" alt="Offer" width={64} height={64} className="rounded-md" />
                  <div>
                    <p className="font-semibold">Daily Skincare Bundle</p>
                    <Badge variant="secondary">For online customers only</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground line-through">Rs.6,630.</p>
                  <p className="text-lg font-bold text-primary">Rs.4,780</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Certifications Section */}
          <div className="flex flex-wrap items-center justify-center gap-4 py-4">
            {certifications.map(cert => (
              <div key={cert.name} className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
                {cert.icon}
                <span>{cert.name}</span>
              </div>
            ))}
          </div>

          {/* Accordion Section */}
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">Product Details</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground p-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Composition</h4>
                  <p>{product.details.composition}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Health Benefits</h4>
                  <p>{product.details.healthBenefits}</p>
                </div>
                 <div>
                  <h3 className="font-semibold text-lg mb-2">Helps to:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Provide an an <span className="font-semibold text-foreground">energy boost</span> to improve productivity and overall wellbeing.</li>
                      <li>Fight off <span className="font-semibold text-foreground">fatigue and lethargy.</span></li>
                      <li>Support <span className="font-semibold text-foreground">immunity, bone and muscle health.</span></li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">Ingredients</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground p-4">
                <p>Key Ingredients: {product.keyIngredients}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">FAQs</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground p-4">
                <p>Common questions about this product will be listed here.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">Customer Reviews</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground p-4">
                 <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        <Star className="w-5 h-5"/>
                        <Star className="w-5 h-5"/>
                        <Star className="w-5 h-5"/>
                        <Star className="w-5 h-5"/>
                        <StarHalf className="w-5 h-5"/>
                    </div>
                    <p className="text-sm text-muted-foreground">(306 reviews)</p>
                 </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">Our Quality Promise</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground p-4">
                <p>We are committed to providing the highest quality natural medicines. Our products are manufactured under strict WHO-GMP guidelines to ensure safety and efficacy.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      </div>

      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center p-4" onClick={e => e.stopPropagation()}>
            
            <div className="relative w-full h-full max-w-screen-lg max-h-screen">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                className="object-contain"
              />
            </div>
            
            <button 
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/30 rounded-full p-2 hover:bg-black/60 transition-colors z-10"
              aria-label="Close image viewer"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2 hover:bg-black/60 transition-colors"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>

            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2 hover:bg-black/60 transition-colors"
                aria-label="Next image"
            >
                <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="absolute top-4 left-4 text-white bg-black/30 rounded-md px-3 py-1 text-lg">
              {activeImageIndex + 1} / {imageThumbnails.length}
            </div>

          </div>
        </div>
      )}

      <div className="mt-16">
        <EnhanceDescriptionTool
          productName={product.name}
          originalDescription={product.originalDescription}
          keyIngredients={product.keyIngredients}
        />
      </div>
    </div>
  );
}

    