import ImageCard from "./ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default ImageGallery;
