export default function Couverture() {
  return (
    <div className="w-full h-screen bg-white flex justify-center items-center">
      <div className="relative w-[90%] max-w-7xl h-full rounded-xl overflow-hidden">
        {/* Vidéo en arrière-plan */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/img/1.mp4" type="video/mp4" />
        </video>

        {/* Texte centré avec bouton stylisé, plus haut */}
        <div className="absolute inset-0 flex items-end justify-center z-20 pb-62 px-4">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-25 py-4 rounded-full text-xl shadow-lg hover:scale-105 transform transition">
          lancez la decouverte 
          </button>
        </div>
      </div>
    </div>
  );
}
