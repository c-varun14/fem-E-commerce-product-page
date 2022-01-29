import { useDispatch, useSelector } from "react-redux";
import styles from "./AllProductImages.module.css";
import { imagesActions } from "../../store/imagesSlice";

const AllProductImages = (props) => {
  const images = useSelector((state) => state.images.images);
  const selectedImageId = useSelector((state) => state.images.selectedImageNo);
  const dispatch = useDispatch();

  const onClickHandler = (id) => {
    dispatch(imagesActions.click(id));
  };

  return (
    <ul className={styles.productImages}>
      {images.map((image, id) => {
        if (id === selectedImageId) {
          return (
            <li
              key={id}
              onClick={() => onClickHandler(id)}
              className={styles.active}
            >
              <img src={image} />
            </li>
          );
        }
        return (
          <li key={id} onClick={() => onClickHandler(id)}>
            <img src={image} />
          </li>
        );
      })}
    </ul>
  );
};

export default AllProductImages;
