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
      <span key={index} className="text-xs font-semibold text-white">
        *
      </span>
    ));

  return (
    <section
      id="referencias"
      className="bg-gradient-to-b from-red-700 via-red-600 to-red-500 py-24 px-6 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{data.title}</h2>
          <p className="mt-4 text-base text-red-100 md:text-lg">{data.subtitle}</p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {data.items.map((item) => (
            <article
              key={`${item.name}-${item.role}`}
              className="relative overflow-hidden rounded-3xl border border-red-200 bg-white p-8 text-gray-700 shadow-xl transition-shadow hover:shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 flex-shrink-0">
                  {item.avatar ? (
                    <Image
                      src={item.avatar.src}
                      alt={item.avatar.alt}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full border-2 border-red-200 object-cover"
                    />
                  ) : (
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-red-200 bg-red-50 text-lg font-semibold text-red-500">
                      {getInitials(item.name)}
                    </div>
                  )}
                  <span className="absolute -bottom-1 -right-1 flex items-center gap-1 rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
                    {ratingIcons(item.rating)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm font-medium text-red-600">{item.role}</p>
                  <p className="text-xs text-red-400">{item.relation}</p>
                </div>
              </div>
              <p className="mt-6 text-base leading-relaxed text-gray-600">&quot;{item.quote}&quot;</p>
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
                    className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:border-red-400 hover:bg-red-100 hover:text-red-700"
                  >
                    <span aria-hidden className="text-xs uppercase text-red-500">
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
