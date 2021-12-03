import { useReducer } from "react";
import { Button, Space } from "antd";

const initData = {
  sum: 0,
  num: 0,
}

function init(initData) {
  return initData
}

function reducer(state, action) {
  switch (action.type) {
    case 'setNum':
      return { ...state, num: action.payload };
    case 'increment':
      return { ...state, sum: state.sum + state.num };
    case 'decrement':
      return { ...state, sum: state.sum - state.num };
    case 'ride':
      return { ...state, sum: state.sum * state.num };
    case 'division':
      return { ...state, sum: state.sum / state.num };
    case 'reset':
      return { ...init(initData), num: state.num };
    default:
      throw new Error();
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initData, init);
  return (
    <div style={{ marginTop: 20 }}>
      <h2>
        sum:{state.sum}
      </h2>
      <input
        onChange={(e) => dispatch({ type: 'setNum', payload: Number(e.target.value) })}
        type={'number'}
      />
      <div style={{ marginTop: 20 }}>
        <Space size={[20, 20]}>
          <Button onClick={() => dispatch({ type: 'increment' })}>
            加
          </Button>
          <Button onClick={() => dispatch({ type: 'decrement' })}>
            减
          </Button>
          <Button onClick={() => dispatch({ type: 'ride' })}>
            乘
          </Button>
          <Button onClick={() => dispatch({ type: 'division' })}>
            除
          </Button>
          <Button onClick={() => dispatch({ type: 'reset' })}>
            重置sum
          </Button>
        </Space>
      </div>
    </div>
  )
}