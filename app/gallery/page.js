import photos from "../data/photos";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <header className="flex flex-col items-center mb-8">
        <h3 className="text-center mb-3">Gallery</h3>
        <p>
          Simple gallery page with a modal slideshow navigation using the Next.js Route intercepting. Read more{" "}
          <a href="https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes" target="_blank">
            here
          </a>
        </p>
      </header>

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
    </div>
  );
}
