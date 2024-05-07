import s from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <li key={image.id} className={s.imageBox}>
      <img src={image.urls.small} alt={image.alt_description} />
      {/* <div className={s.imageBox}>
        <img src={image.urls.small} alt={image.alt_description} />
      </div> */}
    </li>
  );
};

export default ImageCard;
