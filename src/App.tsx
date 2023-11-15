//import { useState } from 'react'
import Comp1 from "@/components/Comp1"
import Comp2 from "@/components/Comp2"
import {Button} from "antd"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        顶级组件
        <Comp1></Comp1>
        <Comp2></Comp2>
        <Button type="primary">这是一个按钮</Button>
      </div>
    </>
  )
}

export default App
