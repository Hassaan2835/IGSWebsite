import { products, productCategories } from '@/lib/mock-data';
import { ProductCard } from '@/components/product-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const defaultCategory = searchParams?.category || "all";

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Products</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore our range of high-quality, natural healthcare solutions designed for your well-being.
        </p>
      </div>

      <Tabs defaultValue={defaultCategory} className="w-full">
        <TabsList className="h-auto grid w-full grid-cols-2 sm:grid-cols-4 md:grid-cols-7 mx-auto max-w-4xl mb-12">
          <TabsTrigger value="all">All</TabsTrigger>
          {productCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>{category.name}</TabsTrigger>
          ))}
        </TabsList>
        
        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        {productCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products
                .filter((product) => product.category === category.id).length > 0 ? (
                  products
                    .filter((product) => product.category === category.id)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                  <div className="col-span-full text-center py-16">
                    <h3 className="text-2xl font-semibold">Coming Soon!</h3>
                    <p className="text-muted-foreground mt-2">New products for this category are on their way.</p>
                  </div>
                )
              }
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
