import Value from "./Components/Value/Value";
import Buttons from "./Components/Buttons/Buttons";
import { useState, createContext, useContext } from "react";

const CounterContext = createContext();

// Provider 설정
const CounterProvider = ({ children }) => {
  const counterState = useState(1);
  return (
    <CounterContext.Provider value={counterState}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom Hook
export const useCounterState = () => {
  const value = useContext(CounterContext);
  if (value === undefined) {
    throw new Error("Error");
  }
  return value;
};

function App() {
  return (
    <CounterProvider>
      <div>
        <Value />
        <Buttons />
      </div>
    </CounterProvider>
  );
}

export default App;
