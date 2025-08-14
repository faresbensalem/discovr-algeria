import Couverture from "@/components/home/Couverture";
import Activite from "@/components/home/Activite";
import Algeria from "@/components/home/Algeria";
import Ville from "@/components/home/Ville";
import Image from "next/image";

export const metadata = {
  title: "Accueil - Discovr Algeria ",
  description:
    "Bienvenue sur Discovr Algeria",
  openGraph: {
    title: "Accueil - Discovr Algeria",
    description:
      "Page d'accueil de Discovr Algeria",
  },
  manifest: "/manifest.json",
};


export default function Home() {
    return (
        <>
          <Couverture /> 
              <Activite /> 
              <Algeria />
                 <Ville />
        </>
    );
}