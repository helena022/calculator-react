import Calculator from "./Calculator";
import { CalculatorProvider } from "./CalculatorContext";

function App() {
  return (
    <div className="App">
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </div>
  );
}

export default App;
