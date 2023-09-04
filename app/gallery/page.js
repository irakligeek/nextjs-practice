import photos from "../data/photos";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-max gap-6 max-w-5xl m-auto mb-10">
      {photos.map((photo) => (
        <Link href={`gallery/${photo.id}`}>
            <Image
              alt={photo.name}
              src={photo.imageSrc}
              width="100"
              height="100"
              className="w-full aspect-square object-cover"
            />
        </Link>
      ))}
    </div>
  );
}
