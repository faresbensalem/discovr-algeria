"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import gastro from "@/public/img/gastro.webp";
import gastro1 from "@/public/img/gastro1.webp";
import gastro2 from "@/public/img/gastro2.webp";
import gastro3 from "@/public/img/gastro3.webp";
import gastro4 from "@/public/img/gastro4.webp";
import gastro5 from "@/public/img/gastro5.webp";
import atm from "@/public/img/atm.webp";
import atm2 from "@/public/img/atm2.webp";
import atm3 from "@/public/img/atm3.webp";
import fr from "@/public/img/fr.webp";
import fr2 from "@/public/img/fr2.webp";

export default function Culturedz() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const gastroTrad = [gastro, gastro1, gastro2, gastro3, gastro4, gastro5];
  const archiOttoman = [atm, atm2, atm3];
  const archiHaussmann = [fr, fr2];
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-24">
      {/* Cuisine Traditionnelle */}
      <section data-aos="fade-up">
        <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">
          Cuisine extraordinaire
        </h2>
        <div className="flex justify-center items-center gap-2 w-full max-w-6xl mx-auto h-64 overflow-hidden">
          {gastroTrad.map((img, i) => (
            <div
              key={i}
              className="relative h-full flex-1 transition-all duration-500 ease-in-out hover:flex-[2] group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              <Image
                src={img}
                alt={`Gastro ${i}`}
                fill
                className={`object-cover transition-all duration-500 ease-in-out 
                  ${hoveredIndex === i || hoveredIndex === -1 ? "grayscale-0 brightness-110" : "grayscale brightness-75"}`}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section data-aos="fade-up">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Beauté architecturale
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Style Ottoman */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-4">Style Ottoman</h3>
            <p className="text-center text-gray-700 mb-6 px-2">Plongez dans l’élégance des arcs finement sculptés, des dômes imposants et des couleurs chaudes, témoignant d’un riche héritage impérial.</p>
            <div className="grid grid-cols-3 gap-4 h-48 md:h-64">
              {archiOttoman.map((img, i) => (
                <div key={i} className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={img}
                    alt={`Ottoman ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Style Haussmannien */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-4">Style Haussmannien</h3>
            <p className="text-center text-gray-700 mb-6 px-2">Façades nobles, lignes symétriques et balcons en fer forgé : l’architecture haussmannienne incarne le charme et le prestige de l’élégance urbaine.</p>
            <div className="grid grid-cols-2 gap-4 h-48 md:h-64">
              {archiHaussmann.map((img, i) => (
                <div key={i} className="relative rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={img}
                    alt={`Haussmannien ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
