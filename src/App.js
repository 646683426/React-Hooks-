import {
  useReducer,
  createContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
  useImperativeHandle,
  forwardRef,
  memo,
  useContext,
} from 'react';
import { useStore } from './store';

// useCallback和useMemo
// const ChildComp = memo(({ name, onClick }) => {
//   console.log('render child-comp ...');
//   return <>
//     <div>Child Comp ... {name.name}:{name.age}</div>
//     <button onClick={() => onClick('hello')}>改变 name 值</button>
//   </>
// })

// function App() {
//   const [count, setCount] = useState(0);
//   const increment = () => setCount(count + 1);
//   const divRef = useRef(null);

//   const [name, setName] = useState('hi~');
//   const [age, setAge] = useState(20);
//   const changeName = useCallback((newName) => setName(newName), []); // 父组件渲染时会创建一个新的函数

//   const userInfo = () => {
//     return { name, age }
//   }
//   const info = useMemo(userInfo, [name, age]);

//   return (
//     <div>
//       <button ref={divRef} onClick={increment}>点击次数：{count}</button>
//       <ChildComp name={info} onClick={changeName} />
//     </div>
//   );
// }




// function init(initCount) {
//   return { count: initCount, c: initCount, name: 'cx', a: 0 };
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'add': return { ...state, count: state.count + 1 };
//     case 'reduce': return { ...state, count: state.count - 1 };
//     case 'changeName': return { ...state, name: action.newName };
//     default: return init(1);
//   }
// }

// function Button({ dispatch, setName }) {
//   console.log('子组件更新');
//   return (
//     <>
//       <button onClick={() => dispatch({ type: 'add' })}>
//         +
//       </button>
//       <button onClick={() => dispatch({ type: 'reduce' })}>
//         -
//       </button>
//       <button onClick={() => dispatch('11')}>
//         重置
//       </button>
//       <button onClick={() => setName('cm')}>
//         改名
//       </button>
//     </>
//   )
// }
// Button = memo(Button);

// function App() {
//   const { app } = useStore();
//   const { a, c } = app;
//   const [state, dispatch] = useReducer(reducer, a, init);
//   console.log('yyyyy', a)
//   const changeName = useCallback(async (newName) => {
//     await c(100);
//     dispatch({ type: 'changeName', newName });
//   }, [state.name]);
//   return (
//     <>
//       Count: {state.count}
//       <Button dispatch={dispatch} setName={changeName} />
//       name: {state.name}
//       ----
//       app.a:{app.a}
//       ----
//       a:{a}
//     </>
//   );
// }

// export default App;