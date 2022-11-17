import React from "react";
import Modal from "./Modal.js";
import "./App.css";
import styles from "./Home.module.css";
import { useState } from "react";

function PageOne() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button className={styles.buttonstyle} onClick={() => setShowModal(true)}>
        Join our Mailing List
      </button>

      <Modal onClose={() => setShowModal(false)} show={showModal} />
    </div>
  );
}

export default PageOne;
