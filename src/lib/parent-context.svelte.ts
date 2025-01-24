import { SvelteSet } from "svelte/reactivity";

export class ParentContext {
  // This is the set we operate on
  set1 = new SvelteSet<number>([]);

  /**
   * This set will be passed to the child, and should stay in sync there
   * We use a Set instead of SvelteSet because doing the latter causes "state_unsafe_mutaion"
   * errors when trying to update it. https://svelte.dev/docs/svelte/runtime-errors#Client-errors-state_unsafe_mutation
   */
  set2 = $derived.by(() => {
    const out = new Set<number>();
    this.set1.forEach((v) => out.add(v * 2));
    return out;
  });

  // Add an item to the set
  addItem() {
    this.set1.add(this.set1.size + 1);
  }
}
