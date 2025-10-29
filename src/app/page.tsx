// app/page.tsx
"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";

import rawData from "@/data/portfolio.json";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ExperienceHighlights from "@/components/ExperienceHighlights";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";
import type { ContactField, PortfolioLocale, PortfolioSiteData } from "@/types/portfolio";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const dataset = rawData as unknown as PortfolioSiteData;
const initialLocale = dataset.defaultLocale ?? dataset.locales[0];

const createInitialFormState = (fields: ContactField[]) =>
  fields.reduce<Record<string, string>>((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

const THEME_STORAGE_KEY = "theme-preference";
const LOCALE_STORAGE_KEY = "portfolio-locale";

export default function Home() {
  const [locale, setLocale] = useState<PortfolioLocale>(initialLocale);
  const [form, setForm] = useState<Record<string, string>>(() =>
    createInitialFormState(dataset.content[initialLocale].contact.fields)
  );
  const [isDarkMode, setIsDarkMode] = useState(false);

  const data = dataset.content[locale];

  const setThemeAttributes = (mode: "dark" | "light", options: { persist?: boolean } = {}) => {
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      const body = document.body;

      root.classList.toggle("dark", mode === "dark");
      root.setAttribute("data-theme", mode);
      root.style.setProperty("color-scheme", mode);

      body.setAttribute("data-theme", mode);
      body.classList.toggle("dark-mode", mode === "dark");
      body.classList.toggle("light-mode", mode === "light");
      body.style.setProperty("color-scheme", mode);
    }

    if (options.persist !== false && typeof window !== "undefined") {
      window.localStorage.setItem(THEME_STORAGE_KEY, mode);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    const initialTheme: "dark" | "light" =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setThemeAttributes(initialTheme, { persist: Boolean(storedTheme) });
    setIsDarkMode(initialTheme === "dark");

    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY) as PortfolioLocale | null;
    if (storedLocale && dataset.locales.includes(storedLocale)) {
      setLocale(storedLocale);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      const manualPreference = window.localStorage.getItem(THEME_STORAGE_KEY);
      if (manualPreference === "dark" || manualPreference === "light") {
        return;
      }

      const systemTheme = event.matches ? "dark" : "light";
      setThemeAttributes(systemTheme, { persist: false });
      setIsDarkMode(systemTheme === "dark");
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("lang", locale);
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    }
  }, [locale]);

  useEffect(() => {
    setForm(createInitialFormState(data.contact.fields));
  }, [data.contact.fields]);

  const handleFieldChange = (name: string, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const logLabel = locale === "es" ? "Formulario enviado" : "Form submitted";
    console.log(`${logLabel}:`, form);
  };

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      setThemeAttributes(next ? "dark" : "light");
      return next;
    });
  };

  const handleChangeLocale = (nextLocale: PortfolioLocale) => {
    if (nextLocale === locale) {
      return;
    }

    if (!dataset.locales.includes(nextLocale)) {
      return;
    }

    setLocale(nextLocale);
  };

  return (
    <main
      className={`${poppins.className} font-sans scroll-smooth text-gray-800 transition-colors duration-500 ease-out dark:bg-black dark:text-white`}
    >
      <Navbar
        data={data.navbar}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        availableLocales={dataset.locales}
        currentLocale={locale}
        onChangeLocale={handleChangeLocale}
      />
      <HeroSection data={data.hero} />
      <AboutSection data={data.about} />
      <TechnologiesSection data={data.technologies} />
      <ProjectsSection data={data.projects} />
      <ExperienceSection data={data.experience} />
      <ExperienceHighlights data={data.experienceHighlights} />
      <ReferencesSection data={data.references} />
      <ContactSection
        data={data.contact}
        formValues={form}
        onFieldChange={handleFieldChange}
        onSubmit={handleSubmit}
      />
    </main>
  );
}
