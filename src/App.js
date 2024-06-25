import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  // 처음 랜더 될 때 한 번만 실행
  useEffect(() => {
    console.log("I run only once");
  }, []);
  // keyword가 변경될 때마다 실행
  useEffect(() => {
    console.log("I run whe 'keyword' changes");
  }, [keyword]);
  return (
    <div>
      <input type="text" value={keyword} onChange={onChange} />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
