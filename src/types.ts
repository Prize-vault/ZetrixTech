export interface MenuItem {
  name: string;
  price: string;
  category: string;
  description: string;
  isPopular?: boolean;
  isVeg?: boolean;
}

export interface RoomItem {
  name: string;
  price: string;
  capacity: string;
  amenities: string[];
  description: string;
}

export interface DemoClient {
  id: string;
  name: string;
  tagline: string;
  type: 'restaurant' | 'hotel' | 'cafe';
  location: string;
  timings: string;
  phone: string;
  whatsapp: string;
  heroHeading: string;
  heroSubhead: string;
  accentColor: string;
  categories: string[];
  menuItems?: MenuItem[];
  rooms?: RoomItem[];
  features: string[];
}

export interface AuditFormData {
  businessName: string;
  businessType: string;
  locality: string;
  contactNumber: string;
  hasWebsite: string;
  hasGoogleMaps: string;
  hasQrMenu: string;
  notes?: string;
}
