import { ImageCard } from "./ImageCard";
import s from "./ImageGallery.module.css";

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          onClick={onImageClick}
          // likes={image.likes}
          // description={image.description}
        />
      ))}
    </ul>
  );
};

// export default ImageGallery;
