// app/page.tsx
"use client";

import type { FormEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import { Poppins } from "next/font/google";

import rawData from "@/data/portfolio.json";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceHighlights from "@/components/ExperienceHighlights";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
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
type ThemeMode = "light" | "dark";

export default function Home() {
  const [locale, setLocale] = useState<PortfolioLocale>(initialLocale);
  const [form, setForm] = useState<Record<string, string>>(() =>
    createInitialFormState(dataset.content[initialLocale].contact.fields)
  );
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "light";
    }
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
    if (stored === "dark" || stored === "light") {
      return stored;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const isDarkMode = theme === "dark";

  const data = dataset.content[locale];

  const setThemeAttributes = useCallback((mode: ThemeMode) => {
    if (typeof document === "undefined") {
      return;
    }
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    root.setAttribute("data-theme", mode);
    root.style.setProperty("color-scheme", mode);
  }, []);

  useEffect(() => {
    setThemeAttributes(theme);
  }, [theme, setThemeAttributes]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY) as PortfolioLocale | null;
    if (storedLocale && dataset.locales.includes(storedLocale)) {
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      const manualPreference = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
      if (manualPreference === "dark" || manualPreference === "light") {
        return;
      }
      setTheme(event.matches ? "dark" : "light");
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
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      if (typeof window !== "undefined") {
        window.localStorage.setItem(THEME_STORAGE_KEY, next);
      }
      setThemeAttributes(next);
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
      className={`${poppins.className} font-sans scroll-smooth bg-white text-gray-800 transition-colors duration-500 ease-out dark:bg-black dark:text-white`}
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
      <ExperienceHighlights data={data.experienceHighlights} />
      <ReferencesSection data={data.references} />
      <ContactSection
        data={data.contact}
        formValues={form}
        onFieldChange={handleFieldChange}
        onSubmit={handleSubmit}
      />
      <Footer data={data.footer} />
    </main>
  );
}
