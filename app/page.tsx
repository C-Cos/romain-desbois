import HeroSplit from "@/components/HeroSplit";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSplit />
      <section
        id="features"
        className="min-h-screen flex items-center justify-center bg-gray-50 p-8"
      >
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight tracking-tighter">
            Inspirez-vous de nos fonctionnalités clés
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Lorsque vous avez scrollé jusqu'ici, ce message centré apparaît. Il
            attire l'attention sur le contenu suivant.
          </p>
        </div>
      </section>

      {/* Vous pouvez ajouter d'autres sections ici */}
    </>
  );
}
