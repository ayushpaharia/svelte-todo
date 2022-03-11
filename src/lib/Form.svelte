<script lang="ts">
  import Todo from "./Todo.svelte";
  import uuid from "uuid"
  import Button from "./Button.svelte";
  import { todos } from "../db/store";
  import type { TodoProps } from "src/types";

  let id = Date.now().toLocaleString();
  // @ts-ignore
  let mytodos: TodoProps[] = $todos;

  function addTodo() {
    if (title === "" || description === "") {
      return;
    }
    // @ts-ignore
    todos.update((todos) => [...todos, { id,title, description, completed: false }] as TodoProps[]);
  }
  function resetForm() {
    title = "";
    description = "";
  }

  let title = "";
  let description = "";
</script>

<div class="form">
  <div class="form__container">
    <h2>Create A Todo</h2>

    <span>
      <label for="title">Title</label>
      <input
        name="title"
        type="text"
        placeholder="Complete Work!"
        bind:value={title}
      />
    </span>
    <span>
      <label for="description">Description</label>
      <input
        name="description"
        type="text"
        placeholder="Take Dog out for a walk!"
        bind:value={description}
      />
    </span>

    <Button type="filled" callback={addTodo}>Add</Button>
    <Button type="unfilled" callback={resetForm}>Reset</Button>
  </div>
  <div class="todos">
    <div class="todos__container">
      {#each mytodos as todo}
        <Todo props={todo} />
      {:else}
        <p>Nothing to show here</p>
      {/each}
    </div>
  </div>
</div>
