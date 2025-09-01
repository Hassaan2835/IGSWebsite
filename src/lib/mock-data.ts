export type Product = {
  id: string;
  name: string;
  category: 'vitamins' | 'stress-sleep' | 'immune-booster';
  image: string;
  dataAiHint: string;
  shortDescription: string;
  originalDescription: string;
  keyIngredients: string;
  details: {
    composition: string;
    healthBenefits: string;
  };
};

export type ProductCategory = {
  id: 'vitamins' | 'stress-sleep' | 'immune-booster';
  name: string;
  description: string;
};

export const productCategories: ProductCategory[] = [
  {
    id: 'vitamins',
    name: 'Vitamins & Minerals',
    description: 'Essential nutrients to support your overall health and fill dietary gaps.',
  },
  {
    id: 'stress-sleep',
    name: 'Stress, Sleep & Mood',
    description: 'Natural formulas to help you manage stress, improve sleep quality, and balance your mood.',
  },
  {
    id: 'immune-booster',
    name: 'Immune Booster',
    description: 'Strengthen your body\'s natural defenses with our powerful immune-supporting supplements.',
  },
];

export const products: Product[] = [
  {
    id: 'prod-001',
    name: 'VitaBoost Daily',
    category: 'vitamins',
    image: 'https://picsum.photos/400/400',
    dataAiHint: 'vitamin bottle',
    shortDescription: 'A complete multivitamin for daily energy and vitality.',
    originalDescription: 'VitaBoost Daily is a standard multivitamin tablet that provides essential vitamins and minerals for overall health. It is designed for daily use.',
    keyIngredients: 'Vitamin C, Vitamin D3, B-Complex, Zinc',
    details: {
      composition: 'Each tablet contains Vitamin C (500mg), Vitamin D3 (1000 IU), B-Complex, and Zinc (15mg).',
      healthBenefits: 'Supports immune function, enhances energy levels, and promotes healthy bones and skin.',
    },
  },
  {
    id: 'prod-002',
    name: 'Iron Forte',
    category: 'vitamins',
    image: 'https://picsum.photos/400/400',
    dataAiHint: 'supplement capsules',
    shortDescription: 'High-potency iron supplement for healthy red blood cells.',
    originalDescription: 'Iron Forte provides a significant dose of iron to help combat iron deficiency and anemia. Gentle on the stomach.',
    keyIngredients: 'Ferrous Bisglycinate, Vitamin C, Folic Acid',
    details: {
      composition: 'Ferrous Bisglycinate (25mg), Vitamin C (60mg), Folic Acid (400mcg).',
      healthBenefits: 'Essential for red blood cell formation, reduces fatigue, and supports cognitive function.',
    },
  },
  {
    id: 'prod-003',
    name: 'CalmEase Formula',
    category: 'stress-sleep',
    image: 'https://picsum.photos/400/400',
    dataAiHint: 'herbal tea',
    shortDescription: 'A natural blend to soothe stress and anxiety.',
    originalDescription: 'CalmEase Formula is a herbal supplement that helps reduce feelings of stress and promotes a sense of calm during the day.',
    keyIngredients: 'Ashwagandha, L-Theanine, Chamomile',
    details: {
      composition: 'Ashwagandha Root Extract (300mg), L-Theanine (200mg), Chamomile Flower Extract (150mg).',
      healthBenefits: 'Reduces cortisol levels, promotes relaxation without drowsiness, and supports a positive mood.',
    },
  },
  {
    id: 'prod-004',
    name: 'Deep Sleep PM',
    category: 'stress-sleep',
    image: 'https://picsum.photos/400/400',
    dataAiHint: 'moon night',
    shortDescription: 'Promotes restful sleep and helps you wake up refreshed.',
    originalDescription: 'Deep Sleep PM is a sleep aid with natural ingredients. It helps you fall asleep faster and stay asleep longer.',
    keyIngredients: 'Melatonin, Valerian Root, Magnesium',
    details: {
      composition: 'Melatonin (5mg), Valerian Root Extract (400mg), Magnesium Glycinate (200mg).',
      healthBenefits: 'Regulates sleep-wake cycles, improves sleep quality, and supports muscle relaxation.',
    },
  },
  {
    id: 'prod-005',
    name: 'ImmunoGuard Plus',
    category: 'immune-booster',
    image: 'https://picsum.photos/400/400',
    dataAiHint: 'orange fruit',
    shortDescription: 'Potent formula to supercharge your immune system.',
    originalDescription: 'A powerful combination of vitamins and herbs to boost your immune response, especially during cold and flu season.',
    keyIngredients: 'Echinacea, Elderberry, Vitamin C, Zinc',
    details: {
      composition: 'Echinacea Extract (400mg), Elderberry Extract (300mg), Vitamin C (1000mg), Zinc (25mg).',
      healthBenefits: 'Strengthens immune defenses, provides antioxidant support, and may reduce the duration of colds.',
    },
  },
  {
    id: 'prod-006',
    name: 'Defense Shield',
    category: 'immune-booster',
    image: 'https://picsum.photos/400/400',
    dataAiHint: 'garlic herb',
    shortDescription: 'Daily support for a resilient immune system.',
    originalDescription: 'Defense Shield is designed for long-term immune maintenance. It combines traditional herbs with essential vitamins.',
    keyIngredients: 'Astragalus, Garlic Extract, Vitamin D3',
    details: {
      composition: 'Astragalus Root (500mg), Odorless Garlic Extract (200mg), Vitamin D3 (2000 IU).',
      healthBenefits: 'Adaptogenic immune support, promotes cardiovascular health, and crucial for immune cell function.',
    },
  },
];
