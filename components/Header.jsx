"use client";

import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-gray-800 font-bold text-xl">
                Discover Algeria
              </Link>
            </div>

            {/* Burger Icon */}
            <div
              className="md:hidden text-2xl text-gray-700 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <GiHamburgerMenu />
            </div>

            {/* Links (desktop) */}
            <div className="hidden md:flex flex-1 justify-center">
              <ul className="flex space-x-8">
                <li>
                  <Link href="/ville" className="text-gray-500 hover:text-gray-700 transition">
                    Villes
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="text-gray-500 hover:text-gray-700 transition">
                    Culture DZ
                  </Link>
                </li>
                <li>
                  <Link href="/active" className="text-gray-500 hover:text-gray-700 transition">
                    Activités
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-700 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Icons (desktop only) */}
            <div className="hidden md:flex space-x-4 text-2xl text-gray-600">
              <CiFacebook className="hover:text-blue-600 transition" />
              <CiInstagram className="hover:text-pink-500 transition" />
              <FaTiktok className="hover:text-black transition" />
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4">
              <ul className="flex flex-col space-y-2 text-center">
                <li>
                  <Link href="/ville" className="block text-gray-600 hover:text-gray-800 transition">
                    Ville
                  </Link>
                </li>
                <li>
                  <Link href="/active" className="block text-gray-600 hover:text-gray-800 transition">
                    Activités
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="block text-gray-600 hover:text-gray-800 transition">
                    Culture DZ
                  </Link>
                </li>
                <li>
                  <Link href="/" className="block text-gray-600 hover:text-gray-800 transition">
                    contact
                  </Link>
                </li>
            
              
            
              
            
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}