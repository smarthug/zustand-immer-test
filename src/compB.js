import React from "react";
import { useStore } from "./global";

export default function CompA() {
  const c = useStore(state => state.count.a.c);

  return <div>{c}</div>;
}
