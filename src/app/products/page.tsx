import type { Metadata } from 'next';
import { Suspense } from 'react';
import { products, productCategories } from '@/lib/mock-data';
import { ProductCard } from '@/components/product-card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Natural Health Products — Vitamins, Calcium, Iron & More',
  description:
    'Explore IGS Health Care\'s full range of WHO-GMP certified natural health products: multivitamins, calcium supplements, iron syrups, immune boosters, memory enhancers, and infant care solutions available in Pakistan.',
  alternates: { canonical: 'https://www.igshealthcare.com/products' },
  openGraph: {
    title: 'Natural Health Products — IGS Health Care Pakistan',
    description:
      'Browse all IGS Health Care products: vitamins, calcium, iron, immune boosters, memory supplements and more.',
    url: 'https://www.igshealthcare.com/products',
    type: 'website',
  },
};

// ── JSON-LD: ItemList (all product categories) ────────────────────────────
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'IGS Health Care Product Categories',
  description: 'Natural health supplement categories offered by IGS Health Care in Pakistan.',
  url: 'https://www.igshealthcare.com/products',
  numberOfItems: productCategories.length,
  itemListElement: productCategories.map((cat, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: cat.name,
    description: cat.description,
    url: `https://www.igshealthcare.com/products?category=${cat.id}`,
  })),
};

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
  );
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const category = searchParams?.category;
  const currentCategory = productCategories.find((c) => c.id === category);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {currentCategory?.name || 'All Natural Health Products'}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {currentCategory?.description ||
            'Explore our range of WHO-GMP certified, natural healthcare products designed for your well-being — from vitamins and calcium supplements to immune boosters and infant care.'}
        </p>
      </header>

      {/* Category Filter */}
      <nav className="flex flex-wrap justify-center gap-4 mb-12" aria-label="Product category filter">
        <Link
          href="/products"
          className={cn(buttonVariants({ variant: !category ? 'default' : 'outline' }))}
          aria-current={!category ? 'page' : undefined}
        >
          All
        </Link>
        {productCategories.map((c) => (
          <Link
            key={c.id}
            href={`/products?category=${c.id}`}
            className={cn(buttonVariants({ variant: category === c.id ? 'default' : 'outline' }))}
            aria-current={category === c.id ? 'page' : undefined}
          >
            {c.name}
          </Link>
        ))}
      </nav>

      {/* Product Grid */}
      <main aria-label="Product listing">
        <Suspense fallback={<div className="text-center py-16 text-muted-foreground">Loading products…</div>}>
          <ProductGrid category={category} />
        </Suspense>
      </main>
    </div>
  );
}
