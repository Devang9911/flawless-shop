import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

type Prop = {
    menuOpen : boolean;
    setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

function MobileMenu({menuOpen , setMenuOpen} : Prop) {
    const pathname = usePathname();
    const navLinks = [
    { name: "Men", href: "/men" },
    { name: "Women", href: "/women" },
    { name: "Accessories", href: "/accessories" },
    { name: "Sign up", href: "/login" },
  ];
  return (
    <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex justify-end items-center border-b">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-2xl"
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col p-6 gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`${
                pathname === link.href ? "text-black" : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
  )
}

export default MobileMenu