// state为改变之前的state,return返回作为最新的state,action为dispatch中传入的参数
export default function reducer(state, action) {
  switch (action.type) {
    case 'setKeyword':
      return { ...state, keyword: action.payload };
    case 'setValue':
      if (state[action.stateName] === action.payload) {
        const newState = {};
        for (let i in state) {
          if (state[i] !== action.payload) {
            newState[i] = state[i];
          }
        }
        return { ...newState };
      }
      return { ...state, [action.stateName]: action.payload };
    case 'reset':
      return { pageNum: 1, pageSize: 10 };
    default:
      throw new Error('请传入正确的type!');
  }
}