import { useState } from "react";
import {
  Button,
  Flex,
  FlexItem,
  FlexBlock,
  __experimentalInputControl as InputControl,
} from "@wordpress/components";
import { useDispatch } from "@wordpress/data";
import { store as coreDataStore } from "@wordpress/core-data";

export default function AddTodoForm({ onAddComplete = () => {} }) {
  const { saveEntityRecord } = useDispatch(coreDataStore);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const addTodo = async () => {
    await saveEntityRecord("postType", "todoitem", {
      title: newTodoTitle,
      status: "publish",
    });

    onAddComplete();
    setNewTodoTitle("");
  };

  return (
    <Flex justify="space-between" align="flex-end">
      <FlexBlock>
        <InputControl
          label="Create new todo item"
          placeholder="What will I do..."
          value={newTodoTitle}
          onChange={(value) => setNewTodoTitle(value ?? "")}
        />
      </FlexBlock>
      <FlexItem>
        <Button variant="secondary" size="compact" onClick={addTodo}>
          Add
        </Button>
      </FlexItem>
    </Flex>
  );
}
