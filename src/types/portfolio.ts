export interface NavbarLink {
  label: string;
  href: string;
}

export interface NavbarData {
  name: string;
  links: NavbarLink[];
}

export interface HeroButton {
  label: string;
  href: string;
  targetBlank?: boolean;
}

export interface ImageData {
  src: string;
  alt: string;
}

export interface HeroData {
  title: string;
  description: string;
  image?: ImageData;
  primaryCta: HeroButton;
  secondaryCta?: HeroButton;
  social?: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export interface AboutData {
  title: string;
  description: string;
  image?: ImageData;
}

export interface TechnologiesData {
  title: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
}

export interface ProjectsData {
  title: string;
  items: ProjectItem[];
}

export interface ExperienceItem {
  role: string;
  description: string;
}

export interface ExperienceData {
  title: string;
  items: ExperienceItem[];
}

export interface ExperienceHighlightItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface ExperienceHighlightsData {
  title: string;
  items: ExperienceHighlightItem[];
}

export type ReferenceContactType = "email" | "linkedin" | "website";

export interface ReferenceContact {
  type: ReferenceContactType;
  label: string;
  href: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  relation: string;
  quote: string;
  rating: number;
  avatar?: ImageData;
  contact: ReferenceContact[];
}

export interface ReferencesData {
  title: string;
  subtitle: string;
  items: ReferenceItem[];
}

export interface ContactField {
  name: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
}

export interface ContactData {
  title: string;
  fields: ContactField[];
  buttonLabel: string;
}

export interface PortfolioData {
  navbar: NavbarData;
  hero: HeroData;
  about: AboutData;
  technologies: TechnologiesData;
  projects: ProjectsData;
  experience: ExperienceData;
  experienceHighlights: ExperienceHighlightsData;
  references: ReferencesData;
  contact: ContactData;
}
