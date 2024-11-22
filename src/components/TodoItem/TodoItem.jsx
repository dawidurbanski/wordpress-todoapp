import { useState } from "react";
import {
  CheckboxControl,
  ButtonGroup,
  Button,
  Icon,
  __experimentalInputControl as InputControl,
} from "@wordpress/components";
import { useDispatch } from "@wordpress/data";
import { store as coreDataStore } from "@wordpress/core-data";
import { check, edit, cancelCircleFilled } from "@wordpress/icons";
import { cn } from "../../utils";
import styles from "./TodoItem.module.css";

export default function TodoItem({ todoItem = {} }) {
  const { id, title, meta, date } = todoItem;
  const formattedDate = new Date(date).toLocaleString();
  const { saveEntityRecord, deleteEntityRecord } = useDispatch(coreDataStore);

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title.raw);

  const editTodo = async (title) => {
    await saveEntityRecord("postType", "todoitem", {
      id,
      title,
    });

    setIsEditing(false);
  };

  const toggleCompleted = (completed) => {
    saveEntityRecord("postType", "todoitem", {
      id,
      meta: {
        completed: !completed,
      },
    });
  };

  const deleteTodo = () => {
    deleteEntityRecord("postType", "todoitem", id, null);
  };

  return (
    <li
      className={cn({
        [styles["todo-item"]]: true,
        [styles["completed"]]: meta.completed,
      })}
    >
      <CheckboxControl
        checked={meta.completed}
        onChange={() => toggleCompleted(meta.completed)}
        __nextHasNoMarginBottom
      />
      <div className={styles["todo-info-container"]}>
        {isEditing ? (
          <InputControl
            value={newTitle}
            onChange={(value) => setNewTitle(value ?? "")}
            __nextHasNoMarginBottom
          />
        ) : (
          <div className={styles["todo-info"]}>
            <span className={styles["todo-name"]}>{title.rendered}</span>
            <small className={styles["todo-date"]}>{formattedDate}</small>
          </div>
        )}
      </div>
      <ButtonGroup>
        {isEditing ? (
          <Button
            onClick={() => editTodo(newTitle)}
            icon={<Icon icon={check} />}
            variant="tertiary"
          />
        ) : (
          <Button
            onClick={() => setIsEditing(true)}
            icon={<Icon icon={edit} />}
            variant="tertiary"
          />
        )}
        <Button
          onClick={() => deleteTodo()}
          icon={<Icon icon={cancelCircleFilled} />}
          variant="tertiary"
          isDestructive
        />
      </ButtonGroup>
    </li>
  );
}
