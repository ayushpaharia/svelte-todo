import uuid from "uuid";
import type { TodoProps } from "./types";

const db = {
  getAllTodos: (): TodoProps[] => {
    return data;
  },
  getOneTodo: (id: string): TodoProps => {
    return data.find((todo) => id === todo.id);
  },
  // updateTodo: (id: string, todo: TodoProps) => {
  //   const index = data.findIndex((t) => id === t.id);
  //   data[index] = todo;
  // },
  // deleteTodo: (id: string): TodoProps => {
  //   const index = data.findIndex((t) => id === t.id);
  //   return data.splice(index, 1)[0];
  // },
  createTodo: (todo: TodoProps): TodoProps => {
    todo.id = uuid.v4();
    todo.completed = false;
    data.push(todo);
    return todo;
  },
};

let data: TodoProps[] = [
  {
    id: "1",
    title: "This is first Todo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi rerum explicabo, fugit placeat iure enim sit distinctio ex eius amet quis incidunt necessitatibus voluptatibus doloribus ea! Eum reprehenderit quidem suscipit?",
    completed: true,
  },
  {
    id: "2",
    title: "Second Todo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi rerum explicabo, fugit placeat iure enim sit distinctio ex eius amet quis incidunt necessitatibus voluptatibus doloribus ea! Eum reprehenderit quidem suscipit?",
    completed: false,
  },
  {
    id: "3",
    title: "This is first Todo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi rerum explicabo, fugit placeat iure enim sit distinctio ex eius amet quis incidunt necessitatibus voluptatibus doloribus ea! Eum reprehenderit quidem suscipit?",
    completed: true,
  },
  {
    id: "4",
    title: "Second Todo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi rerum explicabo, fugit placeat iure enim sit distinctio ex eius amet quis incidunt necessitatibus voluptatibus doloribus ea! Eum reprehenderit quidem suscipit?",
    completed: false,
  },
  {
    id: "5",
    title: "This is first Todo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi rerum explicabo, fugit placeat iure enim sit distinctio ex eius amet quis incidunt necessitatibus voluptatibus doloribus ea! Eum reprehenderit quidem suscipit?",
    completed: true,
  },
  {
    id: "6",
    title: "Second Todo",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi rerum explicabo, fugit placeat iure enim sit distinctio ex eius amet quis incidunt necessitatibus voluptatibus doloribus ea! Eum reprehenderit quidem suscipit?",
    completed: false,
  },
];

export default db;
