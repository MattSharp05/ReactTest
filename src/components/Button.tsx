import type { JSX } from "react";
import { useState } from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

export function Button({ title, onClick }: ButtonProps): JSX.Element {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    onClick?.();
    setCount(count + 1);
  }

  console.log(title);
  return (
    <button onClick={handleClick}>
      {title} <br />
      number of clicks: {count}
    </button>
  );
}
