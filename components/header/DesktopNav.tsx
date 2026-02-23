import Link from "next/link";
import { usePathname } from "next/navigation";

function DesktopNav() {
  const pathname = usePathname();
  const navLinks = [
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Accessories", href: "/accessories" },
  ];
  return (
    <nav className="hidden md:flex gap-10 text-lg font-medium">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`hover:text-black transition ${
            pathname === link.href ? "text-black" : "text-gray-600"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default DesktopNav;
