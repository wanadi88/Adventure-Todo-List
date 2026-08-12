import React from "react";
import styles from "./Container.module.css";
import AddTaskBox from "../AddTaskBox/AddTaskBox";

function Container() {
  return (
    <>
      <div className={styles.taskContainer}>
        <h2>Today's Adventures!</h2>
      </div>
    </>
  );
}

export default Container;
