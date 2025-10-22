// app/page.tsx
"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Poppins } from "next/font/google";

import rawData from "@/data/portfolio.json";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import { PortfolioData } from "@/types/portfolio";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const data = rawData as unknown as PortfolioData;
const initialFormState = data.contact.fields.reduce<Record<string, string>>((acc, field) => {
  acc[field.name] = "";
  return acc;
}, {});

export default function Home() {
  const [form, setForm] = useState<Record<string, string>>(initialFormState);

  const handleFieldChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulario enviado:", form);
  };

  return (
    <main className={`${poppins.className} font-sans scroll-smooth text-gray-800`}>
      <Navbar data={data.navbar} />
      <HeroSection data={data.hero} />
      <AboutSection data={data.about} />
      <TechnologiesSection data={data.technologies} />
      <ProjectsSection data={data.projects} />
      <ExperienceSection data={data.experience} />
      <ContactSection
        data={data.contact}
        formValues={form}
        onFieldChange={handleFieldChange}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
