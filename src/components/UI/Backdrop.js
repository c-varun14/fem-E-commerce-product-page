import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  let classes = `${styles.backdrop} `;

  if (props.className) classes = `${styles.backdrop} ${props.className}`;

  const onClickHandler = () => {
    props.onClick();
  };
  return <div onClick={onClickHandler} className={classes}></div>;
};

export default Backdrop;
