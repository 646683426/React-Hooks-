import { initData } from "../initData";
import init from '../init';

export default function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, sum: state.sum + action.payload };
    case 'decrement':
      return { ...state, sum: state.sum - action.payload };
    case 'ride':
      return { ...state, sum: state.sum * action.payload };
    case 'division':
      return { ...state, sum: state.sum / action.payload };
    case 'reset':
      return { ...init(initData) };
    default:
      throw new Error();
  }
}