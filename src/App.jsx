import Hello from "./Hello";   // import your Hello component
import Random from "./Random";
function App() {
  return (
    <div>
      <h1>(hello world)</h1>
      <Hello />   {/* using your Hello component */}
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
    </div>
  );
}

export default App;
