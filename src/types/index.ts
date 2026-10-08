export interface BusinessInfo {
  name: string;
  tagline: string;
  subTagline: string;
  experienceYears: number;
  location: {
    village: string;
    road: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    fullAddress: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
    googleMapsDirectionsUrl: string;
  };
  contacts: {
    primary: {
      name: string;
      title: string;
      phone: string;
      phoneRaw: string;
      whatsapp: string;
    };
    secondary: {
      name: string;
      phone: string;
      phoneRaw: string;
      whatsapp: string;
    };
  };
  social: {
    instagram: string;
    facebook: string;
    justdial: string;
  };
  publicListing: {
    rating: number;
    reviewCount: number;
    hours: string;
    platformName: string;
    url: string;
  };
  primaryMaterial: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  materialsNote: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'god-traditional' | 'human-character' | 'animal-wildlife' | 'commercial-decor' | 'murals' | 'traditional-heritage';
  categoryLabel: string;
  image: string;
  description: string;
  material?: string;
  isRealWork: boolean; // Flag indicating verified Silaikalam workshop work
  locationTag?: string;
  sizeTag?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface VerifiedReview {
  author: string;
  date: string;
  text: string;
  rating: number;
  platform: string;
}

export interface WhyChoosePoint {
  title: string;
  description: string;
  iconName: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  whatsapp: string;
  email: string;
  city: string;
  projectType: string;
  statueRequirement: string;
  approxHeight: string;
  preferredMaterial: string;
  quantity: string;
  placement: 'Indoor' | 'Outdoor' | 'Both' | 'Undecided';
  description: string;
  requiredBy: string;
  referralSource: string;
}
