## useState

### 基本用法
```javascript
const [state, setState] = useState(initialState);
```
useState返回一个 state，以及更新 state 的函数。

在初始渲染期间，返回的状态 (state) 与传入的第一个参数 (initialState) 值相同。

setState 函数用于更新 state。它接收一个新的 state 值并将组件的一次重新渲染加入队列。

### setState
```javascript
setState(newState);
```
* setState方法是异步执行的，要取到最新的state值需要在useEffect中获取
* setState会重新渲染组件
* setState会将传入的参数替换掉原有的state
* 如果setState的返回值与当前 state 完全相同，则随后的重渲染会被完全跳过。（React 使用 Object.is 比较算法 来比较 state。）
* 如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。该函数将接收先前的state，并返回一个更新后的值。比如要使当前state在之前的state基础上+1，可以:
```javascript
setState(prevState => prevState + 1);
```

### 惰性初始state
initialState 参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。如果初始 state 需要通过复杂计算获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用：
```javascript
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```