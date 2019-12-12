import React from "react";
import ReactDOM from "react-dom";

import CompA from "./compA";
import CompB from "./compB";
import CompC from "./compC";

import "./styles.css";

import { useStore } from "./global";

function Counter() {
  const inc = useStore(state => state.inc);

  function incC() {
    inc(draft => {
      draft.count.a.b += 999;
    });
  }

  function decC() {
    dec(draft => {
      draft.count.a.c -= 100;
    });
  }

  return (
    <div class="counter">
      <CompA />
      <CompB />
      <CompC />
      <button onClick={incC}>up</button>
      <button onClick={decC}>down</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter />, rootElement);
