// import { useState } from 'react';

const timeout = async (x) => {
  const res = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(x);
    }, 200);
  }).then(x => x);
  return res;
};

class app {
  num = 1;
  changeNum = async (x) => {
    const res = await timeout(x);
    this.num = res;
    return res;
  }
}
export default new app();

// export default function App() {
//   const [a, setA] = useState(0);
//   return <h2>{a}</h2>
// }