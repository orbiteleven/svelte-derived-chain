import { SvelteSet } from "svelte/reactivity";

export class ChildContext {
  set3 = new SvelteSet<number>();

  constructor(parentSet: Set<number>) {
    // The parent set should come over as
    this.set3 = new SvelteSet(parentSet);
    $inspect("set 3 in child", this.set3);
  }
}
