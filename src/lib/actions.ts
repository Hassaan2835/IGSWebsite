"use server";

import { enhanceProductDescription, EnhanceProductDescriptionInput } from '@/ai/flows/enhance-product-descriptions';

export async function enhanceProductDescriptionAction(input: EnhanceProductDescriptionInput) {
  try {
    const result = await enhanceProductDescription(input);
    return result;
  } catch (error) {
    console.error("Error enhancing product description:", error);
    // In a real app, you might want to return a more user-friendly error
    throw new Error("Failed to enhance description.");
  }
}
