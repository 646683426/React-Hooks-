import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Layout from '../layout';
import { config } from './config';

import NotFound from '../pages/notFound';
import Home from '../pages/home';
import CssAnimation from '../pages/css/animation';


export default function Router() {
  function renderChildrentRoute(route, domArr, path) {
    const completePath = path ? path.concat(route.path) : route.path;
    if (route.routes && Array.isArray(route.routes)) {
      renderRoute(route.routes, domArr, completePath);
    }
    return (
      <Route
        path={completePath}
        element={<route.component />}
        key={route.key}
      >
        {Array.isArray(route.children) && route.children.map(item =>
          renderChildrentRoute(item, domArr, completePath)
        )}
      </Route>
    );
  }

  function pushRoute(
    route,
    path,
  ) {
    return (
      <Route
        path={path}
        element={<route.component />}
        key={route.key}
      />
    )
  }

  function renderRoute(
    routeArr,
    domArr = [],
    path,
  ) {
    routeArr.forEach((item) => {
      const completePath = path ? path.concat(item.path) : item.path;
      item.children
        ? domArr.push(renderChildrentRoute(item, domArr, path))
        : domArr.push(pushRoute(item, completePath))
      if (item.routes && Array.isArray(item.routes)) {
        renderRoute(item.routes, domArr, completePath);
      }
    });
    return domArr;
  }


  return (
    <BrowserRouter>
      {/* 将需要懒加载的组件放在Suspense中，在相应的组件懒加载完成前，会一直展示fallback中的内容 */}
      <Suspense fallback={<CssAnimation />}>
        <Routes>
          {/* 路由匹配规则是从上到下执行，加了Routes后一旦发现匹配，就不再匹配其余的规则了。 */}
          <Route path='/' element={<Home />} />
          <Route path='/' element={<Layout />}>
            {renderRoute(config)}
            {/* 嵌套路由子路由的两种写法
                1:path前不加/,
                2:path前加/,但要将父路由路径写全 */}
            {/* <Route path='/admin' element={
                  <div>
                    后台首页
                    <Outlet/>
                  </div>
                }>
                  <Route path='a' element={
                    <div>
                      aaaa
                    </div>
                  } />
                  <Route path='/admin/b' element={
                    <div>
                      bbbbbb
                    </div>
                } /> */}
            {/* <Route path='/b' element={
                  <div>
                    bbbbbb
                  </div>
                } /> */}
            {/* 上面的写法会报错 */}
            {/* </Route> */}
            <Route path='*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

// 路由
// 我们的服务平台用的是5.x版本的路由，我这里分享一下6.x版本的一些改动
// 路由是根据Route组件的path属性进行匹配 匹配到的就渲染element中的组件
// 路由匹配规则是从上到下执行,6.x的Routes相当于5.x的Switch,
// 加了Routes后一旦发现匹配,就不再匹配其余的规则了

// 6.x的嵌套路由的写法比5.x版本的要方便一些
// 只需要将Route进行正常的嵌套即可
// 嵌套路由子路由的两种写法
// 1:path前不加/,
// 2:path前加/,但要将父路由路径写全,如果不写全则会报错
// 在父路由中使用<Outlet/>就可以渲染对应的嵌套子路由

// 跳转方式
// 5.x的useHistory被移除了,6.x版本变成了useNavigate
// useNavigate返回一个NavigateFunction
// 该方法接收两个参数,第一个参数是要跳转的路径,第二个参数接收跳转的一些设置
// 可以设置的参数有state和replace

// 懒加载
// react路由的懒加载需要使用React.lazy配合React.Suspense组件使用
// React.lazy 接受一个函数，这个函数需要动态调用 import()。
// 它必须返回一个 Promise，该 Promise 需要 resolve 一个默认导出的 React 组件。
// 将需要懒加载的路由组件放在Suspense中，在相应的组件懒加载完成前，会一直展示fallback中的内容


/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) {
    return n;
  }
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push((arr[i - 2] + arr[i - 1]) % 1000000007);
  }
  return arr[n];
};

console.log(fib(7));