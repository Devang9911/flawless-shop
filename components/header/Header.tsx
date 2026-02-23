"use client";

import { ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import DesktopNav from "./DesktopNav";
import HeaderCartCount from "./HeaderCartCount";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className="border-b sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Logo />

          <DesktopNav />

          {/* Right Section */}
          <div className="flex items-center gap-7">
            <Link href="/cart" className="relative text-lg">
              <ShoppingBagIcon width={"30"} />
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-1.5 rounded-full">
                <HeaderCartCount/>
              </span>
            </Link>
            <Link href="/login" className="relative text-lg hidden md:block">
              <UserCircleIcon width={"30"} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
