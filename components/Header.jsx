"use client";

import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { useMyContext } from "@/Provider/MyContextProvider";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function Header() {
 const { t: tHeader } = useTranslation("header");


  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useMyContext();

  // Classes dynamiques selon le thème
  const navBg = theme === "light" ? "bg-white" : "bg-gray-900";
  const navText = theme === "light" ? "text-gray-800" : "text-white";
  const linkText = theme === "light" ? "text-gray-500 hover:text-gray-700" : "text-gray-300 hover:text-white";
  const iconColor = theme === "light" ? "text-gray-600" : "text-gray-300";
  const burgerColor = theme === "light" ? "text-gray-700" : "text-gray-200";
  const mobileLink = theme === "light" ? "block text-gray-600 hover:text-gray-800 transition" : "block text-gray-300 hover:text-white transition";

  return (
    
    <header>
      <nav className={`${navBg} shadow-md`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className={`${navText} font-bold text-xl`}>
                Discover Algeria
              </Link>
            </div>

            {/* Burger Icon */}
            <div
              className={`md:hidden text-2xl ${burgerColor} cursor-pointer`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <GiHamburgerMenu />
            </div>

            {/* Links (desktop) */}
            <div className="hidden md:flex flex-1 justify-center">
              <ul className="flex space-x-8">
                <li>
                  <Link href="/ville" className={linkText}>
                    Villes
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className={linkText}>
                    Culture DZ
                  </Link>
                </li>
                 
                <li>
                  <Link href="/active" className={linkText}>
                    Activités
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={linkText}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Icons (desktop only) */}
            <div className={`hidden md:flex space-x-4 text-2xl ${iconColor}`}>
              <CiFacebook className="hover:text-blue-600 transition" />
              <CiInstagram className="hover:text-pink-500 transition" />
              <FaTiktok className="hover:text-black transition" />
              <button
                className="ml-auto mr-4 text-2xl cursor-pointer"
                onClick={toggleTheme}
              >
                {theme === "light" ? <FaMoon /> : <IoMdSunny />}
              </button>
             <select
  onChange={(e) => i18next.changeLanguage(e.target.value)}
  defaultValue={i18next.language}
  className={`ml-2 px-0 py-0 rounded border-none outline-none transition
    ${theme === "light" ? "bg-blue-700 text-white" : "bg-gray-800 text-blue-200"}
    focus:ring-2 focus:ring-blue-400`}
  style={{ minWidth: 70, cursor: "pointer" }}
>
  <option value="en">EN</option>
  <option value="fr">FR</option>
  <option value="sp">SP</option>
</select>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4">
              <ul className="flex flex-col space-y-2 text-center">
                <li>
                  <Link href="/ville" className={mobileLink}>
                    Ville
                  </Link>
                </li>
                <li>
                  <Link href="/active" className={mobileLink}>
                    Activités
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className={mobileLink}>
                    Culture DZ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={mobileLink}>
                    Contact
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