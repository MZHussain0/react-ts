import Heading from "./components/Heading";
import Section from "./components/Section";
import { useState } from "react";
import Counter from "./components/Counter";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(1);
  return (
    <div className="App">
      <Heading title={"Homepage"} />
      <Section>This is my section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["Coffee", "chai", "toast"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </div>
  );
}

export default App;
