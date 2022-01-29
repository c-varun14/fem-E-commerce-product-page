import AddToCart from "../cart/AddToCart";
import styles from "./ProductDetails.module.css";

const ProductDetails = () => {
  return (
    <div className={styles.productDetails}>
      <p className={styles.title}>Sneaker Company</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className={styles.mainPricing}>
        <div className={styles.pricing}>
          <h2>$125.00</h2>
          <h4 className={styles.discount}>50%</h4>
        </div>
        <p className={styles.originalPrice}>$250.00</p>
      </div>
      <AddToCart />
    </div>
  );
};

export default ProductDetails;
