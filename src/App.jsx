import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import TodoItems from "./components/TodoItems/TodoItems";
import Header from "./components/Header/Header";
import styles from "./app.module.css";

export default function App() {
  const [isAdding, setIsAdding] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("all");

  return (
    <div>
      <h1>Todo App</h1>
      <div className={styles["app"]}>
        <Header
          onAddTodoClick={() => setIsAdding(!isAdding)}
          onFilterChange={setCurrentFilter}
          currentFilter={currentFilter}
        />
        {isAdding && (
          <AddTodoForm onAddComplete={() => setIsAdding(false)} />
        )}
        <TodoItems filter={currentFilter} />
      </div>
    </div>
  );
}
