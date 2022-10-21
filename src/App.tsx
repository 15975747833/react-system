import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch, matchPath } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Topic from './Topic';

function App() {
  const match = matchPath('/home', '/home')
  console.log('match:log ', match);
  // loadabled
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <ul>
          <Link to='/Router1'>
            <li>Router1</li>
          </Link>
          <Link to='/Router2'>
            <li>Router2</li>
          </Link>
          <Link to='/Router3'>
            <li>Router3</li>
          </Link>
          <Link to='/Router4'>
            <li>Router4</li>
          </Link>
          <Link to='/about'>
            <li>about</li>
          </Link>
          <Link to='/home'>
            <li>home</li>
          </Link>
          <Link to='/topic'>
            <li>topic</li>
          </Link>

      {/* 用来渲染对应路由下的组件 */}
          <Switch>
            <Route path='/about'>
              <About></About>
            </Route>
            {/* 2. 嵌套路由 */}
            <Route path='/topic'>
              <Topic></Topic>
            </Route>
            <Route path='/'>
              <Home></Home>
            </Route>
          </Switch>
        </ul>
      </Router>
    </div>
  );
}

export default App;


/**
 * 1. import { BrowserRouter, Link } from 'react-router-dom';
 * BrowserRouter 
 * <Link /> 渲染一个带有href的a标签，
 * <Switch/> 查找子<Route/>中第一个match的路由进行渲染
 * 2. react-router与react-router-dom 
 * react-router 提供了路由的核心API Router、Route、Switch
 * react-router-dom 提供通过操作DOM来使路由变更的API BrowserRouter、Route、Link
 * BrowserRouter和HashRouter组件，前者使用pushState和popState事件构建路由，后者使用 hash 和 hashchange 事件构建路由。
 * 3. <Switch/> 用来渲染对应路由下的子组件
 * 
 * 4. 主要组件 主要有以下三类
 * <BrowserRouter/> <HashRouter/>
 * 匹配 <Switch/> <Route/> switch下的route只能匹配一个
 * 导航类 <Link/>渲染出a标签  <NavLink activeClassName/>a标签的特例，当前路由处于激活状态时，会添加active样式，不激活时样式不会加上去  <Redirect/>重定向
 * 
 * 5. 服务端渲染
 * <StaticRouter location={req.url} context={context}><App/></StaticRouter>
 * 使用StaticRouter来包裹根组件，在服务端渲染时，不能改变app state，只能通过判断context去判断渲染的东西
 * 判断context.url的值 来决定是否重定向
 * 
 * 6. matchPath 判断两个路由是否一致，返回一个对象
 * 
 * 7. 异步路由
 * 需要在增加babel解析
 * {
    "presets": ["@babel/preset-react"],
    "plugins": ["@babel/plugin-syntax-dynamic-import"]
    }

  * 8. hooks
    useHistory() 获取history方法
    useLocation() 当前url上的信息s
    useParams() 获取url上的params
    useRouteMatch() 匹配当前路由是否在路由中，在不渲染route是去判断路由权限
 */
