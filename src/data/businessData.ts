import {
  BusinessInfo,
  ServiceCategory,
  PortfolioItem,
  ProcessStep,
  FAQItem,
  VerifiedReview,
  WhyChoosePoint,
} from '../types';

export const businessInfo: BusinessInfo = {
  name: 'Silaikalam Statue Makers',
  tagline: 'Custom Statues. Crafted to Make an Impression.',
  subTagline:
    'Custom statues, sculptures and fibreglass creations handcrafted in Coimbatore, Tamil Nadu.',
  experienceYears: 14,
  location: {
    village: 'Kalaiyanur',
    road: 'Thadagam / Anaikatti Road',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    country: 'India',
    pincode: '641108',
    fullAddress:
      'Kalaiyanur, Thadagam / Anaikatti Road, Nanjundapuram, Coimbatore, Tamil Nadu 641108, India',
    coordinates: {
      latitude: 11.0711058,
      longitude: 76.8769013,
    },
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=11.0711058,76.8769013',
  },
  contacts: {
    primary: {
      name: 'Arun Karthik',
      title: 'Owner & Master Craftsman',
      phone: '+91 70100 13920',
      phoneRaw: '+917010013920',
      whatsapp: '917010013920',
    },
    secondary: {
      name: 'Priya',
      phone: '+91 78100 73920',
      phoneRaw: '+917810073920',
      whatsapp: '917810073920',
    },
  },
  social: {
    instagram: 'https://www.instagram.com/silaikalam_statue_makers/',
    facebook: 'https://www.facebook.com/people/SilaiKalam-Statue-makers/61583848145871/',
    justdial:
      'https://www.justdial.com/Coimbatore/Silaikalam-Statue-Maker-Kalayanur/0422PX422-X422-260312193011-L2R7_BZDET',
  },
  publicListing: {
    rating: 4.9,
    reviewCount: 239,
    hours: '6:00 AM – 10:00 PM Daily',
    platformName: 'Justdial Verified Business Listing',
    url: 'https://www.justdial.com/Coimbatore/Silaikalam-Statue-Maker-Kalayanur/0422PX422-X422-260312193011-L2R7_BZDET',
  },
  primaryMaterial:
    'Handcrafted Fibreglass (FRP). Material options vary depending on client requirement, dimensions and site conditions.',
};

export const trustPoints = [
  {
    value: '14+ Years',
    label: 'Craftsmanship Experience',
    description: 'Over a decade dedicated to precision sculpturing & statue creation in Coimbatore.',
  },
  {
    value: 'Custom Made',
    label: 'Built to Your Requirement',
    description: 'Bespoke designs built from client concepts, photos, sketches or dimensions.',
  },
  {
    value: 'Fibreglass / FRP',
    label: 'Durable Sculpture Solutions',
    description: 'Weather-resistant, high-strength fiber compositions built for indoor & outdoor endurance.',
  },
  {
    value: 'Coimbatore',
    label: 'Tamil Nadu Based',
    description: 'Workshop located in Kalaiyanur on Anaikatti Road, serving Tamil Nadu & beyond.',
  },
];

