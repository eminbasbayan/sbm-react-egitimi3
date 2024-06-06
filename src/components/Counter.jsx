import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Ahmet");

  // useEffect(() => {
  //   console.log("deps array yazmazsan her state güncellendiğinde çalışır!");
  // });

  useEffect(() => {
    console.log("deps array'e göre state güncellendiğinde çalışır!");
  }, [title, count]);

  function arttir() {
    setCount(count + 1);
  }

  function azalt() {
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <button onClick={arttir}>+</button>
      <b>{count}</b>
      <button onClick={azalt}>-</button>
      <br />
      <br />
      <br />
      <p>{title}</p>
      <button onClick={() => setTitle("Emin")}>İsmi Değiştir</button>
    </div>
  );
}

export default Counter;
