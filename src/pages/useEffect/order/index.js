// useEffect 调用顺序
import { useEffect, useState } from "react";
import { Button, Space } from 'antd';

export default function SetState() {
  /**
   * useEffect 是在渲染之后执行的
   * 会按照 effect 声明的顺序依次调用组件中的每一个 effect
   * effect在没有任何依赖的情况下，渲染后每次都按照顺序执行。
   */
  const [data, setData] = useState({
    name: 'cx',
    age: 0,
  });

  useEffect(() => {
    console.log('useEffect----无依赖');
    return () => {
      console.log('清除useEffect----无依赖');
    }
  })
  useEffect(() => {
    console.log('useEffect----[]');
    return () => {
      console.log('清除useEffect----[]');
    }
  }, [])
  useEffect(() => {
    console.log('useEffect----data', data);
    //当data发生改变,组件渲染完之后执行,会在执行当前 effect 之前对上一个 effect 进行清除。
    return () => {
      console.log('清除useEffect----data', data);
    }
  }, [data])
  useEffect(() => {
    console.log('useEffect----data.name', data.name);
    return () => {
      console.log('清除useEffect----data.name', data.name);
    }
  }, [data.name])
  return (
    <div style={{ marginTop: '0.5em' }}>
      {console.log('render')}
      <h2>name: {data.name}</h2>
      <h2>age: {data.age}</h2>
      <Space size={[20, 20]}>
        <Button onClick={() => { setData({ ...data, age: data.age + 1 }) }}>age+1</Button>
        <Button onClick={() => { setData({ age: data.age + 1 }) }}>单独让age+1</Button>
      </Space>
    </div>
  )
}