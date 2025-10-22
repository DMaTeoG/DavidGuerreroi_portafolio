import { NavbarData } from "@/types/portfolio";

type NavbarProps = {
  data: NavbarData;
};

const Navbar = ({ data }: NavbarProps) => (
  <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-bold text-gray-900">{data.name}</h1>
      <ul className="flex space-x-6 text-sm font-medium">
        {data.links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="hover:text-blue-600">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
