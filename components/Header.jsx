"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

export default function Header({ changePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button onClick={() => changePage("accueil")} className="text-gray-800 font-bold text-xl">
                Discover Algeria
              </button>
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
                  <button onClick={() => changePage("villes")} className="text-gray-500 hover:text-gray-700 transition">
                    Villes
                  </button>
                </li>
                <li>
                  <button onClick={() => changePage("culture")} className="text-gray-500 hover:text-gray-700 transition">
                    Culture DZ
                  </button>
                </li>
                <li>
                  <button onClick={() => changePage("activite")} className="text-gray-500 hover:text-gray-700 transition">
                    Activités
                  </button>
                </li>
                <li>
                  <button onClick={() => changePage("contact")} className="text-gray-500 hover:text-gray-700 transition">
                    Contact
                  </button>
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
                  <button onClick={() => changePage("villes")} className="block text-gray-600 hover:text-gray-800 transition">
                    Villes
                  </button>
                </li>
                <li>
                  <button onClick={() => changePage("activite")} className="block text-gray-600 hover:text-gray-800 transition">
                    Activités
                  </button>
                </li>
                <li>
                  <button onClick={() => changePage("culture")} className="block text-gray-600 hover:text-gray-800 transition">
                    Culture DZ
                  </button>
                </li>
                <li>
                  <button onClick={() => changePage("contact")} className="block text-gray-600 hover:text-gray-800 transition">
                    Contact
                  </button>
                </li>
                <div className="flex justify-center space-x-4 pt-2 text-2xl text-gray-600">
                  <CiFacebook className="hover:text-blue-600 transition" />
                  <CiInstagram className="hover:text-pink-500 transition" />
                  <FaTiktok className="hover:text-black transition" />
                </div>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}