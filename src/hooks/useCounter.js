import { useState } from "react";

export default function useCounter(initialValue = 100) {
  const [count, setCount] = useState(initialValue);

  function inc() {
    setCount(count + 1);
  }

  function dec() {
    setCount(count - 1);
  }

  return [count, inc, dec];
}
