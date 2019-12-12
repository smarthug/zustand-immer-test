import React from "react";
import { useStore } from "./global";

export default function CompA() {
  const d = useStore(state => state.count.a.d);

  return <div>{d}</div>;
}
