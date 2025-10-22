// app/page.tsx
"use client";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
  };

  return (
    <main className={`${poppins.className} font-sans scroll-smooth text-gray-700`}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold text-gray-900">Mateo Guerrero</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="#inicio" className="hover:text-blue-600">Inicio</a></li>
            <li><a href="#sobre" className="hover:text-blue-600">Sobre mí</a></li>
            <li><a href="#tecnologias" className="hover:text-blue-600">Tecnologías</a></li>
            <li><a href="#proyectos" className="hover:text-blue-600">Proyectos</a></li>
            <li><a href="#experiencia" className="hover:text-blue-600">Experiencia</a></li>
            <li><a href="#contacto" className="hover:text-blue-600">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section id="inicio" className="h-screen flex flex-col justify-center items-center text-center bg-gray-50 px-4">
        <h2 className="text-5xl font-bold mb-6 text-gray-900">Hola, soy Mateo 👋</h2>
        <p className="text-lg mb-8 max-w-2xl leading-relaxed">
          Desarrollador de software apasionado por crear soluciones innovadoras y experiencias digitales excepcionales.
        </p>
        <div className="space-x-4">
          <a href="#contacto" className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700">Contáctame</a>
          <a href="/cv.pdf" target="_blank" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50">Ver CV</a>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre" className="max-w-4xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Sobre mí</h2>
        <p className="text-lg text-center leading-relaxed">
          Disfruto trabajar en equipo, ya que creo que la colaboración es clave para lograr grandes resultados. 
          Además, me apasiona el gimnasio y valoro la disciplina, tanto en mi vida personal como en mi crecimiento profesional. 
          Mi pasión por la tecnología me motiva a mantenerme actualizado con las últimas tendencias y a involucrarme en proyectos que generen un impacto positivo.
        </p>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias" className="bg-white py-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Tecnologías</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          {["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Django"].map((tech) => (
            <div key={tech} className="p-6 border rounded-xl shadow-sm bg-gray-50 hover:shadow-md">
              <span className="font-semibold">{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Proyectos */}
      <section id="proyectos" className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "E-commerce Platform", desc: "Plataforma completa de comercio electrónico con React y Node.js" },
            { title: "Task Manager", desc: "Aplicación de gestión de tareas con funcionalidades avanzadas" },
            { title: "Weather App", desc: "Aplicación del clima con datos en tiempo real y diseño intuitivo" },
          ].map((proj) => (
            <div key={proj.title} className="p-6 border rounded-xl shadow bg-white hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{proj.title}</h3>
              <p className="text-gray-600 leading-relaxed">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experiencia */}
      <section id="experiencia" className="bg-gray-50 py-24 px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Experiencia</h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          <div className="p-6 border-l-4 border-blue-600 bg-white shadow-sm rounded">
            <h3 className="text-xl font-semibold text-gray-900">Frontend Developer</h3>
            <p className="text-gray-600 leading-relaxed">Desarrollo de interfaces modernas y responsivas utilizando React.</p>
          </div>
          <div className="p-6 border-l-4 border-blue-600 bg-white shadow-sm rounded">
            <h3 className="text-xl font-semibold text-gray-900">Full Stack Developer</h3>
            <p className="text-gray-600 leading-relaxed">Desarrollo completo de aplicaciones web, con enfoque en la experiencia del usuario.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Contacto</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={form.correo}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={form.mensaje}
            onChange={handleChange}
            className="w-full p-4 border rounded-xl h-40 focus:ring-2 focus:ring-blue-600"
          />
          <button type="submit" className="w-full p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Enviar Mensaje
          </button>
        </form>
      </section>
    </main>
  );
}
