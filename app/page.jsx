import Couverture from "@/components/home/Couverture";
import Activite from "@/components/home/Activite";
import Algeria from "@/components/home/Algeria";
import Ville from "@/components/home/Ville";
import Image from "next/image";


export const metadata = {
  title: 'Accueil - Discovr Algeria',
  description: 'Bienvenue sur Discovr Algeria, votre portail pour explorer les merveilles de l\'Algérie : villes, culture, activités et plus encore.',
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