// setState方法
import { useState } from "react";
import { Button, Space } from 'antd';

export default function SetState() {
  /**
   * setState方法是异步执行的
   * setState会重新渲染组件
   * setState会替换掉原有的state
   * 如果setState的返回值与当前 state 完全相同，则随后的重渲染会被完全跳过。
   */
  const [data, setData] = useState({
    name: 'cx',
    age: 0,
  });
  return (
    <div style={{ marginTop: '0.5em' }}>
      {console.log('render')}
      <h2>name: {data.name}</h2>
      <h2>age: {data.age}</h2>
      <Space size={[20, 20]}>
        <Button onClick={() => { setData({ ...data, age: data.age + 1 }); console.log(data) }}>age+1</Button>
        <Button onClick={() => { setData({ age: data.age + 1 }); console.log(data) }}>单独让age+1</Button>
        <Button onClick={() => { setData(data) }}>data不变</Button>
      </Space>
    </div>
  )
}