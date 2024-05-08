import s from "./ImageModal.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    maxHeight: "80vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
};
export const ImageModal = ({ isOpen, onClose, imageSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <div style={{ textAlign: "center" }}>
        <img
          src={imageSrc}
          alt="Full Size"
          style={{
            maxWidth: "100%",
            maxHeight: "80vh",
            objectFit: "contain",
            display: "block",
          }}
        />
        <button
          onClick={onClose}
          // style={{ position: "absolute", bottom: "4px" }}
          className={s.button}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

// export default ImageModal;
