import photos from "@/app/data/photos";
import Modal from "@/app/components/ui/Modal";
import ImageSlide from "@/app/components/ImageSlide";

export default function PhotoModal({ params }) {
  const photo = photos.find((item) => item.id === params.id);
  return (
    <Modal path={"/gallery"}>
        <ImageSlide photo={photo} count={photos.length} />
      </Modal>
  );
}
