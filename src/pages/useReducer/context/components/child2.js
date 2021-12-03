import { Button, Space } from "antd";
import { useState } from "react";
import { useStore } from '../index';

export default function Child2() {
  const { state, dispatch } = useStore();
  const [value, setValue] = useState();
  return (
    <div style={{ marginTop: 20, border: '1px solid rgb(121, 182, 242)' }}>
      <h2>
        Child2
      </h2>
      <h2>
        sum:{state.sum}
      </h2>
      <input
        onChange={(e) => setValue(Number(e.target.value))}
        type={'number'}
      />
      <div style={{ marginTop: 20 }}>
        <Space size={[20, 20]}>
          <Button onClick={() => dispatch({ type: 'increment', payload: value })}>
            加
          </Button>
          <Button onClick={() => dispatch({ type: 'decrement', payload: value })}>
            减
          </Button>
          <Button onClick={() => dispatch({ type: 'ride', payload: value })}>
            乘
          </Button>
          <Button onClick={() => dispatch({ type: 'division', payload: value })}>
            除
          </Button>
          <Button onClick={() => dispatch({ type: 'reset', payload: value })}>
            重置sum
          </Button>
        </Space>
      </div>
    </div>
  )
}