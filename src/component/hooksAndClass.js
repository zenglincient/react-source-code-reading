import React, { Component } from '../react.development';
import { useState, useEffect, useRef } from '../react.development';
export class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 初始状态
      key: '初始'
    };
    this.myRef = React.createRef();
  }

  myMethod = () => {
    this.setState({ key: 'newValue' });
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h4>class</h4>
        <div ref={this.myRef}>{this.state.key}</div>
        <button onClick={this.myMethod}>点击我</button>
      </div>
    );
  }
}



export const MyFunctionalComponent = (props) => {
  const [state, setState] = useState({
    key: 'hooks'
  });
  const myRef = useRef(null);

  const myMethod = () => {
    setState({ key: 'newValue' });
    // 模拟 forceUpdate，通常不建议这样做
    setState((prevState) => ({ ...prevState }));
  };

  return (
    <div>
      <h4>hooks</h4>
      <div ref={myRef}>{state.key}</div>
      <button onClick={myMethod}>点击我</button>
    </div>
  );
}
