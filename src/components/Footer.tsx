import { FooterData } from "@/types/portfolio";

type FooterProps = {
  data: FooterData;
};

const Footer = ({ data }: FooterProps) => (
  <footer className="border-t border-rose-100/70 bg-white/80 py-10 text-sm text-gray-600 transition-colors duration-500 dark:border-rose-900/60 dark:bg-black/80 dark:text-neutral-300">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center sm:flex-row sm:text-left">
      <span>{data.text}</span>
      {data.links && data.links.length > 0 ? (
        <nav className="flex flex-wrap justify-center gap-4 sm:justify-end">
          {data.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-rose-500 transition-colors hover:text-rose-600 dark:text-rose-300 dark:hover:text-rose-200"
            >
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}
    </div>
  </footer>
);

export default Footer;
