import { createContext, useContext } from 'react';

// const storeFiles = require.context('./stores', true, /\.js$/);

// const stores = {};

// storeFiles.keys().forEach((key) => {
//   const file = key.split('/');
//   file.shift();
//   stores[file.join('.').replace(/\.js$/g, '')] = storeFiles(key).default;
// })

// const storeContext = createContext({
//   ...stores
// });

// const useStore = () => useContext(storeContext);

// export { stores, storeContext, useStore };



const storeFiles = require.context('./stores', true, /\.js$/);

const stores = {};

storeFiles.keys().forEach((key) => {
  const keyArr = key.split('/');
  keyArr.shift();
  stores[keyArr[0].replace(/\.js$/g, '')] = storeFiles(key).default;
})

const storeContext = createContext(stores);

const useStore = () => useContext(storeContext);

export { stores, storeContext, useStore }