import { useDispatch, useSelector } from "react-redux";
import reactDom from "react-dom";

import close from "../../images/icon-close.svg";
import logo from "../../images/logo.svg";
import menu from "../../images/icon-menu.svg";
import Backdrop from "../UI/Backdrop";
import styles from "./Navbar.module.css";
import cartIcon from "../../images/icon-cart.svg";
import imageAvatar from "../../images/image-avatar.png";
import Cart from "../cart/Cart";
import { cartActions } from "../../store/cartSlice";
import useScreenWidth from "../../hooks/useScreenWidth";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const isCartToggled = useSelector((state) => state.cart.isCartToggled);
  const [classes, setClasses] = useState(`${styles.textContent}`);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const screenWidth = useScreenWidth();

  let isScreenWidthLess;
  isScreenWidthLess = screenWidth > 545 ? false : true;

  const toggleCart = () => {
    dispatch(cartActions.toggleCart());
  };

  const openMenu = () => {
    setClasses(`${styles.textContent} ${styles.activated}`);
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setClasses(`${styles.textContent}`);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.nav}>
        {isMenuOpen &&
          reactDom.createPortal(
            <Backdrop onClick={closeMenu} />,
            document.getElementById("backdrop")
          )}
        {isCartToggled && (
          <>
            <Cart />
            {reactDom.createPortal(
              <Backdrop onClick={toggleCart} className={styles.transparent} />,
              document.getElementById("backdrop")
            )}
          </>
        )}
        {isScreenWidthLess && (
          <img className={styles.menu} src={menu} onClick={openMenu} />
        )}
        <img class={styles.logo} src={logo} />
        <ul className={classes}>
          {isScreenWidthLess && (
            <img src={close} className={styles.close} onClick={closeMenu} />
          )}
          <li>
            <a>Collections</a>
          </li>
          <li>
            <a>Men</a>
          </li>
          <li>
            <a>Women</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
        <ul className={styles.cart}>
          <li onClick={toggleCart}>
            <img src={cartIcon}></img>
          </li>
          <li>
            <img src={imageAvatar} className={styles.imageAvatar} />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
