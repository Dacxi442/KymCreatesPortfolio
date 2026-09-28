export type DisciplineCategory = 'all' | 'photography' | 'video' | 'design' | 'web' | 'creative';

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  category: DisciplineCategory;
  categoryLabel: string;
  role: string;
  disciplines: string[];
  heroImage: string;
  galleryImages: string[];
  challenge: string;
  whatCreated: string;
  approach: string;
  outcome: string;
  stats?: { label: string; value: string }[];
  featured?: boolean;
  accentColor?: string;
  layoutStyle?: 'editorial-split' | 'full-cinematic' | 'asymmetric-spread' | 'bold-type';
}

export interface Capability {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  description: string;
  deliverables: string[];
  tools: string[];
  color: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  summary: string;
  deliverable: string;
}

export interface ClientItem {
  name: string;
  industry: string;
  scope: string;
  year: string;
  quote?: string;
  author?: string;
}

export interface CVData {
  name: string;
  title: string;
  location: string;
  summary: string;
  experience: {
    period: string;
    role: string;
    company: string;
    description: string[];
  }[];
  education: {
    year: string;
    degree: string;
    institution: string;
  }[];
  disciplines: string[];
  technicalToolkit: string[];
}
