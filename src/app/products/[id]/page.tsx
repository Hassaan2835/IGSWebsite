import Image from 'next/image';
import { products } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EnhanceDescriptionTool } from '@/components/enhance-description-tool';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex justify-center items-start">
          <div className="relative aspect-[4/5] w-full max-w-md rounded-lg overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              data-ai-hint={product.dataAiHint}
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-6">
          <Badge variant="secondary" className="capitalize">{product.category.replace('-', ' ')}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          <p className="text-lg text-muted-foreground">{product.shortDescription}</p>

          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Composition</h3>
                <p className="text-muted-foreground">{product.details.composition}</p>
              </div>
              <div>
                <h3 className="font-semibold">Health Benefits</h3>
                <p className="text-muted-foreground">{product.details.healthBenefits}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

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
