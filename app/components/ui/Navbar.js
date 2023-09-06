"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState } from "react";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";


export default function NavBar() {

  const [mobileNavbar, setMobileNavbar] = useState(false);

  console.log(mobileNavbar);

  const { user, error, isLoading } = useUser(); //oauth user

  const pathname = usePathname();

  const getActiveMenuStyles = (path) => {
    let classes = "no-underline";
    if (path === pathname) {
      classes = "underline";
    }
    return classes;
  };

  return (
    <header className="flex flex-row bg-sky-400 text-white w-full h-full min-h-12 sticky top-0 justify-between items-center">
      <div className="flex flex-row items-center font-bold py-2 px-8 text-2xl">
        Next.js App Router
      </div>
      
      
      <nav className={`
      before-md:transition-none
      md:scale-y-100 md:flex md:shadow-none md:py-2 items-center 
      md:px-8 md:pr-16 md:flex-col md:relative md:bg-transparent 
      md:top-auto md:justify-normal md:max-w-max
      flex-row absolute w-full h-auto top-12 justify-center shadow-md
      scale-y-0 origin-top transition-all ease-out ${mobileNavbar && `scale-y-100`}
      `}>
        <ul className="md:flex gap-3 md:bg-transparent md:w-auto md:p-0 md:text-left  
        w-full bg-sky-400 text-center">
          <li className="md:bg-transparent md:p-0 py-3 md:bg-none px-3 md:border-none border-b border-sky-500 bg-sky-600">
            <Link
              href="/"
              className={` text-white ${getActiveMenuStyles("/")}`}
            >
              Home
            </Link>
          </li>
          <li className=" md:bg-transparent md:p-0 py-3 md:bg-none px-3 md:border-none border-b border-sky-500 bg-sky-600">
            <Link
              href="/gallery"
              className={` text-white ${getActiveMenuStyles("/gallery")}`}
            >
              Gallery
            </Link>
          </li>
          <li className="md:bg-transparent md:p-0 py-3 md:bg-none px-3 md:border-none border-b border-sky-500 bg-sky-600"> 
            <Link
              href="/newsletter"
              className={` text-white ${getActiveMenuStyles("/newsletter")}`}
            >
              Newsletter
            </Link>
          </li>
          {!user && (
            <li className="md:bg-transparent md:p-0 py-3 md:bg-none px-3 md:border-none border-b border-sky-500 bg-sky-600">
              <a
                href="/api/auth/login"
                className={`text-white ${getActiveMenuStyles(
                  "/api/auth/login"
                )}`}
              >
                Login
              </a>
            </li>
          )}
          {user && (
            <li className="md:bg-transparent md:border-l md:border-zinc-100 md:pl-3 md:p-0 py-3 md:bg-none px-3 md:border-b-0 border-b border-sky-500 bg-sky-600 ">
              <div>
                <Link
                  href="/profile"
                  className={`text-white text-sm md:pl-2 ${getActiveMenuStyles(
                    "/profile"
                  )}`}
                >
                  My Profile
                </Link>
                <a
                  href="api/auth/logout"
                  className="text-white text-sm no-underline pl-3"
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  <span className="pl-1">Logout</span>
                </a>
              </div>
            </li>
          )}
        </ul>
      </nav>


      {/* Mobile menu trigger */}
      <div
        onClick={() => {
          setMobileNavbar(!mobileNavbar);
        }}
        className="mr-4 md:hidden cursor-pointer w-8 h-6 relative"
      >
        <div className={`w-full h-1 bg-white text-white absolute origin-center transition-transform bottom-0 top-0
        ${mobileNavbar && `-rotate-45 top-1/2`}`}></div>
        <div className={`w-full h-1 bg-white text-white absolute top-1/2 -mt-[2px]
        ${mobileNavbar && `hidden`}`}></div>
        <div className={`w-full h-1 bg-white text-white absolute bottom-0 origin-center transition-transform
         ${mobileNavbar && `rotate-45 top-1/2`}`}></div>
      </div>
    </header>
  );
}
