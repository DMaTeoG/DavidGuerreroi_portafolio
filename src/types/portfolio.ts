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

export interface HeroData {
  title: string;
  description: string;
  primaryCta: HeroButton;
  secondaryCta?: HeroButton;
}

export interface AboutData {
  title: string;
  description: string;
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
  contact: ContactData;
}
