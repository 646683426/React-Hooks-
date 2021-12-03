import { useReducer, createContext, useContext } from "react";

import { initData } from './initData';
import reducer from './reducer';
import init from './init';
import Child1 from './components/child1';
import Child2 from './components/child2';

const myContext = createContext()

export default function useReducerContext() {
  const [state, dispatch] = useReducer(reducer, initData, init);
  return (
    <div>
      <h2>sum:{state.sum}</h2>
      <myContext.Provider value={{ state, dispatch }}>
        <Child1 />
        <Child2 />
      </myContext.Provider>
    </div>
  )
}

export const useStore = () => useContext(myContext)