export const services: ServiceCategory[] = [
  {
    id: 'god-traditional',
    number: '01',
    title: 'God & Devotional Statues',
    shortDescription:
      'Custom Hindu deity idols, temple decorative sculptures, devotional figures, and sacred sanctum installations.',
    fullDescription:
      'Detailed craftsmanship adhering to traditional facial expressions, mudras, ornamentation, and iconographic balance. Available for temple mandapams, ashrams, prayer halls, and private devotional spaces.',
    highlights: [
      'Hindu God & Goddess statues',
      'Devotional idols & temple sculptures',
      'Traditional facial detailing & ornamentation',
      'Indoor pooja room & outdoor temple installations',
    ],
    image: '/images/devotional-idol.jpg',
    materialsNote: 'FRP (Fibreglass) and mixed media based on project requirement.',
  },
  {
    id: 'human-character',
    number: '02',
    title: 'Human & Character Statues',
    shortDescription:
      'Bespoke human portrait sculptures, historical leaders, cultural figures, and life-size character statues.',
    fullDescription:
      'Engineered with anatomically realistic proportions, authentic posture, and handcrafted facial likeness from photographic references.',
    highlights: [
      'Custom portrait sculptures from photographs',
      'Life-size human figures & dignitaries',
      'Character sculptures & conceptual statues',
      'Memorial, institutional & private displays',
    ],
    image: '/images/human-portrait.jpg',
    materialsNote: 'Material varies by project specifications.',
  },
  {
    id: 'animal-wildlife',
    number: '03',
    title: 'Animal & Wildlife Statues',
    shortDescription:
      'Lifelike wildlife and domestic animal statues including Kangeyam bulls, elephants, deer, and dogs.',
    fullDescription:
      'Specialized in authentic muscular structure, coat texture, and natural postures. Popular for landscape gardens, farmhouses, resorts, and thematic gateways.',
    highlights: [
      'Kangeyam bulls & traditional livestock sets',
      'Deer, wildlife figures & forest theme sets',
      'Custom dog & pet memorial statues',
      'Life-size scales with weather-resistant exterior coats',
    ],
    image: '/images/wildlife-deer.jpg',
    materialsNote: 'Durable FRP / Fibreglass with all-weather automotive finish.',
  },
  {
    id: 'commercial-theme',
    number: '04',
    title: 'Commercial & Theme Décor',
    shortDescription:
      'Selfie points, branded landmark statues, restaurant theme sculptures, resort landscaping, and café décor.',
    fullDescription:
      'Designed to attract footfall, elevate customer engagement, and create memorable photo opportunities for commercial hospitality and retail destinations.',
    highlights: [
      'Interactive selfie points & photo landmarks',
      'Restaurant, café & hotel themed sculptures',
      'Resort entrance installations & lawn focal points',
      'Farmhouse décor & commercial brand props',
    ],
    image: '/images/commercial-decor.jpg',
    materialsNote: 'Reinforced fibreglass composites engineered for public interaction.',
  },
  {
    id: 'wall-murals',
    number: '05',
    title: 'Wall Murals & Decorative Pieces',
    shortDescription:
      'High-relief decorative murals, traditional cultural panels, architectural friezes, and textured wall art.',
    fullDescription:
      'Custom designed wall installations crafted to transform plain interior and exterior facades into rich cultural and artistic centerpieces.',
    highlights: [
      'God & spiritual relief wall murals',
      'Nature & heritage decorative panels',
      'Lightweight FRP backing for secure wall mounting',
      'Custom finishes: antique bronze, sandstone, or full color',
    ],
    image: '/images/wall-mural.jpg',
    materialsNote: 'Lightweight fiber composite panels with architectural grade anchors.',
  },
  {
    id: 'traditional-installations',
    number: '06',
    title: 'Traditional & Cultural Installations',
    shortDescription:
      'Authentic Maattu Vandi (bullock cart) installations with life-sized bulls, village heritage sets, and festive displays.',
    fullDescription:
      'A specialty of Silaikalam. Handcrafted life-size Kangeyam bullock cart sets available for permanent purchase or temporary event rental across Tamil Nadu.',
    highlights: [
      'Traditional Maattu Vandi (bullock cart) full sets',
      'Realistic Kangeyam bull figures with traditional garlands',
      'Available for sale and event/cultural rental',
      'Ideal for resorts, heritage hotels, weddings & cultural centers',
    ],
    image: '/images/silaikalam-traditional-bulls.jpg',
    materialsNote: 'Handcrafted fibreglass with authentic timber and metal accents.',
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'p-1',
    title: 'Traditional Maattu Vandi & Kangeyam Bulls',
    category: 'traditional-heritage',
    categoryLabel: 'Traditional & Cultural',
    image: '/images/silaikalam-traditional-bulls.jpg',
    description:
      'Life-size Kangeyam bulls paired with a traditional Tamil Nadu bullock cart (Maattu Vandi). Handcrafted with realistic musculature, traditional painted horn caps, and ceremonial garlands.',
    material: 'Fibreglass (FRP) with timber structural elements',
    isRealWork: true,
    locationTag: 'Silaikalam Workshop, Kalaiyanur',
    sizeTag: 'Life-size complete installation',
  },
  {
    id: 'p-2',
    title: 'Traditional Devotional Idol Detailing',
    category: 'god-traditional',
    categoryLabel: 'God & Devotional',
    image: '/images/devotional-idol.jpg',
    description:
      'Detailed craftsmanship adhering to traditional facial expressions, traditional crowns, and ornate temple jewellery aesthetics.',
    material: 'Durable Fibreglass with antique stone finish',
    isRealWork: false, // Category showcase reference
    sizeTag: 'Custom dimensions available',
  },
  {
    id: 'p-3',
    title: 'Serene Meditative Buddha Sculpture',
    category: 'god-traditional',
    categoryLabel: 'God & Devotional',
    image: '/images/buddha-sculpture.jpg',
    description:
      'Smooth, contemplative Buddha statue featuring balanced facial proportions, designed for garden tranquility, wellness resorts, and prayer niches.',
    material: 'Weatherproof FRP composite',
    isRealWork: false,
    sizeTag: 'Indoor & outdoor scale',
  },
  {
    id: 'p-4',
    title: 'Life-Size Kangeyam Bull Pair',
    category: 'animal-wildlife',
    categoryLabel: 'Animal & Wildlife',
    image: '/images/silaikalam-traditional-bulls.jpg',
    description:
      'Sculpted white Kangeyam bull pair showcasing native Tamil livestock pride. Built for outdoor farmhouses, heritage entrances, and cultural exhibitions.',
    material: 'Reinforced FRP (Handcrafted)',
    isRealWork: true,
    locationTag: 'Coimbatore, Tamil Nadu',
    sizeTag: 'Full life-size',
  },
  {
    id: 'p-5',
    title: 'Wildlife Forest Deer Sculptures',
    category: 'animal-wildlife',
    categoryLabel: 'Animal & Wildlife',
    image: '/images/wildlife-deer.jpg',
    description:
      'Elegant spotted deer figures with natural antler curves and alert stance, suitable for lawn landscaping and resort grounds.',
    material: 'Hand-laminated Fibreglass',
    isRealWork: false,
    sizeTag: 'Life-size & bespoke heights',
  },
  {
    id: 'p-6',
    title: 'Ornamental Elephant Figure',
    category: 'animal-wildlife',
    categoryLabel: 'Animal & Wildlife',
    image: '/images/elephant-statue.jpg',
    description:
      'Majestic elephant figure with textured hide and ceremonial motifs, popular as entryway gate sentinels for venues and estates.',
    material: 'All-weather FRP',
    isRealWork: false,
    sizeTag: 'Medium to large outdoor scale',
  },
  {
    id: 'p-7',
    title: 'Custom Human Portrait & Character Statues',
    category: 'human-character',
    categoryLabel: 'Human & Character',
    image: '/images/human-portrait.jpg',
    description:
      'Bespoke human portraiture and character figures created from customer photo references with accurate facial likeness and costume folds.',
    material: 'Material varies by project',
    isRealWork: false,
    sizeTag: 'Custom heights up to life-size',
  },
  {
    id: 'p-8',
    title: 'Commercial Selfie Point & Theme Installations',
    category: 'commercial-decor',
    categoryLabel: 'Commercial & Décor',
    image: '/images/commercial-decor.jpg',
    description:
      'Impactful decorative centerpieces designed for restaurants, cafés, shopping complexes, and tourism selfie spots to maximize visitor engagement.',
    material: 'High-durability FRP with automotive coating',
    isRealWork: false,
    sizeTag: 'Custom architectural scale',
  },
  {
    id: 'p-9',
    title: 'Architectural Relief Wall Mural',
    category: 'murals',
    categoryLabel: 'Wall Murals',
    image: '/images/wall-mural.jpg',
    description:
      'Multi-dimensional relief wall art panel adding artistic depth and heritage character to commercial lobbies and residential feature walls.',
    material: 'Lightweight composite panel',
    isRealWork: false,
    sizeTag: 'Built to wall dimensions',
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Tell Us Your Idea',
    description:
      'Share your concept, photograph reference, sketch, or requirement. Outline what you envision, where it will stand, and your approximate required height.',
    details: [
      'Reference photograph or drawing',
      'Statue type (deity, animal, portrait, commercial)',
      'Approximate height & dimension',
      'Indoor or outdoor placement',
    ],
  },
  {
    number: '02',
    title: 'Discuss & Plan',
    description:
      'Direct consultation with Arun Karthik. We review design feasibility, proportions, material options, reinforcement structure, and provide a clear quotation.',
    details: [
      'Feasibility and structural review',
      'FRP / composite material recommendation',
      'Timeline & quotation review',
      'Sale or rental arrangement (for select items)',
    ],
  },
  {
    number: '03',
    title: 'Sculpture Development',
    description:
      'Our craftsmen shape the core form, mould, and structure. Proportions and anatomy are sculpted according to the agreed design specifications.',
    details: [
      'Precision framework & armature creation',
      'Sculptural contouring & feature detailing',
      'Fibreglass (FRP) lamination & curing',
      'Structural reinforcement for outdoor stability',
    ],
  },
  {
    number: '04',
    title: 'Finishing & Painting',
    description:
      'Surface sanding, fine detailing, and painting are completed using weather-durable finishes suited for the statue’s intended environment.',
    details: [
      'Surface smoothing & hand chiseling',
      'Fine texture & ornamental detailing',
      'Primer coat & multi-stage paint application',
      'Protective UV and weather sealants',
    ],
  },
  {
    number: '05',
    title: 'Delivery / Installation',
    description:
      'Safe packing and coordinated delivery to your site. On-site placement or mounting is coordinated depending on project requirements.',
    details: [
      'Secure protective crating/packing',
      'Dispatch from Coimbatore workshop',
      'Coordinated transport across Tamil Nadu & beyond',
      'Installation guidance or on-site placement',
    ],
  },
];

