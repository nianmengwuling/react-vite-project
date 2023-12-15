import { useRoutes } from "react-router-dom"
import router from "./router"

function App() {
  const outlet = useRoutes(router)
  return (
    <>
      {/* 路由出口占位，类似于vue的router-view */}
      {/*  <Outlet></Outlet> 组件形式写法*/}
      {outlet}
    </>
  )
}

export default App
