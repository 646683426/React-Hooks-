/**
 * useMemo返回了一个被缓存的任何值
 */
import { Button } from "antd";
import { memo, useEffect, useState, useMemo } from "react";
import { useStore } from '../../store';

function Child({ num }) {
  console.log('child-render');
  return (
    <h2>
      num:{num}
    </h2>
  )
}
Child = memo(Child);

export default function Parent() {
  const [value, setValue] = useState(0);

  const num = value;

  /**
   * 不指定依赖,当每次重新渲染时都能拿到最新值
   */
  // const num = useMemo(() => value);

  /**
   * 设置空数组作为依赖,和useEffect类似,只会在组件第一次渲染时候执行,
   * 只能拿到最开始的value
   */
  // const num = useMemo(() => value, []);

  /**
   * 设置value作为依赖,每次value变化时,获取到最新值
   */
  // const num = useMemo(() => value, [value]);
  return (
    <div>
      <Child num={num} />
      <Button onClick={() => setValue(value + 1)}>
        value+1
      </Button>
    </div>
  )
}