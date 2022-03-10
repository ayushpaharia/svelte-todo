<script lang="ts">
  export let type: string;
  export let callback: () => void;
</script>

<button class={`button ${type}`} on:click={callback}>
  <slot />
</button>
