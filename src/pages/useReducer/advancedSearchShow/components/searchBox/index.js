import { createContext, useContext, useEffect, useReducer } from 'react';
import { Button } from 'antd';
import reducer from '../../reducer';
import SearchInput from "./searchInput";
import SearchBody from "./searchBody";

// createContext会创建一个Context对象
// 当 React 渲染一个订阅了这个 Context 对象的组件，
// 这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
const searchContext = createContext();

export function useSearchContext() {
  // 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。
  // 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。
  // 当组件上层最近的 < MyContext.Provider > 更新时，该 Hook 会触发重渲染，
  // 并使用最新传递给 MyContext provider 的 context value 值。
  // useContext 的参数必须是 context 对象本身：
  return useContext(searchContext);
}

// props 中接收config与请求的方法
export default function SearchBox({ config, req }) {
  // useReducer接收3个参数
  // 第一个参数接收一个形如(state, action) => newState 的 reducer函数
  // state为改变之前的state,return返回作为最新的state,action为dispatch中传入的参数
  // 第二个参数接收一个state的初始值
  // 可以将init函数作为第三个参数传入，初始化时的state将会被设置为init(第二个参数)
  const [state, dispatch] = useReducer(reducer, { pageNum: 1, pageSize: 10 });
  useEffect(() => {
    req(state);
  }, [state])
  return (
    <div>
      {/* Provider 接收一个 value 属性，传递给消费组件。
      一个 Provider 可以和多个消费组件有对应关系。
      多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。 
      当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。*/}
      <searchContext.Provider value={{ state, dispatch }}>
        <SearchInput />
        <SearchBody config={config} />
        <Button onClick={() => dispatch({ type: 'reset' })}>重置条件</Button>
      </searchContext.Provider>
    </div>
  )
}