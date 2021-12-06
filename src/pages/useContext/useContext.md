## useContext

接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。当前的 context 值由上层组件中距离当前组件最近的 MyContext.Provider 的 value 决定。

```javascript
const MyContext = React.createContext(); // 创建一个Context对象
function Parent() {
  const [state, setState] = useState(0);
  return (
    {/* Provider 接收一个 value 属性，传递给消费组件。
      一个 Provider 可以和多个消费组件有对应关系。
      多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。 
      当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。*/}
    <MyContext.Provider value = {{ state }}}>
      <Child />
    </MyContext.Provider>
  )
}

function Child() {
  const value = useContext(MyContext); // 获取MyContext.Provider的value
  return (
    <div>
      {value.state}
    </div>
  )
}
```

当组件上层最近的 MyContext.Provider 更新时，该 Hook 会触发重渲染，并使用最新传递给 MyContext provider 的 context value 值。即使祖先使用 React.memo，也会在组件本身使用 useContext 时重新渲染。