export const whyChoosePoints: WhyChoosePoint[] = [
  {
    title: '14+ Years of Sculpture Experience',
    description:
      'Over fourteen years of hands-on workshop experience crafting durable statues, giving our team deep knowledge of form, balance, and material behavior.',
    iconName: 'Award',
  },
  {
    title: 'Custom-Built to Your Specification',
    description:
      'Every project is made to order. We do not force catalog items; we build based on your photos, references, and exact height needs.',
    iconName: 'PencilRuler',
  },
  {
    title: 'Handcrafted Detailing & Proportion',
    description:
      'Sculptures are physically shaped and hand-finished by artisan craftsmen, ensuring authentic facial expressions, muscular lines, and sharp contours.',
    iconName: 'Sparkles',
  },
  {
    title: 'Fibreglass / FRP Expertise',
    description:
      'FRP fiber statues provide exceptional weather resistance, high impact strength, lightweight handling compared to stone, and long-lasting paint retention.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Traditional & Contemporary Styles',
    description:
      'Equally capable in classical South Indian devotional sculpting, traditional Tamil cultural sets (like Maattu Vandi), and modern commercial decor.',
    iconName: 'Layers',
  },
  {
    title: 'Direct Customer Consultation',
    description:
      'Speak directly with the business owner, Arun Karthik. Transparent communication, realistic advice, and direct updates throughout execution.',
    iconName: 'PhoneCall',
  },
];

