import React from "react";
import styles from "./ResetBtn.module.css";
import AddTaskBox from "../AddTaskBox/AddTaskBox";

function ResetBtn({ onReset }) {
  return (
    <>
      <button onClick={onReset} id={styles.resetBtn}>
        New Adventures
      </button>
    </>
  );
}

export default ResetBtn;
