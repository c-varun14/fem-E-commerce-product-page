import { useDispatch } from "react-redux";
import { imagesActions } from "../../store/imagesSlice";

import styles from "./NextPrevBtn.module.css";

const NextButton = (props) => {
  let classes = `${styles.next} `;

  if (props.className) classes = `${styles.next} ${props.className}`;

  const dispatch = useDispatch();
  const nextImage = () => {
    dispatch(imagesActions.next());
  };

  return (
    <div className={classes} onClick={nextImage}>
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m2 1 8 8-8 8"
          stroke="#1D2026"
          strokeWidth="3"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default NextButton;
