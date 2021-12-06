## react-router-dom(6.x版本) 

记录一些项目中经常使用到的6.x版本的路由知识。

### Routes

路由匹配规则是从上到下执行，加了 Routes 后一旦发现匹配，就不再匹配其余的规则了。

```javascript
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='*' element={<NotFound />} />
</Routes>
```

访问http://localhost:3000/，匹配到 Home 组件就不会继续往下匹配了，因此，带参数的路径一般要写在路由规则的底部。

### Route

这个组件是将 url 和页面对应起来的关键。

接收2个 prop：
* path 用于匹配 url
* element 接收一个 React 组件，，如果当前 url 与 path 相匹配，展示接收的组件

#### path

path 属性可以使用通配符

```javascript
<Route path="/hello/:name" />
// 匹配 /hello/michael
// 匹配 /hello/ryan

<Route path="/hello(/:name)" />
// 匹配 /hello
// 匹配 /hello/michael
// 匹配 /hello/ryan

<Route path="/files/*.*" />
// 匹配 /files/hello.jpg
// 匹配 /files/hello.html

<Route path="/files/*" />
// 匹配 /files/ 
// 匹配 /files/a
// 匹配 /files/a/b

<Route path="/**/*.jpg" />
// 匹配 /files/hello.jpg
// 匹配 /files/path/to/file.jpg
```

通配符的规则如下

1、 :paramName

  :paramName 匹配URL的一个部分，直到遇到下一个/、?、#为止。这个路径参数可以在 useLocation 的返回值中取出。

2、 ()

  ()表示URL的这个部分是可选的。

3、 *

  *匹配任意字符，直到模式里面的下一个字符为止。匹配方式是非贪婪模式。
  
4、 **

  ** 匹配任意字符，直到下一个/、?、#为止。匹配方式是贪婪模式。

### 嵌套路由

嵌套路由有两种写法
* path前不加/
* path前加/，但要将父路由路径写全，否则会报错

```javascript
<Route path='/admin' element={
      <div>
        后台首页
        <Outlet/>
      </div>
}>
      <Route path='a' element={ // path前不加/
        <div>
          aaaa
        </div>
      } />
      <Route path='/admin/b' element={ // path前加/,但要将父路由路径写全
        <div>
          bbbbbb
        </div>
      } />
</Route>
```

在父路由中使用 Outlet 就可以在相应的位置渲染对应的嵌套子路由

### 跳转方式

5.x的 useHistory 被移除了,6.x版本变成了 useNavigate。

该方法接收两个参数
* 要跳转的路径
* 跳转的一些设置

```javascript
navigate(url, {
  state: {
    data:11111111111111
  },
  replace:true,// 用新的路由替换当前路由
})
```

### 路由懒加载

react 路由的懒加载需要使用 React.lazy 配合 React.Suspense 组件使用。

React.lazy 接受一个函数，这个函数需要动态调用 import()。它必须返回一个 Promise，该 Promise 需要 resolve 一个默认导出的 React 组件。

```javascript
const home = lazy(() => import('../pages/home'));
```

将需要懒加载的路由组件放在 Suspense 中，在相应的组件懒加载完成前，会一直展示 fallback 中的内容

```javascript
<Suspense fallback={<CssAnimation />}>
  <Routes>
    <Route path='/' element={<Home />} />
  </Routes>
</Suspense>
```