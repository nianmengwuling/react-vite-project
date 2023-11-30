//import { useState } from 'react'
/* import Comp1 from "@/components/Comp1"
import Comp2 from "@/components/Comp2"
import { Button } from "antd"//antd的按钮引入
import { UpCircleOutlined } from "@ant-design/icons" */
import { Outlet, Link } from "react-router-dom"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        顶级组件
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Button type="primary">这是一个按钮</Button>
        <UpCircleOutlined style={{ fontSize: "40px", color: "red" }}></UpCircleOutlined>
      </div> */}

      <Link to="home">Home</Link>
      <hr />
      <Link to="about">About</Link>
      {/* 路由出口占位，类似于vue的router-view */}
      <Outlet></Outlet>
    </>
  )
}

export default App
