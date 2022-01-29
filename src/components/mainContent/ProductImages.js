import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import { useSelector } from "react-redux";
import useScreenWidth from "../../hooks/useScreenWidth";

import LightBox from "../lightBox/LightBox";
import Backdrop from "../UI/Backdrop";
import NextButton from "../UI/NextButton";
import PrevButton from "../UI/PrevButton";
import AllProductImages from "./AllProductImages";
import styles from "./ProductImages.module.css";

const ProductImages = () => {
  const [backdropState, setBackdropState] = useState(false);
  const image = useSelector((state) => state.images.selectedImage);

  const screenWidth = useScreenWidth();

  let isScreenWidthLess;
  isScreenWidthLess = screenWidth > 545 ? false : true;

  const onClickHandler = () => {
    if (screenWidth < 546) return;
    setBackdropState(true);
  };

  const closeBackdrop = () => {
    setBackdropState(false);
  };

  return (
    <>
      {backdropState &&
        reactDom.createPortal(
          <LightBox image={image} closeBackdrop={closeBackdrop} />,
          document.getElementById("overlay")
        )}
      {backdropState &&
        reactDom.createPortal(
          <Backdrop onClick={closeBackdrop} />,
          document.getElementById("backdrop")
        )}

      <div className={styles.productImagesDiv}>
        {isScreenWidthLess && <PrevButton className={styles.previous} />}
        <img
          src={image}
          className={styles.selectedImage}
          onClick={onClickHandler}
        />
        {isScreenWidthLess && <NextButton className={styles.next} />}
        {!isScreenWidthLess && <AllProductImages image={image} />}
      </div>
    </>
  );
};

export default ProductImages;
