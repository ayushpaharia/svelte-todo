<script lang="ts">
  import type { TodoProps } from 'src/types';
  import { Trash2Icon, EditIcon } from 'svelte-feather-icons'
 
  export let props: TodoProps = null;
</script>


<div class="todo">
  <div class="top">
    <h3>{props.title}</h3>
    <span>
      <button class="edit"><EditIcon size="2x"/></button>
      <button class="delete"><Trash2Icon size="2x"/></button>
    </span>
  </div>
  <p>{props.description}</p>
</div>
   

