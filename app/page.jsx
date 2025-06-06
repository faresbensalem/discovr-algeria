import Couverture from "@/components/home/Couverture";
import Activite from "@/components/home/Activite";
import Algeria from "@/components/home/Algeria";
import Ville from "@/components/home/Ville";
import Image from "next/image";

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