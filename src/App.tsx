import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="w-screen h-screen">
      <div>My Weather app {count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
