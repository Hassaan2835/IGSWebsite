
'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { productCategories } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function ProductsSidebar() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  return (
    <aside className="w-full md:w-64 lg:w-72">
      <div className="sticky top-20">
        <h2 className="text-2xl font-bold mb-6">Categories</h2>
        <div className="flex flex-col gap-2">
          <Link href="/products" passHref>
            <Button
              variant={!currentCategory ? 'secondary' : 'ghost'}
              className="w-full justify-start"
            >
              All Products
            </Button>
          </Link>
          {productCategories.map((category) => (
            <Link href={`/products?category=${category.id}`} key={category.id} passHref>
               <Button
                variant={currentCategory === category.id ? 'secondary' : 'ghost'}
                className="w-full justify-start"
              >
                {category.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
