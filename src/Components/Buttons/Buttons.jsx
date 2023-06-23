import { useCounterState } from "../../App";

const Buttons = () => {
  const [, setCounter] = useCounterState();
  const increase = () => {
    setCounter((prev) => prev + 1);
  };
  const decrease = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default Buttons;
