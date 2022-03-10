<script lang="ts">
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import "./css/App.scss"
</script>

<main>
  <div>
    <img src={logo} alt="Svelte Logo" />
    <h1>Svelte Todo</h1>
    <Counter />
  </div> 
</main>
