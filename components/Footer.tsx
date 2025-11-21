export default function Footer() {
  return (
    <footer className="bg-gray-800 p-8 text-center text-white mt-10">
      <div className="max-w-7xl mx-auto">
        <p>
          &copy; {new Date().getFullYear()} Mon Super Site. Tous droits
          réservés.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Construit avec Next.js et Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
