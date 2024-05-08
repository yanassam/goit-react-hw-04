import s from "./LoadMoreBtn.module.css";
export const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <>
      <button onClick={onLoadMore} className={s.button}>
        {" "}
        Load more...
      </button>
    </>
  );
};

// export default LoadMoreBtn;
