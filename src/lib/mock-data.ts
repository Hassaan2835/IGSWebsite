
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
    name: 'IGS-G GOLD',
    category: 'vitamins',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vjbf8wf/IMG-20250722-WA0020.png',
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
    id: 'prod-007',
    name: 'CAl-IGS',
    category: 'vitamins',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vj7vcae/IMG-20250722-WA0013.png',
    dataAiHint: 'chewable vitamins',
    shortDescription: 'A tasty, chewable multivitamin for growing kids.',
    originalDescription: 'These fun, animal-shaped chewable vitamins provide essential nutrients for a child’s healthy growth and development.',
    keyIngredients: 'Vitamin A, Vitamin C, Vitamin D3, Iron',
    details: {
      composition: 'Vitamins A, C, D3, E, B6, B12, Folic Acid, and Iron.',
      healthBenefits: 'Supports immune health, bone development, and overall wellness in children.',
    },
  },
  {
    id: 'prod-008',
    name: 'IGS-C',
    category: 'vitamins',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vjbf8wf/IMG-20250722-WA0025.png',
    dataAiHint: 'prenatal vitamins',
    shortDescription: 'Essential nutrition for expectant mothers and their babies.',
    originalDescription: 'A comprehensive prenatal vitamin that provides key nutrients for fetal development and maternal health.',
    keyIngredients: 'Folic Acid, DHA, Iron, Calcium',
    details: {
      composition: 'Folic Acid (800mcg), DHA (200mg), Iron (27mg), Calcium (200mg).',
      healthBenefits: 'Supports healthy brain and eye development in babies and helps prevent birth defects.',
    },
  },
  {
    id: 'prod-009',
    name: 'Vitamin C with Rose Hips',
    category: 'vitamins',
    image: 'https://picsum.photos/403/403',
    dataAiHint: 'vitamin c',
    shortDescription: 'Potent antioxidant support for a healthy immune system.',
    originalDescription: 'High-potency Vitamin C combined with rose hips for enhanced antioxidant protection and absorption.',
    keyIngredients: 'Vitamin C, Rose Hips',
    details: {
      composition: 'Vitamin C (1000mg), Rose Hips (25mg).',
      healthBenefits: 'Boosts the immune system, promotes healthy skin, and provides powerful antioxidant support.',
    },
  },
  {
    id: 'prod-010',
    name: 'B-Complex Energy Formula',
    category: 'vitamins',
    image: 'https://picsum.photos/404/404',
    dataAiHint: 'energy vitamins',
    shortDescription: 'A full spectrum of B-vitamins to support energy metabolism.',
    originalDescription: 'This formula includes all eight B-vitamins to help convert food into cellular energy and support nervous system health.',
    keyIngredients: 'Thiamin, Riboflavin, Niacin, Vitamin B6, Vitamin B12',
    details: {
      composition: 'Complete B-vitamin complex including B1, B2, B3, B5, B6, B7, B9, and B12.',
      healthBenefits: 'Enhances energy production, supports a healthy nervous system, and promotes red blood cell formation.',
    },
  },
  {
    id: 'prod-011',
    name: 'Vegan D3 + K2',
    category: 'vitamins',
    image: 'https://picsum.photos/405/405',
    dataAiHint: 'vegan vitamins',
    shortDescription: 'Plant-based vitamin D3 and K2 for bone and heart health.',
    originalDescription: 'A 100% vegan formula providing lichen-derived Vitamin D3 and fermented chickpea K2 for optimal calcium absorption.',
    keyIngredients: 'Vitamin D3 (from Lichen), Vitamin K2 (as MK-7)',
    details: {
      composition: 'Vitamin D3 (2000 IU), Vitamin K2 (100mcg).',
      healthBenefits: 'Directs calcium to bones, supports cardiovascular health, and boosts the immune system.',
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
    id: 'prod-012',
    name: 'Flex-Joint Glucosamine Chondroitin',
    category: 'joint-bone-health',
    image: 'https://picsum.photos/406/406',
    dataAiHint: 'joint supplement',
    shortDescription: 'Supports joint lubrication and cartilage health.',
    originalDescription: 'A powerful combination of glucosamine and chondroitin to help rebuild cartilage and lubricate joints for better mobility.',
    keyIngredients: 'Glucosamine Sulfate, Chondroitin Sulfate, MSM',
    details: {
      composition: 'Glucosamine Sulfate (1500mg), Chondroitin Sulfate (1200mg), MSM (1000mg).',
      healthBenefits: 'Reduces joint pain, improves flexibility, and supports the structural integrity of joints.',
    },
  },
  {
    id: 'prod-013',
    name: 'Turmeric Curcumin Complex',
    category: 'joint-bone-health',
    image: 'https://picsum.photos/407/407',
    dataAiHint: 'turmeric supplement',
    shortDescription: 'Natural anti-inflammatory for joint comfort.',
    originalDescription: 'A high-potency turmeric extract standardized for 95% curcuminoids, enhanced with BioPerine for superior absorption.',
    keyIngredients: 'Turmeric Curcumin, BioPerine (Black Pepper Extract)',
    details: {
      composition: 'Turmeric Root Extract (1500mg), BioPerine (10mg).',
      healthBenefits: 'Provides powerful anti-inflammatory benefits, relieves joint stiffness, and supports overall wellness.',
    },
  },
  {
    id: 'prod-014',
    name: 'Calcium Magnesium Zinc',
    category: 'joint-bone-health',
    image: 'https://picsum.photos/408/408',
    dataAiHint: 'mineral supplement',
    shortDescription: 'Essential minerals for strong bones and muscle function.',
    originalDescription: 'A balanced blend of three essential minerals to support bone health, nerve function, and muscle contraction.',
    keyIngredients: 'Calcium, Magnesium, Zinc',
    details: {
      composition: 'Calcium (1000mg), Magnesium (500mg), Zinc (25mg).',
      healthBenefits: 'Strengthens bones and teeth, supports muscle and nerve function, and boosts immune health.',
    },
  },
  {
    id: 'prod-015',
    name: 'Collagen Peptides',
    category: 'joint-bone-health',
    image: 'https://picsum.photos/409/409',
    dataAiHint: 'collagen powder',
    shortDescription: 'Supports healthy hair, skin, nails, and joints.',
    originalDescription: 'Hydrolyzed collagen peptides that are easily absorbed by the body to support connective tissues and promote a youthful appearance.',
    keyIngredients: 'Hydrolyzed Bovine Collagen Peptides',
    details: {
      composition: 'Type I & III Hydrolyzed Collagen Peptides (20g per serving).',
      healthBenefits: 'Improves skin elasticity, strengthens hair and nails, and supports joint and bone health.',
    },
  },
  {
    id: 'prod-016',
    name: 'Omega-3 Fish Oil',
    category: 'joint-bone-health',
    image: 'https://picsum.photos/410/410',
    dataAiHint: 'fish oil',
    shortDescription: 'Supports joint, heart, and brain health.',
    originalDescription: 'A high-purity fish oil providing essential EPA and DHA fatty acids to reduce inflammation and support overall health.',
    keyIngredients: 'EPA (Eicosapentaenoic Acid), DHA (Docosahexaenoic Acid)',
    details: {
      composition: '1200mg Fish Oil providing 432mg EPA and 288mg DHA.',
      healthBenefits: 'Reduces joint inflammation, supports cardiovascular function, and enhances cognitive health.',
    },
  },
  {
    id: 'prod-003',
    name: 'IGS-L',
    category: 'iron-deficiency',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vjbf8wf/IMG-20250722-WA0023.png',
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
    id: 'prod-017',
    name: 'Fer-IGS',
    category: 'iron-deficiency',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vjbf8wf/IMG-20250722-WA0027.png',
    dataAiHint: 'iron supplement',
    shortDescription: 'Whole food iron supplement with synergistic cofactors.',
    originalDescription: 'Formulated with whole foods like beets and oranges, this supplement builds blood without nausea or constipation.',
    keyIngredients: 'Iron, Vitamin C, Folate, Vitamin B12',
    details: {
      composition: 'Iron (26mg), Vitamin C (15mg), Folate (400mcg), Vitamin B12 (30mcg).',
      healthBenefits: 'Restores iron levels, improves energy, and supports healthy red blood cell production.',
    },
  },
  {
    id: 'prod-018',
    name: 'Heme-IGS',
    category: 'iron-deficiency',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vjbbt7a/IMG-20250722-WA0016.png',
    dataAiHint: 'liquid supplement',
    shortDescription: 'A great-tasting liquid iron formula for easy absorption.',
    originalDescription: 'A plant-based liquid iron supplement that is gentle on the stomach and easy to take, with a pleasant fruit flavor.',
    keyIngredients: 'Ferrous Gluconate, B-Vitamins, Herbal Extracts',
    details: {
      composition: 'Iron (as Ferrous Gluconate), Vitamins B1, B2, B6, B12, and a blend of herbal extracts.',
      healthBenefits: 'Helps fight fatigue and improve energy levels, easy to digest, and highly bioavailable.',
    },
  },
  {
    id: 'prod-004',
    name: 'IGS-ZYME',
    category: 'colic-pain',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vjbbt7a/IMG-20250722-WA0017.png',
    dataAiHint: 'product bottle',
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
];
