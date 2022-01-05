## useRef

```javascript
const refContainer = useRef(initialValue);
```

useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内持续存在。

因为它创建的是一个普通 Javascript 对象，所以它可以很方便地保存任何可变值。而 useRef() 和自建一个 {current: ...} 对象的唯一区别是，useRef 会在每次渲染时返回同一个 ref 对象。

当 ref 对象内容发生变化时，useRef 并不会通知你。变更 .current 属性不会引发组件重新渲染。

### 自定义 Hook 记录上一个state

```javascript
function usePrevious(value) {
  // useRef 会在每次渲染时返回同一个 ref 对象。
  // 返回的 ref 对象在组件的整个生命周期内持续存在。
  // 也就是说，返回的 ref 对象并不会在组件重新渲染之后被重新初始化赋值。
  const ref = useRef(value);
  /**
   * useEffect在render之后才执行，所以先return上一次的值，再赋新的值
   */
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function Counter() {
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
    </div>
  );
}
```