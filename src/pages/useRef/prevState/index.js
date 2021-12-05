/**
 * useRef()可以很方便地保存任何可变值。
 * 当 ref 对象内容发生变化时，useRef 并不会通知你。
 * 变更 .current 属性不会引发组件重新渲染。
 */
import { useRef, useState, useEffect } from "react";
import { Button } from "antd";

export default function Counter() {
  const [count, setCount] = useState({ a: 0 });
  const prevCount = usePrevious(count);
  return (
    <div>
      <h2>
        现在点击次数: {count.a}, 上一次点击次数: {prevCount.a}
      </h2>
      <div>
        <Button onClick={() => setCount(count => { return { a: count.a + 1 } })}>点击次数+1</Button>
      </div>
    </div >
  );
}

function usePrevious(value) {
  // useRef 会在每次渲染时返回同一个 ref 对象。
  const ref = useRef(value);
  /**
   * useEffect在render之后才执行，所以先return上一次的值，再赋新的值
   */
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}