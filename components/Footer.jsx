import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
    return (
         <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + description */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">discovr algeria</h2>
            <p className="text-gray-400">
              Découvrez les merveilles de l’Algérie  ses paysages, sa culture, ses saveurs. Votre guide touristique local pour explorer le pays autrement.
            </p>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Villes</a></li>
              <li><a href="#" className="hover:text-white transition">Activités</a></li>
              <li><a href="#" className="hover:text-white transition">Culture DZ</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contactez-nous</h3>
            <p>Téléphone : ‪+514 247 1702‬</p>  
             <p>Email : malik@discovralgeria.com</p>
            <p>Adresse : 123 Rue ville marie, amizour, ain beida </p>
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
          &copy; {new Date().getFullYear()} discovr algeria. Tous droits réservés.
        </div>
      </div>
    </footer>
    );
}
