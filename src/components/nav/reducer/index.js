export function init(cur) {
  return { cur }
}

export function reducer(state, action) {
  switch (action.type) {
    case 'init': return init(action.cur)
    default:
      throw new Error('请传入操作类型type!');
  }
}