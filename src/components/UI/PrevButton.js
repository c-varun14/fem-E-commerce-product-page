import { useDispatch } from "react-redux";
import { imagesActions } from "../../store/imagesSlice";

import styles from "./NextPrevBtn.module.css";

const PrevButton = (props) => {
  let classes = `${styles.previous} `;

  if (props.className) classes = `${styles.previous} ${props.className}`;

  const dispatch = useDispatch();
  const previousImage = () => {
    dispatch(imagesActions.previous());
  };

  return (
    <div className={classes} onClick={previousImage}>
      <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 1 3 9l8 8"
          stroke="#1D2026"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default PrevButton;
