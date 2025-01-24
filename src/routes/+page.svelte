<script lang="ts">
  import { ChildContext } from "$lib/child-context.svelte";
  import { ParentContext } from "$lib/parent-context.svelte";

  const parentContext = new ParentContext();
  const childContext = new ChildContext(parentContext.set, parentContext.derivedSet);

  $inspect('parent set on page', parentContext.set);
  $inspect('parent derived set on page', parentContext.derivedSet);
  $inspect('child set watcher on page', childContext.setWatcher);
  $inspect('child derived set watcher on page', childContext.derivedWatcher);
</script>

<button onclick={() => parentContext.addItem()}>Increment</button>

<h1>Parent</h1>
<h2>Primary Set</h2>
{@render setItems(parentContext.set)}
<h2>Derived Set</h2>
{@render setItems(parentContext.derivedSet)}


<h1>Child</h1>
<h2>Primary Set Watcher</h2>
{@render setItems(childContext.setWatcher)}
<h2>Derived Set Watcher</h2>
{@render setItems(childContext.derivedWatcher)}


{#snippet setItems(set: Set<number>)}
  <ul>
    {#each set as item}
      <li>{item}</li>
    {/each}
  </ul>
{/snippet}