# Svelte Derived Chain Problem

This repo demonstrates unexpected behavior from chaining a derived class property. In the parent context we have a `SvelteSet` property and a `$derived` property. We pass these into the child context, which watches both of these.

As the parent context's set is updated, all references **OTHER THAN** the derived one update as well.

# Reproduction

Run this app with `pnpm dev` (after `pnpm i`), open http://localhost:5173, and click the "Increment" button.

## Expected result

All 4 lists update.

## Actual result

Both parent sets update, but only the direct set watcher updates on the child context. The watcher for the parent's derived set is not.
