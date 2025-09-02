export type ProductCategory = {
  id: 'vitamins' | 'joint-bone-health' | 'iron-deficiency' | 'colic-pain' | 'weight-loss-liver' | 'memory-booster';
  name: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  category: ProductCategory['id'];
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

export const productCategories: ProductCategory[] = [
  {
    id: 'vitamins',
    name: 'Vitamins',
    description: 'Essential nutrients to support your overall health.',
  },
  {
    id: 'joint-bone-health',
    name: 'Joint & Bone Health',
    description: 'Support for strong bones and flexible joints.',
  },
  {
    id: 'iron-deficiency',
    name: 'Iron Deficiency',
    description: 'Formulas to combat iron deficiency and boost energy.',
  },
  {
    id: 'colic-pain',
    name: 'Colic Pain',
    description: 'Gentle solutions for relieving colic pain in infants.',
  },
  {
    id: 'weight-loss-liver',
    name: 'Weight Loss-Liver',
    description: 'Support for healthy weight management and liver function.',
  },
  {
    id: 'memory-booster',
    name: 'Memory Booster',
    description: 'Enhance cognitive function and memory.',
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
    name: 'Osteo-Strength',
    category: 'joint-bone-health',
    image: 'https://picsum.photos/400/400',
    dataAiHint: 'strong bones',
    shortDescription: 'Comprehensive support for bone density and joint flexibility.',
    originalDescription: 'Osteo-Strength combines calcium with essential co-factors to ensure optimal bone health and support for aging joints.',
    keyIngredients: 'Calcium Citrate, Vitamin K2, Magnesium, Glucosamine',
    details: {
      composition: 'Calcium Citrate (1000mg), Vitamin K2 (100mcg), Magnesium (400mg), Glucosamine (1500mg).',
      healthBenefits: 'Maintains strong bones, supports joint cartilage, and improves mobility.',
    },
  },
  {
    id: 'prod-003',
    name: 'Iron-Up',
    category: 'iron-deficiency',
    image: 'https://picsum.photos/400/400',
    dataAiHint: 'energy boost',
    shortDescription: 'Gentle and effective iron supplement to fight fatigue.',
    originalDescription: 'A non-constipating iron formula designed for maximum absorption to help restore healthy iron levels and improve energy.',
    keyIngredients: 'Iron Bisglycinate, Vitamin C, Beet Root',
    details: {
      composition: 'Iron Bisglycinate (25mg), Vitamin C (100mg), Beet Root Powder (50mg).',
      healthBenefits: 'Combats iron-deficiency anemia, reduces tiredness, and supports red blood cell production.',
    },
  },
  {
    id: 'prod-004',
    name: 'Colic-Calm',
    category: 'colic-pain',
    image: 'https://picsum.photos/400/400',
    dataAiHint: 'happy baby',
    shortDescription: 'Natural relief for infant colic, gas, and upset stomach.',
    originalDescription: 'A safe and gentle gripe water alternative made with natural herbal ingredients to soothe an infant\'s digestive system.',
    keyIngredients: 'Chamomile, Fennel, Ginger',
    details: {
      composition: 'Proprietary blend of Chamomile, Fennel, and Ginger extracts.',
      healthBenefits: 'Provides fast-acting relief from colic and gas, calms fussiness, and supports gentle digestion.',
    },
  },
  {
    id: 'prod-005',
    name: 'Liva-Trim',
    category: 'weight-loss-liver',
    image: 'https://picsum.photos/400/400',
    dataAiHint: 'healthy liver',
    shortDescription: 'Dual-action formula for weight management and liver detox.',
    originalDescription: 'Liva-Trim supports the body’s natural fat-burning processes while also promoting liver health and detoxification pathways.',
    keyIngredients: 'Milk Thistle, Green Tea Extract, Turmeric',
    details: {
      composition: 'Milk Thistle (250mg), Green Tea Extract (500mg), Turmeric Root (150mg).',
      healthBenefits: 'Supports metabolic function, protects liver cells from damage, and aids in detoxification.',
    },
  },
  {
    id: 'prod-006',
    name: 'Cogni-Sharp',
    category: 'memory-booster',
    image: 'https://picsum.photos/400/400',
    dataAiHint: 'sharp mind',
    shortDescription: 'Enhances focus, clarity, and memory recall.',
    originalDescription: 'A nootropic formula with clinically studied ingredients to support brain health, improve concentration, and boost long-term memory.',
    keyIngredients: 'Bacopa Monnieri, Ginkgo Biloba, Phosphatidylserine',
    details: {
      composition: 'Bacopa Monnieri (300mg), Ginkgo Biloba (120mg), Phosphatidylserine (100mg).',
      healthBenefits: 'Improves memory and cognitive performance, supports brain circulation, and protects against age-related cognitive decline.',
    },
  },
];
