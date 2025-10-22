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
    className="bg-gradient-to-br from-red-50 via-white to-red-100 py-24 px-6 transition-colors dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
  >
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-red-600 dark:text-red-400">{data.title}</h2>
      <form onSubmit={onSubmit} className="space-y-6">
      {data.fields.map((field) => {
        const baseClass =
          "w-full p-4 border border-red-200 rounded-xl bg-white text-gray-700 focus:ring-2 focus:ring-red-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:focus:ring-red-400";
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
              className={`${baseClass} h-40`}
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
        className="w-full p-4 bg-red-600 text-white rounded-xl transition-colors hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400"
      >
        {data.buttonLabel}
      </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
