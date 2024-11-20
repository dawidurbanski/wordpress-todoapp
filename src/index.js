import { createRoot } from "react-dom/client";
import App from "./App";

const app = document.getElementById("todo-app");

if (!app) {
  throw new Error("Could not find the app element");
}

createRoot(app).render(<App />);
