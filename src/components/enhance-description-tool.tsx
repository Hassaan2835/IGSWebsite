"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { enhanceProductDescriptionAction } from '@/lib/actions';
import { Wand2, Loader2 } from 'lucide-react';
import type { EnhanceProductDescriptionInput } from '@/ai/flows/enhance-product-descriptions';

const formSchema = z.object({
  productName: z.string().min(1, 'Product name is required.'),
  originalDescription: z.string().min(1, 'Original description is required.'),
  keyIngredients: z.string().min(1, 'Key ingredients are required.'),
});

type EnhanceDescriptionToolProps = EnhanceProductDescriptionInput;

export function EnhanceDescriptionTool({
  productName,
  originalDescription,
  keyIngredients,
}: EnhanceDescriptionToolProps) {
  const [enhancedDescription, setEnhancedDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName,
      originalDescription,
      keyIngredients,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setEnhancedDescription('');
    try {
      const result = await enhanceProductDescriptionAction(values);
      if (result.enhancedDescription) {
        setEnhancedDescription(result.enhancedDescription);
      }
    } catch (error) {
      console.error('Failed to enhance description:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="bg-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wand2 className="text-accent" />
          AI Product Description Enhancer
        </CardTitle>
        <CardDescription>
          Use our AI tool to generate a compelling new description for this product.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="productName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="originalDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Original Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={4} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="keyIngredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Key Ingredients (comma-separated)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enhancing...
                </>
              ) : (
                'Enhance Description'
              )}
            </Button>
          </form>
        </Form>
        <div className="flex flex-col">
           <p className="font-medium text-sm mb-2">Enhanced Description</p>
          <div className="prose prose-sm max-w-none p-4 h-full rounded-md border bg-background min-h-[200px]">
            {isLoading ? (
                 <div className="flex items-center justify-center h-full">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
            ) : enhancedDescription ? (
              enhancedDescription
            ) : (
                <p className="text-muted-foreground">The AI-generated description will appear here.</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
