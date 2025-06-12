"use client"; // 👈 OBLIGATOIRE pour activer les hooks React côté client

import { useEffect } from "react";
import Image from "next/image";
import carte from "@/public/img/cartedemi.webp";
import mer1 from "@/public/img/oran2.webp";
import mer3 from "@/public/img/blue.webp";
import mer2 from "@/public/img/mer4.webp";
import desert1 from "@/public/img/desert1.webp";
import desert2 from "@/public/img/desert2.webp";
import desert3 from "@/public/img/desert3.webp";
import montagne1 from "@/public/img/montagne1.webp";
import montagne2 from "@/public/img/montagne2.webp";
import montagne3 from "@/public/img/montagne3.webp";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Villedz() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const merVilles = [
    { img: mer3, nom: "Annaba" },
    { img: mer1, nom: "Oran" },
    { img: mer2, nom: "Béjaïa" },
  ];

  const montagneVilles = [
    { img: montagne1, nom: "Tizi Ouzou" },
    { img: montagne2, nom: "Aïn Beïda" },
    { img: montagne3, nom: "Sétif" },
  ];

  const desertVilles = [
    { img: desert1, nom: "Tamanrasset" },
    { img: desert2, nom: "Hoggar" },
    { img: desert3, nom: "Ghardaïa" },
  ];

  return (
    <section>
      {/* Intro */}
      <section className="flex flex-col md:flex-row items-center max-w-6xl mx-auto my-12 px-6 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/2 flex flex-col justify-center items-start space-y-4 p-8">
          <h1 className="text-blue-700 text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            Plusieurs villes<br />Plusieurs cultures
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-md leading-relaxed">
            Découvrez la richesse et la diversité de nos villes, où chaque culture
            apporte son histoire unique et vibrante.
          </p>
        </div>
        <div className="md:w-1/2 relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-xl transition-transform duration-500 hover:scale-105">
          <Image
            src={carte}
            alt="Carte des villes et cultures"
            layout="fill"
            objectFit="contain"
            quality={100}
            priority
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Mer */}
      <section className="max-w-6xl mx-auto my-16 px-6" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-10">
          Découvrez les villes de mer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {merVilles.map((ville, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src={ville.img}
                alt={`Vue de ${ville.nom}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-semibold">{ville.nom}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Montagne */}
      <section className="max-w-6xl mx-auto my-16 px-6" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-10">
          Découvrez les villes de montagne
        </h2>
        <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
          {montagneVilles.map((ville, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-lg ${
                index === 1 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <Image
                src={ville.img}
                alt={`Vue de ${ville.nom}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                fill
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                <p className="text-white font-semibold">{ville.nom}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Désert */}
      <section className="max-w-6xl mx-auto my-16 px-6" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-700 mb-10">
          Découvrez les villes du désert
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {desertVilles.map((ville, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <Image
                src={ville.img}
                alt={`Vue de ${ville.nom}`}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-semibold">{ville.nom}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
