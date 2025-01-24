import { SvelteSet } from "svelte/reactivity";

export class ChildContext {
  // This seems to work fine
  setWatcher = new SvelteSet<number>();
  // This does not work
  derivedWatcher = new SvelteSet<number>();

  constructor(set: SvelteSet<number>, derivedSet: SvelteSet<number>) {
    this.setWatcher = set;
    this.derivedWatcher = derivedSet;
  }
}
