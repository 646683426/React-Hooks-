import { Button } from 'antd';
import { memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useStore } from '../../store';


function useFirst() {
  const [re, setRe] = useState(0);
  const navigate = useNavigate();
  const store = useStore();
  const { app } = store;
  const { a, b, c } = app;

  function toFirst() {
    navigate('/first');
  }

  const changeA = useCallback(async (x) => {
    const res = await c(x);
    // if (a !== res) {
    //   setRe(re => re + 1);
    // }
  }, [a, b])

  return (
    <div>
      {console.log('我又刷新了')}
      这是第二个页面a:{a}
      <Button onClick={toFirst}>第一个页面</Button>
      <Button onClick={() => changeA(a)}>更改a</Button>
    </div>
  )
}
useFirst = memo(useFirst);
export default useFirst;