import type { ChangeEvent, FormEvent } from "react";
import { ContactData } from "@/types/portfolio";

type ContactSectionProps = {
  data: ContactData;
  formValues: Record<string, string>;
  onFieldChange: (name: string, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const ContactSection = ({ data, formValues, onFieldChange, onSubmit }: ContactSectionProps) => (
  <section id="contacto" className="py-24 px-6 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">{data.title}</h2>
    <form onSubmit={onSubmit} className="space-y-6">
      {data.fields.map((field) => {
        const baseClass = "w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-600";
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
      <button type="submit" className="w-full p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
        {data.buttonLabel}
      </button>
    </form>
  </section>
);

export default ContactSection;
