import Link from "next/link";

const NotFound = async () => {

  return (
    <html lang="fr">
      <body className="flex h-screen flex-col items-center justify-center gap-12 bg-white">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Titre</h1>
          <p className="text-lg">description</p>
        </div>

        <Link
          href="/"
          className="rounded bg-gray-800 px-6 py-4 text-white hover:bg-gray-600"
        >
          Home
        </Link>
      </body>
    </html>
  );
};

export default NotFound;
