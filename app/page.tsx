import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center bg-cover bg-center h-[80vh]">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-2xl px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Élagage & abattage d’arbres en Basse-Normandie
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Des professionnels certifiés pour la santé et la sécurité de vos
          arbres.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Demander un devis
          </Link>
          <Link
            href="/realisations"
            className="bg-white/80 hover:bg-white text-green-700 px-6 py-3 rounded-lg font-semibold"
          >
            Voir nos réalisations
          </Link>
        </div>
      </div>
    </section>
  );
}
