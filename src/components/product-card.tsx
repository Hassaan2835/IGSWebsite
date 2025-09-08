
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import type { Product } from '@/lib/mock-data';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-2xl">
       <div className="p-4 bg-gray-50">
        <div className="aspect-[4/5] relative">
            <Image
            src={product.image}
            alt={product.name}
            fill
            data-ai-hint={product.dataAiHint}
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            />
        </div>
       </div>
      <CardContent className="p-4 flex-grow flex flex-col bg-background">
        <h3 className="text-lg font-semibold mb-2 flex-grow">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.shortDescription}</p>
        <div className="flex items-center justify-between mt-auto">
          <Button asChild variant="outline" className="w-full mr-2">
            <Link href={`/products/${product.id}`}>
              View Product
            </Link>
          </Button>
          <Button variant="default" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
