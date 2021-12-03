// useEffect 组件卸载后清理ref.current上的事件监听
import { useState, useEffect, useRef } from "react";

function useOnScreen(ref, rootMargin = "0px") {
  // 用于存储元素是否可见的状态
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const ele = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        //当观察者回调触发时更新我们的状态
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    // 为防止内存泄露，清除函数会在组件卸载时执行
    return () => {
      /**
       * 执行时ref.current会变为null,所以要移除ref对应元素上的监听事件，就需要将ref.current在清除函数执行前
       * 复制到一个变量上，并在清理函数中使用该变量
       */
      console.log('卸载前执行---', ref, ele);
      observer.unobserve(ele);
      // observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

export default function useFirst() {
  const [count, setCount] = useState(0);
  const ref = useRef();
  // 调用传入ref和root边距的钩子，大于300px时元素可见
  const onScreen = useOnScreen(ref, "-300px");

  useEffect(() => {
    console.log('before interval')
    const timer = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => {
      console.log('清除定时器oooo');
      clearInterval(timer);
    }
  }, []);

  return (
    <div style={{ marginTop: '0.5em' }}>
      <h2>useEffect 组件卸载后清理ref.current上的事件监听</h2>
      <h2>count: {count}</h2>
      <div style={{ height: "100vh" }}>
        <h1>在下一块文字后滚动👇</h1>
      </div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          backgroundColor: onScreen ? "#23cebd" : "#efefef",
        }}
      >
        {onScreen ? (
          <div>
            <h1>略略略</h1>
            <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
          </div>
        ) : (
          <h1>再往下滚300px👇</h1>
        )}
      </div>
    </div>
  )
}