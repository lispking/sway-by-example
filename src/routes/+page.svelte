<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(() => {
    goto("/00-hello-modular", { replaceState: false });
  });
</script>
