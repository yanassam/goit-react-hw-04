import { Audio } from "react-loader-spinner";
import s from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={s.loader}>
      <Audio height="80" width="80" color="firebrick" ariaLabel="loading" />
      <p>Loading data, please wait...</p>
    </div>
  );
};

// export default Loader;
