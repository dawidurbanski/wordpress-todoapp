import { useEntityRecords } from "@wordpress/core-data";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoItems.module.css";

export default function TodoItems({ filter = 'all' }) {
  const meta = {}

  if (filter !== "all") {
    meta.metaKey = "completed";
    meta.metaValue = filter === "completed" ? "1" : "";
  }

  const {
    records: todos,
    isResolving,
    status,
  } = useEntityRecords("postType", "todoitem", {
    per_page: 20,
    ...meta,
  });

  if (isResolving && !todos) {
    return (
      <div className={styles["empty"]}>
        Loading...
      </div>
    );
  }

  if (todos && todos.length === 0) {
    return (
      <div className={styles["empty"]}>
        No todos found
      </div>
    );
  }

  if (!todos) {
    return null;
  }

  return (
    <ul className={styles["todo-list"]}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todoItem={todo} />
      ))}
    </ul>
  );
}
