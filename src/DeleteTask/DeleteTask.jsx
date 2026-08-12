import React from "react";
import styles from "./DeleteTask.module.css";
import AddTaskBox from "../AddTaskBox/AddTaskBox";

function DeleteTask({ onDelete }) {
  return (
    <>
      {" "}
      <div className={styles.deleteBtnWrapper}>
        <button
          onClick={onDelete}
          id={styles.deleteBtn}
          aria-label="Delete task"
        >
          <p>X</p>
        </button>
      </div>
    </>
  );
}

export default DeleteTask;
