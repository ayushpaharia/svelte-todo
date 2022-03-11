import type { TodoProps } from "src/types";
import { writable } from "svelte/store";

export const todos = writable<TodoProps>(
  JSON.parse(localStorage.getItem("todos") || "[]"),
);

todos.subscribe((value) => (localStorage.todos = JSON.stringify(value)));
