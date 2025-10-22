import { NavbarData } from "@/types/portfolio";

type NavbarProps = {
  data: NavbarData;
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

const Navbar = ({ data, isDarkMode, onToggleTheme }: NavbarProps) => (
  <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-red-700 via-red-600 to-red-500 shadow-md dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
      <h1 className="text-xl font-bold tracking-tight text-white dark:text-neutral-100">
        {data.name}
      </h1>
      <div className="flex items-center gap-6">
        <ul className="flex items-center gap-6 text-sm font-medium">
          {data.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-red-200 dark:hover:text-neutral-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onToggleTheme}
          className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow transition-colors hover:border-white/60 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 dark:border-neutral-700 dark:bg-neutral-900/70 dark:text-neutral-100 dark:hover:border-neutral-500 dark:hover:bg-neutral-800"
          aria-pressed={isDarkMode}
          aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          <span aria-hidden>{isDarkMode ? "🌙" : "☀️"}</span>
          <span className="hidden sm:inline">
            {isDarkMode ? "Modo claro" : "Modo oscuro"}
          </span>
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
