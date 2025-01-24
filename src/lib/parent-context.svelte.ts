import { SvelteSet } from "svelte/reactivity";

export class ParentContext {
  // This is the set we operate on
  set = new SvelteSet<number>([]);

  // This set is updated based on the values in the first set. It should be reactive.
  derivedSet = $derived.by(() => {
    const out = new Set<number>();
    this.set.forEach((value) => out.add(value * 2));
    return new SvelteSet(out);
  });

  // Add an item to the set
  addItem() {
    this.set.add(this.set.size + 1);
  }
}
