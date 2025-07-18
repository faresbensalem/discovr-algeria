"use client";

import Image from "next/image";

import bejaia from "@/public/img/bejaia.webp";
import tizi from "@/public/img/tizi.webp";
import jijel from "@/public/img/jijel.webp";
import setif from "@/public/img/setif.webp";
import tlemcen from "@/public/img/tlemcen.webp";
import tamnrast from "@/public/img/tamnrast.webp";
import alger from "@/public/img/alger.webp";
import { useMyContext } from "@/Provider/MyContextProvider";

const images = [bejaia, tizi, jijel, setif, tlemcen, alger, tamnrast];

export default function Ville() {
    const { theme } = useMyContext();

    const bgColor = theme === "light" ? "bg-white" : "bg-gray-900";
    const titleColor = theme === "light" ? "text-blue-600" : "text-blue-300";
    const subtitleColor = theme === "light" ? "text-black" : "text-gray-200";

    return (
        <div className={`${bgColor} py-6 h-[38rem] flex flex-col items-center justify-center`}>
            <h1 className={`text-4xl font-bold ${titleColor} mb-8`}>VILLES</h1>
            <h2 className={`text-3xl font-semibold mb-8 ${subtitleColor}`}>
                Partez à la découverte de villes fascinantes et de cultures riches
            </h2>
            <div className="overflow-hidden whitespace-nowrap w-full">
                <div className="animate-scroll inline-flex gap-4 min-w-max">
                    {images.concat(images).map((img, idx) => (
                        <Image
                            key={idx}
                            src={img}
                            alt={`Ville ${idx}`}
                            width={200}
                            height={150}
                            className="rounded-lg"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}