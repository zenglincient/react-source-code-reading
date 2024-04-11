import logo from './logo.svg';
import './App.css';
import React, {useState, createElement, } from './react.development'
import { MyClassComponent, MyFunctionalComponent } from './component/hooksAndClass';


function App() {
  const [count, setCount] = useState(0)
  const Say = createElement('span', {}, 'hello')
  console.log(Say)
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => {
        setCount(count + 1)
      }}>按钮</button>
      <MyClassComponent />
      <MyFunctionalComponent />
    </div>
  );
}

export default App;

