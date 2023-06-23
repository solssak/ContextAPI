import { useCounterState } from "../../App";

const Value = () => {
  const [counter] = useCounterState();
  return <h1>{counter}</h1>;
};

export default Value;
