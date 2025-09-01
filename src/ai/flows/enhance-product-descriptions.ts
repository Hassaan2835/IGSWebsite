'use server';

/**
 * @fileOverview AI-powered product description enhancement flow.
 *
 * - enhanceProductDescription - A function that enhances a product description using AI.
 * - EnhanceProductDescriptionInput - The input type for the enhanceProductDescription function.
 * - EnhanceProductDescriptionOutput - The return type for the enhanceProductDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceProductDescriptionInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  originalDescription: z.string().describe('The original product description.'),
  keyIngredients: z.string().describe('Comma separated list of key ingredients.'),
});
export type EnhanceProductDescriptionInput = z.infer<typeof EnhanceProductDescriptionInputSchema>;

const EnhanceProductDescriptionOutputSchema = z.object({
  enhancedDescription: z.string().describe('The enhanced product description.'),
});
export type EnhanceProductDescriptionOutput = z.infer<typeof EnhanceProductDescriptionOutputSchema>;

export async function enhanceProductDescription(
  input: EnhanceProductDescriptionInput
): Promise<EnhanceProductDescriptionOutput> {
  return enhanceProductDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceProductDescriptionPrompt',
  input: {schema: EnhanceProductDescriptionInputSchema},
  output: {schema: EnhanceProductDescriptionOutputSchema},
  prompt: `You are an AI expert in writing compelling product descriptions.

  You are provided with the original product description, key ingredients, and the product name. Create an enhanced product description that highlights the key benefits and ingredients.
  Decide whether to include content related to clinical studies or research, where appropriate.
  Product Name: {{{productName}}}
  Original Description: {{{originalDescription}}}
  Key Ingredients: {{{keyIngredients}}}
  `,
});

const enhanceProductDescriptionFlow = ai.defineFlow(
  {
    name: 'enhanceProductDescriptionFlow',
    inputSchema: EnhanceProductDescriptionInputSchema,
    outputSchema: EnhanceProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
