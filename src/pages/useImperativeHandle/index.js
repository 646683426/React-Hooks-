/**
 * useImperativeHandle 可以在使用 ref 时自定义暴露给父组件的实例值。
 * useImperativeHandle在当前组件render后执行。
 */
import { Button } from 'antd';
import { useImperativeHandle, useRef, useState, forwardRef } from 'react';

function Child(props, ref) {
  const inputRef = useRef('');
  const [value, setValue] = useState();

  /**
   * 没有设置依赖，每当重新渲染时，useImperativeHandle 都会执行， 
   * 且能拿到 state中最新的值, 父组件调用传入的方法也是最新。
   */
  // useImperativeHandle(ref, () => {
  //   console.log('useImperativeHandle');
  //   return {
  //     value,
  //     focus: () => {
  //       inputRef.current.focus();
  //     }
  //   }
  // });

  /**
   * 设置依赖为空数组，只有初次渲染时，useImperativeHandle 才会执行，
   * 拿到的值为state中的初始值，父组件调用传入的方法也是最开始的方法
   */
  // useImperativeHandle(ref, () => {
  //   console.log('useImperativeHandle');
  //   return {
  //     value,
  //     focus: () => {
  //       inputRef.current.focus();
  //     },
  //   }
  // }, []);

  /**
   * 设置依赖为state中的value，当value更新时，useImperativeHandle 才会执行，
   * 且能拿到 state中value最新的值, 父组件调用传入的方法也是最新。
   */
  useImperativeHandle(ref, () => {
    console.log('useImperativeHandle');
    return {
      value,
      focus: () => {
        inputRef.current.focus();
      },
    }
  }, [value]);
  console.log('Child-render');
  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        ref={inputRef}
      />
    </div>
  )
}
Child = forwardRef(Child);

export default function Parent() {
  const ChildRef = useRef();
  return (
    <div style={{ marginTop: '0.5em' }}>
      <Child ref={ChildRef} />
      <Button
        onClick={() => {
          ChildRef.current.focus()
        }}
        style={{ marginTop: '0.5em', marginRight: 20 }}
      >
        聚焦
      </Button>
      <Button onClick={() => {
        console.log('parent-ChildRef', ChildRef.current);
      }}>
        打印
      </Button>
    </div>
  )
}