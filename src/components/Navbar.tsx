"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { NavbarData, PortfolioLocale } from "@/types/portfolio";

type NavbarProps = {
  data: NavbarData;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  availableLocales: PortfolioLocale[];
  currentLocale: PortfolioLocale;
  onChangeLocale: (locale: PortfolioLocale) => void;
};

const linkClass =
  "transition-colors hover:text-rose-500 dark:hover:text-neutral-50";

const localeLabel: Record<PortfolioLocale, string> = {
  es: "ES",
  en: "EN",
};

const Navbar = ({
  data,
  isDarkMode,
  onToggleTheme,
  availableLocales,
  currentLocale,
  onChangeLocale,
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const handleLocaleClick = (locale: PortfolioLocale) => {
    onChangeLocale(locale);
    closeMenu();
  };
  const themeAriaLabel = isDarkMode
    ? currentLocale === "es"
      ? "Cambiar a modo claro"
      : "Switch to light mode"
    : currentLocale === "es"
      ? "Cambiar a modo oscuro"
      : "Switch to dark mode";
  const languageLegend = currentLocale === "es" ? "Idioma" : "Language";

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (navRef.current && !navRef.current.contains(target)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeMenu, isMenuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 z-50 w-full border-b border-rose-100/70 bg-white/80 backdrop-blur shadow-sm transition-colors duration-500 ease-out dark:border-rose-900/60 dark:bg-black/80"
    >
      <div className="mx-auto flex max-w-6xl flex-nowrap items-center justify-between gap-4 px-6 py-4 text-gray-900 transition-colors duration-500 dark:text-white">
        <h1 className="text-xl font-semibold tracking-tight text-gray-900 transition-colors dark:text-neutral-100">
          {data.name}
        </h1>
        <div className="flex flex-1 flex-nowrap items-center justify-end gap-3 overflow-x-auto md:min-w-0 md:gap-4 lg:gap-6">
          <ul className="hidden flex flex-nowrap items-center justify-end gap-x-6 text-sm font-semibold text-gray-700 transition-colors md:flex md:flex-1 md:min-w-0 dark:text-neutral-200">
            {data.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={linkClass}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden flex-shrink-0 items-center justify-end gap-2 md:flex">
            {availableLocales.map((locale) => {
              const isActive = locale === currentLocale;
              return (
                <button
                  key={locale}
                  type="button"
                  onClick={() => handleLocaleClick(locale)}
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    isActive
                      ? "border-rose-500 bg-rose-500 text-white shadow"
                      : "border-rose-200/80 bg-white text-gray-800 hover:border-rose-400 hover:text-rose-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-500"
                  }`}
                  aria-pressed={isActive}
                >
                  {localeLabel[locale]}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2 md:hidden">
            {availableLocales.map((locale) => {
              const isActive = locale === currentLocale;
              return (
                <button
                  key={`xs-locale-${locale}`}
                  type="button"
                  onClick={() => handleLocaleClick(locale)}
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    isActive
                      ? "border-rose-500 bg-rose-500 text-white shadow"
                      : "border-rose-200/80 bg-white text-gray-800 hover:border-rose-400 hover:text-rose-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-500"
                  }`}
                  aria-pressed={isActive}
                >
                  {localeLabel[locale]}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={onToggleTheme}
            className="flex shrink-0 items-center gap-2 rounded-full border border-rose-200/80 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:border-rose-400 hover:bg-rose-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
            aria-pressed={isDarkMode}
            aria-label={themeAriaLabel}
          >
            <span aria-hidden className="inline-flex h-4 w-4 items-center justify-center">
              {isDarkMode ? (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path
                    d="M21 12.79A9 9 0 0111.21 3 7 7 0 1019 14.79c.67-1.1 1-2.32 1-3.5z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                  <path strokeLinecap="round" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M18.72 5.28l1.06-1.06" />
                </svg>
              )}
            </span>
          </button>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose-200/80 text-gray-900 transition-colors hover:border-rose-400 hover:text-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-neutral-500 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
          >
            <span aria-hidden>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </span>
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-rose-100/70 bg-white/95 shadow-sm transition-[max-height,opacity] duration-300 dark:border-rose-900/60 dark:bg-black/90 ${
          isMenuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-3 px-6 py-4 text-sm font-semibold text-gray-700 transition-colors dark:text-neutral-200">
          {data.links.map((link) => (
            <li key={`mobile-${link.href}`}>
              <a
                href={link.href}
                className={linkClass}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-3 border-t border-rose-100/70 px-6 py-4 text-sm font-semibold text-gray-700 transition-colors dark:border-neutral-800 dark:text-neutral-200">
          <span className="uppercase tracking-wide text-gray-500 dark:text-neutral-400">
            {languageLegend}
          </span>
          <div className="flex items-center gap-2">
            {availableLocales.map((locale) => {
              const isActive = locale === currentLocale;
              return (
                <button
                  key={`mobile-locale-${locale}`}
                  type="button"
                  onClick={() => handleLocaleClick(locale)}
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors ${
                    isActive
                      ? "border-rose-500 bg-rose-500 text-white shadow"
                      : "border-rose-200/80 bg-white text-gray-800 hover:border-rose-400 hover:text-rose-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:border-neutral-500"
                  }`}
                  aria-pressed={isActive}
                >
                  {localeLabel[locale]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
