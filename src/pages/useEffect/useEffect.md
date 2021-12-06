## useEffect

useEffect 可以在函数组件中执行副作用操作。

数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用。

可以把 useEffect Hook 看做 class 的 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个生命周期函数的结合。

### 基本用法

useEffect 会在每次渲染后都执行传入的 effect 函数，包括首次渲染，在 useEffect 中可以直接访问组件内部最新的state变量。

```javascript
function Example() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log(state);
  });
}
```

### 需要清除的 effect

如果在 effect 中使用了一些需要清除的副作用，例如订阅外部数据源。这种情况下，清除工作是非常重要的，可以防止引起内存泄露。

这种情况下，可以在 effect 中返回一个函数。因为 effect 在每次渲染后都会执行，所以在执行当前 effect 之前会对上一个 effect 进行清除。

```javascript
function Example(props) {
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
}
```

### 可以使用多个 useEffect 实现关注点分离

Hook 允许我们按照代码的用途分离他们，就像你可以使用多个 useState 一样，你也可以使用多个 useEffect 。这会将不相关逻辑分离到不同的 effect 中。

React 将按照 effect 声明的顺序依次调用组件中的每一个 effect。

```javascript
function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  // ...
}
```

### effect 执行的时机

在某些情况下，每次渲染后都执行清理或者执行 effect 可能会导致性能问题。只要传递数组作为 useEffect 的第二个可选参数即可控制 effect 执行的时机。

```javascript

useEffect(() => {
  console.log('欢迎光临');
  return () => {
    console.log('一路走好');
  }
}, []); // 仅在组件挂载和卸载时执行

useEffect(() => {
  console.log(count, state);
}, [count, state]); // 仅在 count 或 state 更改时更新

useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
}, [props.friend.id]); // 仅在 props.friend.id 发生变化时，重新订阅
```

如果要使用此优化方式，请确保数组中包含了所有外部作用域中会随时间变化并且在 effect 中使用的变量，否则会引用到先前渲染中的旧变量。