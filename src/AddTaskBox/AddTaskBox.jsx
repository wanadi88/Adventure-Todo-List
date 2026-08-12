import React, { useState } from "react";
import styles from "./AddTaskBox.module.css";
import DeleteTask from "../DeleteTask/DeleteTask";
import ResetBtn from "../ResetBtn/ResetBtn";

function AddTaskBox() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  //Variable and conditional containing the keyboard "enter" input handler//

  const handleKeyEnter = (event) => {
    if (event.key === "Enter" && input.trim()) {
      setList([...list, { text: input.trim(), completed: false }]);
      setInput("");
    }
  };

  //Variable and conditional containing the Add Task button input handler//

  const handleItemList = () => {
    if (input.trim()) {
      setList([...list, { text: input.trim(), completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (indexToToggle) => {
    setList(
      list.map((item, index) =>
        index === indexToToggle
          ? { ...item, completed: !item.completed }
          : item,
      ),
    );
  };

  return (
    <>
      <div className={styles.wrapper}>
        {/* The "Add Task enter form input" */}
        <input
          id={styles.taskInput}
          type="text"
          className={styles.taskBox}
          placeholder="What's on your mind?"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          onKeyDown={handleKeyEnter}
        />

        {/* The "Add Task" button */}
        <input
          id={styles.addInput}
          type="button"
          onClick={handleItemList}
          className={styles.add}
          value={"Add"}
        />
      </div>
      {/* The "Task list" section containing the tasks added */}
      <div className={styles.wrapperContainer}>
        <ol id="list" className={styles.listContainer}>
          {list.map((item, index) => (
            <div
              className={`${styles.listWrapper} ${item.completed ? styles.listWrapperDone : ""}`}
              key={index}
            >
              <li className={styles.task}>
                <span
                  className={`${styles.taskText} ${item.completed ? styles.completedTask : ""}`}
                  onClick={() => toggleComplete(index)}
                  style={{ width: "100%", cursor: "pointer" }}
                >
                  {item.text}
                </span>
                <DeleteTask
                  onDelete={() => setList(list.filter((_, i) => i !== index))}
                />{" "}
                {/* Deletes the task one by one */}
              </li>
            </div>
          ))}
        </ol>
      </div>
      <ResetBtn onReset={() => setList([])} /> {/* Clears the entire list */}
    </>
  );
}

export default AddTaskBox;
