<script>
  import "./Layout.scss";

  let debug = true;
</script>

{#if debug}
  <div class="app" role="application">
    <main>
      <slot />
    </main>
  </div>
{:else}
  <div class="app" role="application" on:contextmenu|preventDefault>
    <main>
      <slot />
    </main>
  </div>
{/if}
