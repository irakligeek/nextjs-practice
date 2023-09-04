"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="flex flex-row bg-sky-400 text-white w-full h-14 sticky top-0 justify-between mb-10">
      <div className="flex flex-row items-center font-bold py-2 px-8">
        LOGO HERE
      </div>
      <nav className="flex items-center py-2 px-8 pr-16">
        <ul className="flex gap-3">
          <li>
            <Link href="/" className={pathname === "/" ? "underline" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className={pathname === "/gallery" ? "underline" : ""}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/newsletter"
              className={pathname === "/newsletter" ? "underline" : ""}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
