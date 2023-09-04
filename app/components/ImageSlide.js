"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ImageSlide({ photo, count }) {
  const router = useRouter();

  const nextID = +photo.id + 1;
  const prevID = +photo.id - 1;

  return (
    <div className="p-2 relative">
      <Image
        alt={photo.name}
        src={photo.imageSrc}
        className="w-full object-cover aspect-square"
        width={300}
        height={300}
      />
      <div className="relative w-full mt-4 h-8 border-b border-zinc-200">
        <button
          onClick={() => router.replace(`../gallery/${nextID}`)}
          className="absolute right-0 bottom-0 disabled:text-zinc-400 text-blue-600"
          disabled={nextID > count}
        >
          {"Next >"}
        </button>
        <button
          onClick={() => router.replace(`../gallery/${prevID}`)}
          className="absolute left-0 bottom-0 text-blue-600 disabled:text-zinc-400"
          disabled={prevID < 1}
        >
          {"< Prev"}
        </button>
      </div>
    </div>
  );
}
