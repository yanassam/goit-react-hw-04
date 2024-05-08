import s from "./ErrorMessage.module.css";

export const ErrorMessage = () => {
  return (
    <div className={s.error}>
      <p>"Something went wrong, try again!"</p>
    </div>
  );
};

// export default ErrorMessage;
