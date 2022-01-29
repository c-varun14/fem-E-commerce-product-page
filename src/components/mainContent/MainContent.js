import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";
import styles from "./MainContent.module.css";

const MainContent = () => {
  return (
    <section className={styles.mainContent}>
      <ProductImages />
      <ProductDetails />
    </section>
  );
};

export default MainContent;
