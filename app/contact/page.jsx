"use client";

import FormControlleValide from "@/components/FormControlleValide";
import { useMyContext } from "@/Provider/MyContextProvider";

// SUPPRIME ou déplace ce bloc metadata
// export const metadata = { ... }

export default function Contact() {
  const { theme } = useMyContext();

  const bgColor = theme === "light" ? "bg-gray-50" : "bg-gray-900";
  const titleColor = theme === "light" ? "text-gray-800" : "text-gray-100";

  return (
    <div className={`p-6 min-h-screen ${bgColor}`}>
      <h2 className={`text-2xl font-semibold mb-4 ${titleColor}`}>
        contacter nous pour plus d'information
      </h2>
      <FormControlleValide />
    </div>
  );
}