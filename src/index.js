import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import Router from './router/index';
import { stores, storeContext } from './store/index';

const styles = require.context('./', true, /\.css$/);
styles.keys().forEach((key) => {
  styles(key);
});
ReactDOM.render(
  <React.StrictMode>
    <storeContext.Provider value={{ ...stores }}>
      <Router />
    </storeContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);