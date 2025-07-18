"use client";

import { useEffect } from "react";
import { useMyContext } from "@/Provider/MyContextProvider";

export default function Couverture() {
  const { theme } = useMyContext();

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @font-face {
        font-family: 'FuturaLight';
        src: url('/fonts/FuturaLight.woff2') format('woff2'),
             url('/fonts/FuturaLight.woff') format('woff');
        font-weight: 700;
        font-style: normal;
      }
    `;
    document.head.appendChild(style);
  }, []);

  // Classes dynamiques selon le thème
  const bgColor = theme === "light" ? "bg-white" : "bg-gray-900";
  const overlayText = theme === "light" ? "text-white" : "text-gray-200";
  const buttonBg = theme === "light"
    ? "bg-gradient-to-r from-blue-500 to-indigo-600"
    : "bg-gradient-to-r from-blue-800 to-indigo-900";
  const buttonText = "text-white";

  return (
    <div className={`w-full h-screen ${bgColor} flex justify-center items-center`}>
      <div className="relative w-[90%] max-w-7xl h-full rounded-xl overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/img/1.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 flex flex-col items-center justify-end z-20 px-4"
          style={{ paddingBottom: "4rem", transform: "translateY(-180px)" }}
        >
          <p
            className={`uppercase drop-shadow-2xl mb-6 text-center ${overlayText}`}
            style={{
              fontFamily: "'FuturaLight', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 10vw, 7rem)",
              letterSpacing: "clamp(0.2em, 2vw, 0.6em)",
            }}
          >
            ALGERIA
          </p>
          <div style={{ transform: "translateY(20px)" }}>
            <button className={`${buttonBg} ${buttonText} px-6 md:px-10 py-3 md:py-4 rounded-full text-base md:text-xl shadow-lg hover:scale-105 transform transition`}>
              LANCEZ LA DÉCOUVERTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}