
import { Suspense } from 'react';
import { products, productCategories } from '@/lib/mock-data';
import { ProductCard } from '@/components/product-card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

function ProductGrid({ category }: { category?: string }) {
  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  return (
     <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full text-center py-16">
          <h3 className="text-2xl font-semibold">Coming Soon!</h3>
          <p className="text-muted-foreground mt-2">
            New products for this category are on their way.
          </p>
        </div>
      )}
    </div>
  )
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const category = searchParams?.category;
  const currentCategory = productCategories.find(c => c.id === category);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {currentCategory?.name || 'All Products'}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {currentCategory?.description || 'Explore our range of high-quality, natural healthcare solutions designed for your well-being.'}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Link href="/products" className={cn(buttonVariants({ variant: !category ? 'default' : 'outline' }))}>All</Link>
        {productCategories.map((c) => (
          <Link
            key={c.id}
            href={`/products?category=${c.id}`}
            className={cn(buttonVariants({ variant: category === c.id ? 'default' : 'outline' }))}
          >
            {c.name}
          </Link>
        ))}
      </div>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductGrid category={category} />
        </Suspense>
      </main>
    </div>
  );
}
