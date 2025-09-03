
export type ProductCategory = {
  id: 'vitamins' | 'joint-bone-health' | 'iron-deficiency' | 'colic-pain' | 'weight-loss-liver' | 'memory-booster' | 'immune-booster';
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
    id: 'immune-booster',
    name: 'Immune Booster',
    description: 'Boost your immune system and stay healthy.',
  },
  {
    id: 'memory-booster',
    name: 'Memory Booster',
    description: 'Enhance cognitive function and memory.',
  },
];

export const products: Product[] = [
  // Vitamins
  {
    id: 'prod-vit-001',
    name: 'Ig-vit',
    category: 'vitamins',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vn8uky8/IMG-20250722-WA0025-removebg-preview.png',
    dataAiHint: 'vitamin syrup',
    shortDescription: 'A comprehensive multivitamin syrup for all ages.',
    originalDescription: 'My-Vita Syrup provides a balanced blend of essential vitamins to support daily health, energy, and well-being.',
    keyIngredients: 'Vitamin A, Vitamin C, Vitamin D, B-Complex',
    details: {
      composition: 'Each 5ml contains a full spectrum of essential vitamins.',
      healthBenefits: 'Supports immune function, enhances energy levels, and promotes overall vitality.',
    },
  },
  {
    id: 'prod-vit-002',
    name: 'My-vita',
    category: 'vitamins',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vn8uky8/IMG-20250722-WA0013-removebg-preview.png',
    dataAiHint: 'vitamin supplement',
    shortDescription: 'An advanced supplemental vitamin syrup.',
    originalDescription: 'A superior formulation of My-Vita syrup with added minerals for enhanced nutritional support.',
    keyIngredients: 'Multivitamins, Zinc, Iron',
    details: {
      composition: 'Enhanced multivitamin and mineral complex in a syrup base.',
      healthBenefits: 'Boosts immunity, supports growth, and aids in recovery.',
    },
  },
  {
    id: 'prod-vit-003',
    name: 'My-vita Sup',
    category: 'vitamins',
    image: 'https://picsum.photos/402/402',
    dataAiHint: 'vitamin tablets',
    shortDescription: 'A daily multivitamin tablet for adults.',
    originalDescription: 'Ig-Vit tablets are designed to meet the daily nutritional needs of adults, supporting a healthy and active lifestyle.',
    keyIngredients: 'Vitamin C, Vitamin E, B-Vitamins, Selenium',
    details: {
      composition: 'One tablet provides 100% RDA of most essential vitamins and minerals.',
      healthBenefits: 'Promotes energy, supports heart health, and provides antioxidant protection.',
    },
  },
  {
    id: 'prod-vit-004',
    name: 'G-Austin G-10',
    category: 'vitamins',
    image: 'https://picsum.photos/403/403',
    dataAiHint: 'vitamin drops',
    shortDescription: 'Easy-to-administer multivitamin drops for infants.',
    originalDescription: 'Specially formulated drops to provide essential vitamins for the healthy growth and development of infants.',
    keyIngredients: 'Vitamin A, Vitamin C, Vitamin D',
    details: {
      composition: 'Concentrated vitamin drops for easy dosage.',
      healthBenefits: 'Supports bone development, immune function, and overall growth in infants.',
    },
  },
  {
    id: 'prod-vit-005',
    name: 'Ieco-10',
    category: 'vitamins',
    image: 'https://picsum.photos/404/404',
    dataAiHint: 'softgel capsules',
    shortDescription: 'A potent soft gel antioxidant formula.',
    originalDescription: 'G-Austin G-10 provides a powerful blend of antioxidants in an easy-to-swallow soft gel capsule.',
    keyIngredients: 'Ginseng, Green Tea Extract, Grape Seed Extract',
    details: {
      composition: 'Soft gel capsule containing a blend of 10 powerful antioxidants.',
      healthBenefits: 'Fights free radicals, boosts energy, and supports cardiovascular health.',
    },
  },
  {
    id: 'prod-vit-006',
    name: 'multivit drops',
    category: 'vitamins',
    image: 'https://picsum.photos/405/405',
    dataAiHint: 'coenzyme q10',
    shortDescription: 'Coenzyme Q10 tablets for cellular energy.',
    originalDescription: 'Ieco-10 contains Coenzyme Q10, a vital nutrient for cellular energy production and heart health.',
    keyIngredients: 'Coenzyme Q10 (CoQ10)',
    details: {
      composition: 'Each tablet contains 100mg of Coenzyme Q10.',
      healthBenefits: 'Supports cardiovascular health, enhances energy production, and provides antioxidant benefits.',
    },
  },

  // Joint and Bone Health
  {
    id: 'prod-jbh-001',
    name: 'Ig-cal Plus',
    category: 'joint-bone-health',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vn8uky8/IMG-20250722-WA0020-removebg-preview.png',
    dataAiHint: 'calcium drops',
    shortDescription: 'Calcium and Vitamin D drops for all ages.',
    originalDescription: 'Ig-cal provides essential calcium and Vitamin D for building and maintaining strong bones and teeth.',
    keyIngredients: 'Calcium, Vitamin D3',
    details: {
      composition: 'Each serving contains elemental Calcium and Vitamin D3.',
      healthBenefits: 'Crucial for bone formation, density, and overall skeletal health.',
    },
  },
  {
    id: 'prod-jbh-002',
    name: 'Naturacal Sachet',
    category: 'joint-bone-health',
    image: 'https://picsum.photos/407/407',
    dataAiHint: 'health sachet',
    shortDescription: 'Advanced calcium formula in a convenient sachet.',
    originalDescription: 'An enhanced calcium supplement with cofactors for maximum absorption and bone support.',
    keyIngredients: 'Calcium Citrate Malate, Vitamin D3, Magnesium, Zinc',
    details: {
      composition: 'Sachet containing a blend of essential minerals for bone health.',
      healthBenefits: 'Promotes bone density, supports joint health, and reduces the risk of osteoporosis.',
    },
  },
  {
    id: 'prod-jbh-003',
    name: 'C-Cell',
    category: 'joint-bone-health',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vn8uky8/final.png',
    dataAiHint: 'natural supplement',
    shortDescription: 'A natural approach to joint and muscle comfort.',
    originalDescription: 'Naturalaf contains a blend of natural extracts known for their anti-inflammatory and analgesic properties.',
    keyIngredients: 'Boswellia Serrata, Curcumin',
    details: {
      composition: 'Herbal extracts in a convenient powder sachet.',
      healthBenefits: 'Helps reduce joint pain and inflammation, improving mobility and comfort.',
    },
  },
  {
    id: 'prod-jbh-004',
    name: 'Glupik Plus',
    category: 'joint-bone-health',
    image: 'https://picsum.photos/409/409',
    dataAiHint: 'health syrup',
    shortDescription: 'A syrup for comprehensive cell and joint support.',
    originalDescription: 'C-Cell syrup is formulated to support cartilage health and joint flexibility.',
    keyIngredients: 'Collagen Peptide, Glucosamine, Vitamin C',
    details: {
      composition: 'A liquid formula for easy absorption and joint support.',
      healthBenefits: 'Supports cartilage repair, reduces joint stiffness, and improves flexibility.',
    },
  },
  {
    id: 'prod-jbh-005',
    name: 'Ig-cal Sup',
    category: 'joint-bone-health',
    image: 'https://picsum.photos/410/410',
    dataAiHint: 'joint tablets',
    shortDescription: 'Powerful tablet for complete joint care.',
    originalDescription: 'Clupik Plus offers a multi-action approach to manage joint pain and support long-term joint health.',
    keyIngredients: 'Glucosamine, MSM, Diacerein',
    details: {
      composition: 'A combination tablet for comprehensive joint care.',
      healthBenefits: 'Reduces pain and inflammation, protects cartilage, and improves joint function.',
    },
  },
  {
    id: 'prod-jbh-006',
    name: 'Quick-D',
    category: 'joint-bone-health',
    image: 'https://picsum.photos/411/411',
    dataAiHint: 'instant relief',
    shortDescription: 'Quick-dissolving sachet for bone and joint health.',
    originalDescription: 'A convenient and fast-acting formula to support calcium levels and bone strength.',
    keyIngredients: 'Calcium, Vitamin D3, Vitamin K2-7',
    details: {
      composition: 'Instantly dissolving powder for quick absorption.',
      healthBenefits: 'Provides rapid support for bone health and helps in maintaining calcium balance.',
    },
  },

  // Iron Deficiency
  {
    id: 'prod-id-001',
    name: 'Ig-Ferr Syp',
    category: 'iron-deficiency',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vjbf8wf/IMG-20250722-WA0023.png',
    dataAiHint: 'iron syrup',
    shortDescription: 'A palatable iron syrup for treating anemia.',
    originalDescription: 'Ig-Ferr Syrup is a gentle iron supplement that helps combat iron deficiency without causing stomach upset.',
    keyIngredients: 'Ferric Ammonium Citrate, Folic Acid, Vitamin B12',
    details: {
      composition: 'Available in 120ml and 200ml bottles.',
      healthBenefits: 'Effectively treats iron-deficiency anemia, boosts energy levels, and supports red blood cell formation.',
    },
  },
  {
    id: 'prod-id-002',
    name: 'Optifer Syp',
    category: 'iron-deficiency',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vjbf8wf/IMG-20250722-WA0027.png',
    dataAiHint: 'optimal iron',
    shortDescription: 'An optimal iron therapy syrup.',
    originalDescription: 'Optifer provides a bioavailable form of iron that is well-tolerated and effective in raising hemoglobin levels.',
    keyIngredients: 'Iron (as Carbonyl Iron), Folic Acid, Zinc',
    details: {
      composition: 'A 200ml syrup for complete iron therapy.',
      healthBenefits: 'Improves iron levels, reduces fatigue, and supports overall health during deficiency.',
    },
  },
  {
    id: 'prod-id-003',
    name: 'Cilof - A Drops',
    category: 'iron-deficiency',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vjbbt7a/IMG-20250722-WA0016.png',
    dataAiHint: 'iron drops',
    shortDescription: 'Iron and vitamin drops for infants.',
    originalDescription: 'Cifor-A drops are designed to meet the iron and vitamin A needs of growing infants, preventing deficiencies.',
    keyIngredients: 'Iron, Vitamin A, Folic Acid',
    details: {
      composition: 'A 15ml dropper bottle for precise dosing.',
      healthBenefits: 'Prevents iron-deficiency anemia and supports healthy vision and growth in infants.',
    },
  },

  // Colic Pain
  {
    id: 'prod-cp-001',
    name: 'Dontive-5',
    category: 'colic-pain',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vjbbt7a/IMG-20250722-WA0017.png',
    dataAiHint: 'infant relief',
    shortDescription: 'Gentle drops for infant colic and griping pain.',
    originalDescription: 'Dontive-5 provides safe and effective relief from colic pain, gas, and stomach discomfort in infants and children.',
    keyIngredients: 'Simethicone, Dill Oil, Fennel Oil',
    details: {
      composition: 'Available in 12ml and 30ml bottles.',
      healthBenefits: 'Quickly relieves symptoms of colic, soothes the baby, and aids digestion.',
    },
  },

  // Weight Loss-Liver
  {
    id: 'prod-wll-001',
    name: 'UltraCare Plus',
    category: 'weight-loss-liver',
    image: 'https://uploads.onecompiler.io/43vh7ked9/43vjbf8wf/IMG-20250722-WA0035.png',
    dataAiHint: 'liver support',
    shortDescription: 'Comprehensive support for liver health and metabolism.',
    originalDescription: 'Ultra Care Plus is a blend of herbs and nutrients that support liver detoxification and promote a healthy metabolism, aiding in weight management.',
    keyIngredients: 'Milk Thistle, Silymarin, Dandelion Root',
    details: {
      composition: 'A pack of 30 tablets for a one-month supply.',
      healthBenefits: 'Protects liver cells, enhances detoxification processes, and supports healthy weight.',
    },
  },
  // Immune Booster
  {
    id: 'prod-ib-001',
    name: 'Justin Syp (120ml)',
    category: 'immune-booster',
    image: 'https://picsum.photos/412/412',
    dataAiHint: 'immune syrup',
    shortDescription: 'A natural syrup to boost your immune system.',
    originalDescription: 'Justim Syrup is a powerful blend of herbs and nutrients designed to strengthen your immune response and protect against illness.',
    keyIngredients: 'Echinacea, Vitamin C, Zinc',
    details: {
      composition: 'A 120ml syrup with a blend of immune-boosting ingredients.',
      healthBenefits: 'Enhances immune function, reduces the duration of colds, and provides antioxidant support.',
    },
  },
];
