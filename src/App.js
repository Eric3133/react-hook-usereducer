
import './App.css';
import { useReducer } from 'react';

// 1 定义一个reducer函数 根据不同的action 返回不同的状态
function reducer (state, action) {
  switch(action.type){
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
      // 传参 payload
    case 'SET':
      return action.payload;
    default:
      return state;
  }
}
function App() {

  // 组件中调用useReducer函数  useReducer(reducer, 初始状态值) => 返回一个数组 第一个元素是状态 第二个元素是dispatch函数
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <div className="App">
      this is react app

      {/* 3 diaoyong dispatch函数 传递一个action对象  通知reducer产生一个新的状态 使用这个新的状态渲染UI */}
      <button onClick = {() => {
        dispatch({type: 'DEC'})
      }}>-</button>
      {state}
      <button onClick = {() => {
        dispatch({type: 'INC'})
      }}>+</button>
      <button onClick = {() => {
        dispatch({type: 'default'})
      }}>reset</button>
      <button onClick = { () => {
        dispatch({type: 'SET', payload: 100})
      }}>update</button>
    </div>
  );
}

export default App;
