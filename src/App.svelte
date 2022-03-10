<script lang="ts">
  import logo from './assets/svelte.png'
  import Form from './lib/Form.svelte'
  import "./css/App.scss"
</script>

<main>
  <nav>
    <img src={logo} alt="Svelte Logo" />
    <h1>Todo List</h1>
  </nav>
  <div class="container">
    <Form />
  </div> 
</main>
