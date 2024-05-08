import s from "./ImageCard.module.css";

export const ImageCard = ({ image, onClick, likes, description }) => {
  const handleClick = () => {
    onClick(image.urls.full);
  };
  return (
    <li key={image.id} className={s.imageBox}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={handleClick}
      />
      {/* <h2>{likes}</h2>
      <p>{description}</p> */}
    </li>
  );
};

export default ImageCard;
