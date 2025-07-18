"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import blue from "@/public/img/blue.webp";
import green from "@/public/img/green.webp";
import red from "@/public/img/red.webp";
import { useMyContext } from "@/Provider/MyContextProvider";

export default function Activpage() {
  const { theme } = useMyContext();

  const bgGradient =
    theme === "light"
      ? "bg-gradient-to-br from-white to-green-50"
      : "bg-gradient-to-br from-gray-900 to-gray-800";
  const titleColor = theme === "light" ? "text-green-700" : "text-green-300";
  const textColor = theme === "light" ? "text-gray-700" : "text-gray-200";
  const cardBg = theme === "light" ? "bg-white" : "bg-gray-800";
  const cardTitle = theme === "light" ? "text-green-700" : "text-green-300";
  const cardText = theme === "light" ? "text-gray-600" : "text-gray-300";
  const buttonBg =
    theme === "light"
      ? "bg-green-600 hover:bg-green-700"
      : "bg-green-800 hover:bg-green-900";
  const countdownBg = theme === "light" ? "bg-gray-900 text-white" : "bg-gray-800 text-green-200";
  const countdownLabel = theme === "light" ? "text-gray-300" : "text-green-300";

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
    <div className={bgGradient}>
      {/* Compte à rebours */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className={`text-5xl md:text-6xl font-extrabold mb-4 animate-pulse ${titleColor}`}>
          ⏰ Tik Tak... Le temps tourne !
        </h1>

        <p className={`text-lg md:text-2xl mb-8 font-medium max-w-2xl ${textColor}`}>
          L’événement approche à grands pas… <br />
          <span className={`font-semibold ${titleColor}`}>
            Réservez vos billets dès maintenant pour ne rien manquer ! 🎟️
          </span>
        </p>

        <div className={`shadow-xl rounded-xl px-8 py-6 flex flex-wrap justify-center gap-6 text-3xl md:text-4xl font-bold tracking-wide ${countdownBg}`}>
          <div className="flex flex-col items-center">
            <span>{timeLeft.days}</span>
            <span className={`text-sm font-normal ${countdownLabel}`}>jours</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.hours.toString().padStart(2, "0")}</span>
            <span className={`text-sm font-normal ${countdownLabel}`}>heures</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.minutes.toString().padStart(2, "0")}</span>
            <span className={`text-sm font-normal ${countdownLabel}`}>minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span>{timeLeft.seconds.toString().padStart(2, "0")}</span>
            <span className={`text-sm font-normal ${countdownLabel}`}>secondes</span>
          </div>
        </div>
      </section>

      {/* Section Activités */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col gap-12">
        {activities.map((act, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row rounded-xl shadow-md overflow-hidden ${cardBg}`}
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
                <h2 className={`text-2xl font-bold mb-3 ${cardTitle}`}>
                  {act.title}
                </h2>
                <p className={`mb-6 ${cardText}`}>{act.description}</p>
              </div>
              <button className={`ml-auto px-5 py-2 rounded-full font-medium transition ${buttonBg} text-white`}>
                Réservez vite !
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}