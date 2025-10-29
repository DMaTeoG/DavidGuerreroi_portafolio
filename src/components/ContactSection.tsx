import type { ChangeEvent, FormEvent } from "react";

import { ContactData } from "@/types/portfolio";

type ContactSectionProps = {
  data: ContactData;
  formValues: Record<string, string>;
  onFieldChange: (name: string, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const ContactSection = ({ data, formValues, onFieldChange, onSubmit }: ContactSectionProps) => (
  <section
    id="contacto"
    className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-white to-rose-100 py-24 px-6 transition-colors duration-500 ease-out dark:from-black dark:via-neutral-950 dark:to-rose-950"
  >
    <div className="pointer-events-none absolute left-1/2 top-12 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/40" aria-hidden />
    <div className="pointer-events-none absolute -bottom-20 right-12 h-56 w-56 rounded-full bg-rose-300/30 blur-3xl dark:bg-rose-900/30" aria-hidden />
    <div className="relative mx-auto max-w-3xl">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">{data.title}</h2>
      <form onSubmit={onSubmit} className="mt-12 space-y-6">
        {data.fields.map((field) => {
          const baseClass =
            "w-full rounded-2xl border border-rose-100 bg-white/85 px-4 py-4 text-gray-700 shadow-sm transition-shadow transition-colors duration-500 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200 dark:border-rose-800 dark:bg-black/60 dark:text-white dark:focus:border-rose-500 dark:focus:ring-rose-400";
          const handleChange = (
            event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => onFieldChange(field.name, event.target.value);

          if (field.type === "textarea") {
            return (
              <textarea
                key={field.name}
                name={field.name}
                placeholder={field.placeholder}
                value={formValues[field.name] ?? ""}
                onChange={handleChange}
                className={`${baseClass} h-40 resize-none`}
              />
            );
          }

          return (
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formValues[field.name] ?? ""}
              onChange={handleChange}
              className={baseClass}
            />
          );
        })}
        <button
          type="submit"
          className="w-full rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white shadow transition-transform transition-colors duration-500 hover:-translate-y-0.5 hover:bg-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 dark:bg-rose-600 dark:hover:bg-rose-500"
        >
          {data.buttonLabel}
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