export const verifiedReviews: VerifiedReview[] = [
  {
    author: 'S Priya',
    date: 'Verified Review (Justdial Listing)',
    text: 'Best place to buy real look fiber made animal statues. Best place who manufacturing statues near me in Coimbatore. Here more collections are there big size to small size human and animal sculptures exactly real proportion. Hats off to their art works. They are doing selfie statues and concept statues too. I strongly recommend Silaikalam statue makers for indoor and outdoor statues. Buddha statues are awesome face.',
    rating: 5.0,
    platform: 'Justdial Public Review',
  },
  {
    author: 'Sundar Tamizhini',
    date: 'Verified Review (Justdial Listing)',
    text: 'வெரி நைஸ் வெரி குட் வெரி பியூட்டிபுல் ஆர்ட் (Very nice, very good, very beautiful art work). Excellent craftsmanship and realistic finishing.',
    rating: 5.0,
    platform: 'Justdial Public Review',
  },
  {
    author: 'Jayashree Ranganath',
    date: 'Verified Review (Justdial Listing)',
    text: 'Wonderful statue. The detailing and finish matched our requirements cleanly.',
    rating: 5.0,
    platform: 'Justdial Public Review',
  },
];

export const faqs: FAQItem[] = [
  {
    question: 'Can I order a completely custom statue from a photograph?',
    answer:
      'Yes. Silaikalam specializes in custom-made sculptures. You can share reference photos, dimensions, and placement details via WhatsApp or through our quote form to initiate the planning.',
  },
  {
    question: 'What materials do you work with?',
    answer:
      'Durable handcrafted fibreglass (FRP / fiber) is the primary material used for most of our work because of its weather resistance, strength, and lightweight versatility. Material selection depends on the individual project.',
  },
  {
    question: 'Can you make large or life-size statues?',
    answer:
      'Yes. We regularly build life-size animal statues (such as Kangeyam bulls, deer, and dogs), life-size human figures, and large-format commercial or temple installations. Scale and internal reinforcement are engineered per project.',
  },
  {
    question: 'Do you create Hindu devotional and temple statues?',
    answer:
      'Yes. We create Hindu deity sculptures, devotional idols, and sacred wall murals adhering to traditional proportions, ornamentation, and iconographic details.',
  },
  {
    question: 'Are your sculptures suitable for outdoor installation?',
    answer:
      'Yes. Fibreglass (FRP) statues finished with quality outdoor primer and automotive-grade paints withstand sunlight, rain, and temperature variations without chipping or rotting like unsealed plaster or clay.',
  },
  {
    question: 'Are statues available for rental as well as sale?',
    answer:
      'Yes, select cultural and thematic pieces—such as our traditional Maattu Vandi (bullock cart) sets and event figures—are available for rental for weddings, exhibitions, and corporate functions, as well as for direct purchase.',
  },
  {
    question: 'Do you deliver outside Coimbatore?',
    answer:
      'Yes. While our workshop is in Kalaiyanur, Coimbatore, we coordinate transportation and dispatch across Tamil Nadu (including Madurai, Salem, Dindigul, Pollachi, Chennai) and neighboring regions.',
  },
  {
    question: 'How do I share reference images and get an estimated cost?',
    answer:
      'You can submit our quotation form online or message Arun Karthik directly on WhatsApp at +91 70100 13920 with your reference image, approximate height, and delivery location for a prompt discussion.',
  },
];

export const createWhatsAppUrl = (messageText: string, phone: string = '917010013920'): string => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(messageText)}`;
};
