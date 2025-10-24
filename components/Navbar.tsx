import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-4 border-b bg-layout px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href=""
          title="Service"
          className="flex items-center gap-2 text-lg text-white font-semibold md:text-base"
        >
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width="0"
            height="0"
            sizes="100vw"
            className="h-8 w-auto"
          />
        </Link>
      </nav>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto hidden flex-1 flex-col gap-6 text-lg font-medium sm:flex-initial md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"></div>
      </div>
    </header>
  );
};
