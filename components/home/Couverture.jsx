"use client";

import { useEffect } from "react";

export default function Couverture() {
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

  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
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
            className="text-white uppercase drop-shadow-2xl mb-6"
            style={{
              fontFamily: "'FuturaLight', sans-serif",
              fontWeight: 700,
              fontSize: "7rem",
              letterSpacing: "0.6em",
            }}
          >
            ALGERIA
          </p>
          <div style={{ transform: "translateY(20px)" }}>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-4 rounded-full text-xl shadow-lg hover:scale-105 transform transition">
              LANCEZ LA DÉCOUVERTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
