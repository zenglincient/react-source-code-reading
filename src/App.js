import logo from './logo.svg';
import './App.css';
import React, {useState, createElement, } from './react.development'
import { MyClassComponent, MyFunctionalComponent } from './component/hooksAndClass';

const El = () => {
  const [name, setName] = useState('sss')
  return <span>{name}</span>
}

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <p>{count}</p>
      <El />
      <button onClick={() => {
        setCount(count + 1)
        console.log(<El />)
      }}>按钮</button>
      <MyClassComponent />
      <MyFunctionalComponent />
    </div>
  );
}

export default App;

