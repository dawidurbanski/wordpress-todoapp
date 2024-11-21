import { Button, Icon, SelectControl } from "@wordpress/components";
import { plusCircle } from "@wordpress/icons";
import React from "react";
import styles from "./Header.module.css";

export default function Header({
  onAddTodoClick = () => {},
  onFilterChange = () => {},
  currentFilter = "all",
}) {
  return (
    <header className={styles["header"]}>
      <Button
        variant="primary"
        icon={<Icon icon={plusCircle} />}
        onClick={onAddTodoClick}
      >
        Add todo
      </Button>
      <div className={styles["filter"]}>
        <SelectControl
          options={[
            {
              disabled: true,
              label: "Select an Option",
              value: "",
            },
            {
              label: "All",
              value: "all",
            },
            {
              label: "Incomplete",
              value: "incomplete",
            },
            {
              label: "Completed",
              value: "completed",
            },
          ]}
          value={currentFilter}
          onChange={onFilterChange}
          __nextHasNoMarginBottom
        />
      </div>
    </header>
  );
}