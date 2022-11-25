import React from "react";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
export default function ReviewsChat() {
  return (
    <div>
      <p>Link para realizar su review, gracias por su opinion:</p>
      {
        <NavLink className={styles.navLink} to={"/reviewHostel"}>
          Realizar review
        </NavLink>
      }
    </div>
  );
}
