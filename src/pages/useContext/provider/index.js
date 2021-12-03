import React, { memo, useContext, useState } from 'react';
import { Button } from 'antd';

const MyContext = React.createContext();
/**
 * 当组件上层最近的 <MyContext.Provider> 更新时，useContext会触发重渲染，
 * 并使用最新传递给 MyContext provider 的 context value 值。
 * 即使祖先使用 React.memo，也会在组件本身使用 useContext 时重新渲染。
 */

function Child1() {
  const value = useContext(MyContext);
  console.log('Child1:无memo，调用useContext---更新');
  return (
    <>
      <h2>
        Child1(无memo，调用useContext)
      </h2>
    </>
  );
}

function Child2() {
  console.log('Child2:无memo,没有调用useContext---更新');
  return <h2>Child2(无memo,没有调用useContext)</h2>;
}

function Child3() {
  console.log('Child3:有memo，没有调用useContext---更新');
  return <>
    <h2>
      Child3(有memo，没有调用useContext)
    </h2>
    <Child4 />
  </>;
}
/**
 * React.memo:如果组件在相同 props 的情况下渲染相同的结果，通过将组件包装在 React.memo 中调用
 * React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。
 * React.memo 仅检查 props 变更,如果组件中拥有 useState，useReducer 或 useContext 的 Hook，
 * 当 state 或 context 发生变化时，它仍会重新渲染。默认情况下其只会对复杂对象做浅层对比。
 */
Child3 = memo(Child3);

function Child4() {
  const value = useContext(MyContext);
  console.log('Child4:自身无memo,祖先Child3有memo,调用useContext---更新');
  return <h2>Child4(自身无memo,祖先Child3有memo,调用useContext)</h2>;
}

export default function Context() {
  const [value, setValue] = useState('init');
  console.log('parent');
  return (
    <div style={{ marginTop: '0.5em' }}>
      <h2>value: {value}</h2>
      {console.log("parent-render")}
      <Button
        onClick={() => {
          setValue(`${Date.now()}_newValue`)
        }}
        style={{ marginBottom: '0.5em' }}
      >
        改变value
      </Button>
      <MyContext.Provider value={{ value, setValue }}>
        <Child1 />
        <Child2 />
        <Child3 />
      </MyContext.Provider>
    </div>
  );
}
// Context = memo(Context);