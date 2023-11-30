//路由表形式
import { Navigate } from 'react-router-dom';
import React, { lazy } from "react"

//路由懒加载
const About = lazy(() => import("../views/About"))
const Home = lazy(() => import("../views/Home"))


//懒加载组件式写法，需要在外层套用suspense。用在还未加载完成时，显示Loading提示
const withLoadingComponent = (component) => (<React.Suspense fallback={<div>Loading...</div>} >
    {component}
</React.Suspense>)

const routes = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/home",
        element: withLoadingComponent(<Home/>)
    },
    {
        path: "/about",
        element: withLoadingComponent(<About/>)
    },
]


export default routes;