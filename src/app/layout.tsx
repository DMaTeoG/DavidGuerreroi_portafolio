import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mateo Guerrero | Portafolio",
  description: "Portafolio personal de Mateo Guerrero, desarrollador de software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var KEY = "theme-preference";
    var stored = localStorage.getItem(KEY);
    var mode = stored === "dark" || stored === "light" ? stored : "light";
    var root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    root.setAttribute("data-theme", mode);
    root.style.colorScheme = mode;
  } catch (e) {}
})();
`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
