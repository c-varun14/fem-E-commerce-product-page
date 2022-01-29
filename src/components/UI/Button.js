import { useState } from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  let classes = `${styles.button} `;

  if (props.className) classes = `${styles.button} ${props.className}`;

  if (props.onClick) {
    return (
      <button onClick={props.onClick} className={classes}>
        {props.children}
      </button>
    );
  }
  return <button className={classes}>{props.children}</button>;
};

export default Button;
