import React from 'react'
import ReactDOM from 'react-dom/client'
//样式初始化
import "reset-css"
//全局样式
import "@/assets/styles/global.scss"
//组件样式
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

/* import Router from './router/index copy'  组件形式写法

此处不把App放入，是因为路由组件里，已经有App的跳转重定向，相当于被包含进去了，组件形式写法
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
 */

//路由表达式形式
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>)