import { useState } from 'react'
import { Outlet, useRoutes, Link } from "react-router-dom"
import router from "./router"

function App() {
  const [count, setCount] = useState(0)

  const outlet = useRoutes(router)
  return (
    <>
      <Link to="home">Home</Link>
      <hr />
      <Link to="about">About</Link>
      
      {/* 路由出口占位，类似于vue的router-view */}
      {/*  <Outlet></Outlet> 组件形式写法*/}
      {outlet}
    </>
  )
}

export default App
