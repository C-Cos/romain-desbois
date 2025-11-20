import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              Mon Site
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link
              href="#section1"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              Section 1
            </Link>
            <Link
              href="#features"
              className="text-gray-600 hover:text-indigo-600 transition duration-300"
            >
              Fonctionnalités
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
