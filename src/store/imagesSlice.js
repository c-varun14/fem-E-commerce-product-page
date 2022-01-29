import { createSlice } from "@reduxjs/toolkit";
import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";

const initialImagesState = {
  selectedImageNo: 0,
  selectedImage: img1,
  images: [img1, img2, img3, img4],
};

const imagesSlice = createSlice({
  name: "images",
  initialState: initialImagesState,
  reducers: {
    click(state, action) {
      state.selectedImageNo = action.payload;
      state.selectedImage = state.images[state.selectedImageNo];
    },
    next(state) {
      if (state.selectedImageNo === state.images.length - 1)
        state.selectedImageNo = 0;
      else state.selectedImageNo++;

      state.selectedImage = state.images[state.selectedImageNo];
    },
    previous(state) {
      if (state.selectedImageNo === 0)
        state.selectedImageNo = state.images.length - 1;
      else state.selectedImageNo--;

      state.selectedImage = state.images[state.selectedImageNo];
    },
  },
});

export const imagesActions = imagesSlice.actions;

export default imagesSlice.reducer;
