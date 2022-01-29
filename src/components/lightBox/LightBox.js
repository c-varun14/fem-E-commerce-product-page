import { useSelector } from "react-redux";
import AllProductImages from "../mainContent/AllProductImages";
import styles from "./LightBox.module.css";
import PrevButton from "../UI/PrevButton";
import NextButton from "../UI/NextButton";

const LightBox = (props) => {
  const image = useSelector((state) => state.images.selectedImage);

  const closeBackdrop = () => {
    props.closeBackdrop();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.imgDiv}>
        <PrevButton className={styles.previous} />
        <img src={image}></img>
        <NextButton className={styles.next} />
      </div>
      <svg
        width="14"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.close}
        onClick={closeBackdrop}
      >
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#fff"
          fillRule="evenodd"
        />
      </svg>
      <AllProductImages image={image} />
    </div>
  );
};

export default LightBox;
