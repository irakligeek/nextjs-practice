import photos from "@/app/data/photos";
import Image from "next/image";
import image from "../../../public/image-not-found.jpeg";
export default function BlogPost({ params }) {
  const photo = photos.find((item) => item.id === params.id);
  console.log(image);

  return (
    <>
      {photo ? (
        <div className="w-full max-w-lg m-auto mb-8">
          <Image
            alt={photo.name}
            src={photo.imageSrc}
            className="w-full object-cover aspect-auto"
            width="600"
            height="600"
            // fill
          />
          <span className="block pt-2">{photo.name}</span>
        </div>
      ) : (
        <div className="flex justify-center w-screen h-[calc(100vh-50px)] -mt-10">
          <Image
            src={image.src}
            width={300}
            height={300}
            alt="Not found"
            className="w-full object-cover aspect-square"
          />
        </div>
      )}
    </>
  );
}
