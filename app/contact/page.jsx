import FormControlleValide from "@/components/FormControlleValide";

export const metadata = {
    title: "contact",
    description: "Page contact",
    openGraph: {
        title: "contact",
        description: "Page contact",
        images: ["./img/react.webp"],
    },
};




export default function Contact() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">contacter nous pour plus d'information </h2>
      <FormControlleValide />
    </div>
  );
}
