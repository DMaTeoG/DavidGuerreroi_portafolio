import Image from "next/image";

import { ReferencesData, ReferenceContactType } from "@/types/portfolio";

type ReferencesSectionProps = {
  data: ReferencesData;
};

const contactIcon: Record<ReferenceContactType, string> = {
  email: "@",
  linkedin: "in",
  website: "www",
};

const ReferencesSection = ({ data }: ReferencesSectionProps) => {
  const getInitials = (name: string) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((segment) => segment[0]?.toUpperCase() ?? "")
      .join("") || "?";

  const ratingIcons = (rating: number) =>
    Array.from({ length: Math.max(1, Math.min(5, rating)) }, (_, index) => (
      <span key={index} className="text-xs font-semibold text-rose-500">
        *
      </span>
    ));

  return (
    <section
      id="referencias"
      className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100 py-24 px-6 transition-colors dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
    >
      <div className="pointer-events-none absolute left-14 top-10 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl dark:hidden" aria-hidden />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-rose-300/30 blur-3xl dark:hidden" aria-hidden />
      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-neutral-100">{data.title}</h2>
          <p className="mt-4 text-base text-gray-600 md:text-lg dark:text-neutral-300">{data.subtitle}</p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {data.items.map((item) => (
            <article
              key={`${item.name}-${item.role}`}
              className="relative overflow-hidden rounded-3xl border border-rose-100 bg-white/85 p-8 text-gray-700 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/80 dark:text-neutral-200"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 flex-shrink-0">
                  {item.avatar ? (
                    <Image
                      src={item.avatar.src}
                      alt={item.avatar.alt}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full border-2 border-rose-100 object-cover dark:border-neutral-700"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-rose-100 bg-white text-lg font-semibold text-rose-500 transition-colors dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                      {getInitials(item.name)}
                    </div>
                  )}
                  <span className="absolute -bottom-1 -right-1 flex items-center gap-1 rounded-full bg-rose-500 px-2 py-0.5 text-xs font-semibold text-white dark:bg-rose-400">
                    {ratingIcons(item.rating)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 transition-colors dark:text-neutral-100">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-rose-500 dark:text-rose-300">{item.role}</p>
                  <p className="text-xs text-gray-500 dark:text-neutral-400">{item.relation}</p>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-neutral-300">"{item.quote}"</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {item.contact.map((contact) => (
                  <a
                    key={`${item.name}-${contact.type}-${contact.href}`}
                    href={contact.href}
                    target={
                      contact.type === "linkedin" || contact.type === "website" ? "_blank" : undefined
                    }
                    rel={
                      contact.type === "linkedin" || contact.type === "website"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2 text-sm font-medium text-rose-500 transition-colors hover:border-rose-300 hover:text-rose-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-neutral-500 dark:hover:text-neutral-50"
                  >
                    <span aria-hidden className="text-xs uppercase text-rose-500 dark:text-neutral-200">
                      {contactIcon[contact.type]}
                    </span>
                    <span>{contact.label}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
