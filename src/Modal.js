import React, { useEffect, useState } from "react";
import Game from "./Game.js";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

export default function Modal({ onClose, show }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles.StyledModalOverlay}>
      <div className={styles.StyledModal}>
        <div className={styles.StyledModalHeader}>
          <button className={styles.buttonstyle} onClick={handleCloseClick}>
            Close
          </button>
        </div>
        <div className={styles.StyledModalBody}>hi</div>
      </div>
    </div>
  ) : null;
  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
