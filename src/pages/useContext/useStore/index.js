import { useStore } from '../../../store';
import { Button } from 'antd';
import { useState } from 'react';

export default function Store() {
  /**
   * 当class app中的数值更新，怎么通知视图重新渲染?
   */
  const store = useStore();
  const { app } = store;
  const { num, changeNum } = app;
  const [count, setCount] = useState(num + 1);
  return (
    <div style={{ marginTop: '0.5em' }}>
      <h2>app.num: {num}</h2>
      <Button onClick={async () => {
        const res = await changeNum(count);
        setCount(count + 1);
        console.log('res---', res);
      }}>
        app.num+1
      </Button>
    </div>
  )
}