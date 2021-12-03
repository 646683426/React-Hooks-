/**
 * useCallback返回了一个被缓存的回调函数
 */
import { Button } from "antd";
import { useEffect, useState, useCallback } from "react";
import { useStore } from '../../store';

function Child({ even }) {
  // console.log('child-render');
  /**
   * 子组件useEffect
   * 只有当父组件传过来的函数发生改变，才打印
   */
  useEffect(() => {
    console.log('child-useEffect')
  }, [even])
  return (
    <div>
      <Button onClick={even}>
        num+1
      </Button>
    </div>
  )
}

export default function Parent() {
  const { app } = useStore();
  const { num, changeNum } = app;
  const [count, setCount] = useState(0);
  console.log('parent-num-----', num);

  /**
   * 每次点击时都能拿到点击时的num,且在重新渲染时，
   * 创建一个新的函数传入子组件，
   * 执行子组件useEffect中的回调
   */
  const change = async () => {
    const res = await changeNum(num + 1);
    console.log('useCallback-num', num);
    setCount(res);
  };

  /**
   * 用useCallback包裹,但是没有设置依赖,
   * 所以每次父组件重新渲染都会创建一个新的函数传入子组件,
   * 执行子组件useEffect中的回调
   */
  // const change = useCallback(async () => {
  //   const res = await changeNum(num + 1);
  //   console.log('useCallback-num', num);
  //   setCount(res);
  // });

  /**
   * 设置空数组作为依赖,和useEffect类似,只会在组件第一次渲染时候执行,
   * 只能拿到最开始的num,不会执行子组件useEffect中的回调
   * (count没有变化,为什么会多触发一次parent渲染?)
   */
  // const change = useCallback(async () => {
  //   const res = await changeNum(num + 1);
  //   console.log('useCallback-num', num);
  //   setCount(res);
  // }, []);
  // useEffect(() => {
  //   console.log('count----', count);
  // }, [count])

  /**
   * 每次点击时都能拿到点击时的num,每当num变化时，
   * 传入子组件的函数都是最新的，
   * 所以导致child的useEffect执行。
   */
  // const change = useCallback(async () => {
  //   const res = await changeNum(num + 1);
  //   console.log('useCallback-num', num);
  //   setCount(res);
  // }, [changeNum, num]);
  return (
    <div>
      <h2>num: {num}</h2>
      <Child even={change} />
    </div>
  );
}