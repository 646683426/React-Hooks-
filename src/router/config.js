import { lazy } from 'react';
// lazy 接受一个函数，这个函数需要动态调用 import()。
// 它必须返回一个 Promise，该 Promise 需要 resolve 一个默认导出的 React 组件。
// 搭配上Suspense就可以实现路由懒加载
const home = lazy(() => import('../pages/home'));
// useState
const setState = lazy(() => import('../pages/useState/setState'));
// useEffect
const useEffectHome = lazy(() => import('../pages/useEffect'));
const useEffectReturn = lazy(() => import('../pages/useEffect/return'));
const useEffectOrder = lazy(() => import('../pages/useEffect/order'));
// useContext
const useContextProvider = lazy(() => import('../pages/useContext/provider'));
const useContextUseStore = lazy(() => import('../pages/useContext/useStore'));
// useRef
const useRefInputFocus = lazy(() => import('../pages/useRef/inputRef'));
const useRefusePrevious = lazy(() => import('../pages/useRef/prevState'));
// useReducer
const useReducerNoContext = lazy(() => import('../pages/useReducer/noContext'));
const useReducerContext = lazy(() => import('../pages/useReducer/context'));
const Search = lazy(() => import('../pages/useReducer/advancedSearchShow'));
const Expert = lazy(() => import('../pages/useReducer/advancedSearchShow/components/expert'));
const Talent = lazy(() => import('../pages/useReducer/advancedSearchShow/components/talent'));
// useCallback
const useCallbackHome = lazy(() => import('../pages/useCallback'));
// useMemo
const useMemoHome = lazy(() => import('../pages/useMemo'));
// useImperativeHandle
const useImperativeHandleHome = lazy(() => import('../pages/useImperativeHandle'));
// routerShow
const routerShow = lazy(() => import('../pages/routerShow'));
const routerShowFirstChild = lazy(() => import('../pages/routerShow/firstChild'));
const routerShowSecondChild = lazy(() => import('../pages/routerShow/secondChild'));
const routerShowFirstGrandson = lazy(() => import('../pages/routerShow/secondChild/firstChild'));
// eslint-disable-next-line
// import routerShowSecondGrandson from '../pages/routerShow/secondChild/secondChild';
const routerShowSecondGrandson = lazy(() => import('../pages/routerShow/secondChild/secondChild'));
// css
const cssPractice = lazy(() => import('../pages/css'));
const cssImg = lazy(() => import('../pages/css/img'));
const cssAnimation = lazy(() => import('../pages/css/animation'));
const cssPseudoEle = lazy(() => import('../pages/css/pseudoEle'));


// const componentsFiles = require.context('../pages', true, /\.js$/);
// const pages = {};

// componentsFiles.keys().forEach((key) => {
//   const keyName = key.split('/index.js')[0];
//   const componentName = keyName.split('/').pop();
//   pages[componentName] = componentsFiles(key).default;
// })

// const {
//   home,
//   first,
//   firstAdd,
//   second,
// } = pages

export const config = [
  {
    path: '/',
    component: home,
    key: '首页',
  },
  {
    path: '/useState',
    component: setState,
    key: 'useSate首页',
    routes: [
      {
        path: '/setState',
        component: setState,
        key: 'setState方法',
      }
    ],
  },
  {
    path: '/useEffect',
    component: useEffectHome,
    key: 'useEffect首页',
    routes: [
      {
        path: '/return',
        component: useEffectReturn,
        key: 'useEffect清理函数',
      },
      {
        path: '/order',
        component: useEffectOrder,
        key: 'useEffect调用顺序',
      }
    ],
  },
  {
    path: '/useContext',
    component: useContextProvider,
    key: 'useContext首页',
    routes: [
      {
        path: '/provider',
        component: useContextProvider,
        key: 'useContext的Provider',
      },
      {
        path: '/useStore',
        component: useContextUseStore,
        key: 'useContext的useStore',
      }
    ],
  },
  {
    path: '/useRef',
    component: useRefInputFocus,
    key: 'useRef首页',
    routes: [
      {
        path: '/inputRef',
        component: useRefInputFocus,
        key: 'inputRef',
      },
      {
        path: '/prevState',
        component: useRefusePrevious,
        key: 'prevState',
      },
    ]
  },
  {
    path: '/useReducer',
    component: useReducerNoContext,
    key: 'useReducer首页',
    routes: [
      {
        path: '/noContext',
        component: useReducerNoContext,
        key: 'noContext',
      },
      {
        path: '/context',
        component: useReducerContext,
        key: 'context',
      },
      {
        path: '/advancedSearch',
        component: Search,
        key: 'advancedSearch',
        children: [
          {
            path: '/expert',
            component: Expert,
            key: 'expert',
          },
          {
            path: '/talent',
            component: Talent,
            key: 'talent',
          },
        ]
      },
    ]
  },
  {
    path: '/useCallback',
    component: useCallbackHome,
    key: 'useCallback首页',
  },
  {
    path: '/useMemo',
    component: useMemoHome,
    key: 'useMemo首页',
  },
  {
    path: '/useImperativeHandle',
    component: useImperativeHandleHome,
    key: 'useImperativeHandle首页',
  },
  {
    path: '/routerShow',
    component: routerShow,
    key: 'routerShow首页',
    children: [
      {
        path: '/firstChild',
        component: routerShowFirstChild,
        key: 'firstChild',
      },
      {
        path: '/secondChild',
        component: routerShowSecondChild,
        key: 'secondChild',
        children: [
          {
            path: '/firstGrandson',
            component: routerShowFirstGrandson,
            key: 'firstGrandson',
          },
          {
            path: '/secondGrandson',
            component: routerShowSecondGrandson,
            key: 'secondGrandson',
            routes: [
              {
                path: '/details',
                component: () => (
                  <div>第二个孙子的详情</div>
                ),
                key: 'details',
              }
            ]
          },
        ]
      },
    ]
  },
  {
    path: '/css',
    component: cssPractice,
    key: 'css练习首页',
    children: [
      {
        path: '/img',
        component: cssImg,
        key: '图片',
      },
      {
        path: '/animation',
        component: cssAnimation,
        key: '动画',
      },
      {
        path: '/pseudoClass',
        component: cssPseudoEle,
        key: '伪元素',
      },
    ]
  },
]