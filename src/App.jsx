import { useState } from "react";

function App() {
  const [state, setState] = useState("Ahmet Demir");
  let fullName = "Ahmet Demir";

  function handleClick() {
    fullName = "Emin Başbayan";
    console.log(fullName);
    setState(fullName);
  }

  console.log("render!");

  return (
    <div className="app">
      <p>{state}</p>
      <button onClick={handleClick}>İsmi Değiştir!</button>
    </div>
  );
}

export default App;
