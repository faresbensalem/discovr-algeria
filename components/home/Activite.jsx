import Image from "next/image";
import desert from "@/public/img/desert.webp";
import mer from "@/public/img/mer.webp";
import niege from "@/public/img/niege.webp";

export default function Activite() {
  return (
    <section className="py-12 px-4 text-center bg-gray-50 font-sans">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">
        Découvrez nos activités en Algérie
      </h1>
      <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-10">
        partez à l’aventure et explorez les trésors naturels
        de l’Algérie : désert, mer et montagne vous attendent.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10">
        {[{
          titre: "Aventure dans le désert",
          image: desert,
          alt: "Désert algérien",
        }, {
          titre: "Escapade en mer",
          image: mer,
          alt: "Mer Méditerranée en Algérie",
        }, {
          titre: "Séjour en montagne",
          image: niege,
          alt: "Montagnes enneigées d'Algérie",
        }].map(({ titre, image, alt, texte }, index) => (
          <div key={index} className="max-w-xs mx-auto">
            <p className="mb-2 text-xl font-semibold text-gray-800">{titre}</p>
            <div className="w-full overflow-hidden rounded-xl shadow-lg">
              <div className="transition-transform duration-300 ease-in-out hover:scale-110">
                <Image
                  src={image}
                  alt={alt}
                  layout="responsive"
                  width={160}
                  height={90}
                  className="rounded-xl"
                />
              </div>
            </div>
            <p className="mt-2 text-gray-600 text-sm">{texte}</p>
          </div>
        ))}
      </div>

      {/* Bouton ajouté */}
      <div className="mt-12">
      <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
  Découvrir plus d’activités
</button>
      </div>
    </section>
  );
}
