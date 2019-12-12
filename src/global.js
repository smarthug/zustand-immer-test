import create from "zustand";
import produce from "immer";

import "./styles.css";

export const [useStore] = create(set => ({
  count: { a: { b: 1, c: 2, d: 3 } },
  inc: fn => set(produce(fn)),
  dec: fn => set(produce(fn))
}));
