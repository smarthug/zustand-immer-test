import React from "react";
import { useStore } from "./global";

export default function CompA() {
  const b = useStore(state => state.count.a.b);

  return <div>{b}</div>;
}
