"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import blue from "@/public/img/blue.webp";
import green from "@/public/img/green.webp";
import red from "@/public/img/red.webp";
import white from "@/public/img/white.webp";

export default function Algeria() {
  const images = [
    { src: green, alt: "green", label: "Algeria is green", color: "green" },
    { src: red, alt: "red", label: "Algeria is red", color: "red" },
    { src: white, alt: "white", label: "Algeria is white", color: "white" },









    
    { src: blue, alt: "blue", label: "Algeria is blue", color: "blue" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const getStyle = (index) => {
    const diff = index - current;

    let translateX = diff * 420;
    let opacity = 0;
    let scale = 0.8;
    let zIndex = 1;

    if (diff === 0) {
      opacity = 1;
      scale = 1;
      zIndex = 10;
    } else if (Math.abs(diff) === 1) {
      opacity = 0.6;
      scale = 0.9;
      zIndex = 5;
    }

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      transition: "transform 0.7s ease-in-out, opacity 0.7s ease-in-out",
      position: "absolute",
      top: 0,
      left: "50%",
      marginLeft: "-200px",
      width: "400px",
      height: "450px",
      zIndex,
      borderRadius: "0.5rem",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      filter: opacity < 1 ? "brightness(0.7)" : "none",
    };
  };

  const colorClasses = {
    green: "text-green-600",
    red: "text-red-400",
    white: "text-gray-800",
    blue: "text-blue-400",
  };

  const renderLabel = (label, color) => {
    const words = label.split(" ");
    const lastWord = words.pop();
    const rest = words.join(" ");

    return (
      <span>
        {rest}{" "}
        <span className={colorClasses[color] || "text-black"}>{lastWord}</span>
      </span>
    );
  };

  return (
    <section className="flex flex-col bg-white items-center justify-center py-10 px-4 w-full relative h-[750px] overflow-x-hidden">
      <h1 className="text-4xl font-bold text-blue-600">
        Découvrez les couleurs de l’Algérie
      </h1>
      <h1 className="text-center text-4xl font-semibold mb-8 text-black">
        {renderLabel(images[current].label, images[current].color)}
      </h1>
      <div className="relative w-full max-w-7xl h-[450px] overflow-x-hidden">
        {images.map((img, index) => (
          <div key={index} style={getStyle(index)}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
