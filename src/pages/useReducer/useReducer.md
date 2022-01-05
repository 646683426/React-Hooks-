<!--
 * @Author: your name
 * @Date: 2021-12-03 14:27:33
 * @LastEditTime: 2021-12-07 08:41:37
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \react_deep\src\pages\useReducer\useReducer.md
-->
## useReducer

useReducer接收3个参数
* 第一个参数接收一个形如(state, action) => newState 的 reducer 函数
* 第二个参数接收一个 state 的初始值
* 可以将 init 函数作为第三个参数传入，初始化时的state将会被设置为 init(第二个参数)

### reducer

```javascript
function init(initialCount) {
  return {count: initialCount};
}

// state 为改变之前的 state , return 返回作为最新的 state , action 为 dispatch 中传入的参数
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

```