"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons" 

import { useRouter } from "next/navigation";
export default function Modal({ children }) {
  const router = useRouter();
  
  const closeModal = () => {
    router.back();
  }
  return (
    <div className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60">
      <div
        className="absolute top-1/2 left-1/2 
        -translate-x-1/2 
        -translate-y-1/2 
        w-full sm:w-10/12 md:w-8/12 lg:w-1/2
        border border-zinc-500 bg-white shadow-md p-8"
      >
        <div
          className="absolute top-2 right-4 cursor-pointer"
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faXmark} style={{color: "#43516b"}} />
        </div>
        {children}
      </div>
    </div>
  );
}
