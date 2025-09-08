
'use client';

import Image from 'next/image';
import { products } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { EnhanceDescriptionTool } from '@/components/enhance-description-tool';
import { useState, use } from 'react';
import { Star, StarHalf, Minus, Plus, X } from 'lucide-react';
import Link from 'next/link';

function QuantityInput() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" onClick={decrement} className="h-8 w-8">
        <Minus className="h-4 w-4" />
      </Button>
      <span className="text-lg font-semibold w-10 text-center">{quantity}</span>
      <Button variant="outline" size="icon" onClick={increment} className="h-8 w-8">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(product?.image);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  if (!product) {
    notFound();
  }

  // Create a list of images to be used as thumbnails
  const imageThumbnails = [
    product.image,
    'https://picsum.photos/100/100?random=1',
    'https://picsum.photos/100/100?random=2',
    'https://picsum.photos/100/100?random=3',
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
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          
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

          <p className="text-3xl font-bold">Rs. 1,200</p>
          
          <div>
            <h3 className="font-semibold text-lg mb-2">Helps to:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Provide an an <span className="font-semibold text-foreground">energy boost</span> to improve productivity and overall wellbeing.</li>
                <li>Fight off <span className="font-semibold text-foreground">fatigue and lethargy.</span></li>
                <li>Support <span className="font-semibold text-foreground">immunity, bone and muscle health.</span></li>
            </ul>
          </div>

          <div>
              <h3 className="text-md font-medium">Pack Size: <span className="text-muted-foreground">30 Tablets</span></h3>
              <div className="flex gap-2 mt-2">
                  <Button variant="default">30 Tablets</Button>
                  <Button variant="outline">60 Tablets</Button>
              </div>
          </div>

          <div>
            <h3 className="text-md font-medium mb-2">Quantity</h3>
            <QuantityInput/>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">Add to Cart</Button>
              <Button size="lg" variant="outline" className="flex-1">Buy It Now</Button>
          </div>

        </div>
      </div>

      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full p-4" onClick={e => e.stopPropagation()}>
            <Image
              src={activeImage || product.image}
              alt={product.name}
              width={800}
              height={1000}
              className="object-contain w-full h-full"
            />
            <button 
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
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
