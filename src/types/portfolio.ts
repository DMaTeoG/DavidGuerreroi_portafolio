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

export type HeroSocialKey = "github" | "linkedin" | "instagram";

export type HeroSocialLinks = Partial<Record<HeroSocialKey, string>>;

export interface HeroData {
  title: string;
  description: string;
  highlightName?: string;
  image?: ImageData;
  primaryCta: HeroButton;
  secondaryCta?: HeroButton;
  social?: HeroSocialLinks;
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
  preview?: ImageData;
  link?: string;
  demo?: string;
  technologies?: string[];
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
  subtitle?: string;
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

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqData {
  title: string;
  subtitle?: string;
  items: FaqItem[];
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
  email?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterData {
  text: string;
  links?: FooterLink[];
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
  faq?: FaqData;
  contact: ContactData;
  footer: FooterData;
}

export type PortfolioLocale = "es" | "en";

export interface PortfolioSiteData {
  defaultLocale: PortfolioLocale;
  locales: PortfolioLocale[];
  content: Record<PortfolioLocale, PortfolioData>;
}
