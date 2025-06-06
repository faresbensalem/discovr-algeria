"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import blue from "@/public/img/blue.webp";
import green from "@/public/img/green.webp";
import red from "@/public/img/red.webp";

export default function Activpage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      let eventDate = new Date(`${currentYear}-08-17T00:00:00`);

      if (eventDate < now) {
        eventDate = new Date(`${currentYear + 1}-08-17T00:00:00`);
      }

      const diff = eventDate.getTime() - now.getTime();
      const totalSeconds = Math.floor(diff / 1000);

      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const activities = [
    {
      title: "Plongée dans les eaux turquoises",
      description:
        "Explorez les fonds marins algériens et vivez une aventure inoubliable.",
      image: blue,
    },
    {
      title: "Randonnée en montagne",
      description:
        "Traversez les sommets du Djurdjura et découvrez des paysages à couper le souffle.",
      image: green,
    },
    {
      title: "Soirée traditionnelle",
      description:
        "Musique, danse et gastronomie vous attendent sous le ciel étoilé.",
      image: red,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white to-green-50">
      {/* Compte à rebours */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-700 mb-4 animate-pulse">
          ⏰ Tik Tak... Le temps tourne !
        </h1>

        <p className="text-lg md:text-2xl text-gray-700 mb-8 font-medium max-w-2xl">
          L’événement approche à grands pas… <br />
          <span className="text-green-800 font-semibold">
            Réservez vos billets dès maintenant pour ne rien manquer ! 🎟️
          </span>
        </p>

        <div className="bg-gray-900 text-white shadow-xl rounded-xl px-8 py-6 flex flex-wrap justify-center gap-6 text-3xl md:text-4xl font-bold tracking-wide">
          <div className="flex flex-col items-center">
            <span>{timeLeft.days}</span>
            <span className="text-sm text-gray-300 font-normal">jours</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
            <span className="text-sm text-gray-300 font-normal">heures</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
            <span className="text-sm text-gray-300 font-normal">minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
            <span className="text-sm text-gray-300 font-normal">secondes</span>
          </div>
        </div>
      </section>

      {/* Section Activités */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col gap-12">
        {activities.map((act, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden"
            style={{ height: "7cm" }}
          >
            <Image
              src={act.image}
              alt={act.title}
              className="object-cover w-full md:w-1/2 h-full"
              width={500}
              height={500}
            />
            <div className="p-6 flex flex-col justify-between md:w-1/2 text-left">
              <div>
                <h2 className="text-2xl font-bold text-green-700 mb-3">
                  {act.title}
                </h2>
                <p className="text-gray-600 mb-6">{act.description}</p>
              </div>
              <button className="ml-auto bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium transition">
                Réservez vite !
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
