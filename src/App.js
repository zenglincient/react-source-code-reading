import logo from './logo.svg';
import './App.css';
import React, {useState} from './react.development'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => {
        setCount(count + 1)
      }}>按钮</button>
    </div>
  );
}

export default App;

