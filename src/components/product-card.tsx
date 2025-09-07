import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Product } from '@/lib/mock-data';
import { Button } from './ui/button';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-[4/5] relative">
          <Image
            src={product.image}
            alt={product.name}
            fill
            data-ai-hint={product.dataAiHint}
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
        <CardDescription className="flex-grow">{product.shortDescription}</CardDescription>
        <Button asChild variant="link" className="p-0 h-auto mt-4 self-start text-primary">
          <Link href={`/products/${product.id}`}>
            View Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
