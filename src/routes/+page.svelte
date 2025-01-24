<script lang="ts">
  import { ChildContext } from "$lib/child-context.svelte";
  import { ParentContext } from "$lib/parent-context.svelte";

  const parentContext = new ParentContext();
  const childContext = new ChildContext(parentContext.set2);

  $inspect('set 1 on page', parentContext.set1);
  $inspect('set 2 on page', parentContext.set2);
  $inspect('set 3 on page', childContext.set3);
</script>

<button onclick={() => parentContext.addItem()}>Increment</button>

<h1>Set 1 (Parent)</h1>
{@render setItems(parentContext.set1)}

<h1>Set 2 (Parent)</h1>
{@render setItems(parentContext.set2)}

<h1>Set 3 (Child)</h1>
{@render setItems(childContext.set3)}

{#snippet setItems(set: Set<number>)}
  <ul>
    {#each set as item}
      <li>{item}</li>
    {/each}
  </ul>
{/snippet}