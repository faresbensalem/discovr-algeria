"use client";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import "../i18next"; // ← ça lance la configuration i18n UNE FOIS dans tout le projet
  import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t: tFooter } = useTranslation("footer");

    return (
         <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4"> {tFooter("footer.title")}</h2>
            <p className="text-gray-400">
              {tFooter("footer.description")}
            </p>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">{tFooter("footer.usefulLinks")}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Villes</a></li>
              <li><a href="#" className="hover:text-white transition">Activités</a></li>
              <li><a href="#" className="hover:text-white transition">Culture DZ</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">{tFooter("footer.contactUs")}</h3>
            <p>{tFooter("footer.phone")}</p>
            <p>{tFooter("footer.email")}</p>
            <p>{tFooter("footer.address")}</p>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Suivez-nous</h3>
            <div className="flex space-x-4 text-3xl">
               <CiFacebook className="hover:text-blue-600 transition" />
               <CiInstagram className="hover:text-pink-500 transition" />
             <FaTiktok className=" transition" />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
<p>&copy; {new Date().getFullYear()} discovr algeria. Tous droits réservés.</p> 
              
        </div>
      </div>
    </footer>
    );
}
