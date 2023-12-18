//路由表形式
import { Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from "react"

//路由懒加载
const About = lazy(() => import("../views/About"))
const Home = lazy(() => import("../views/Home"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))


//懒加载组件式写法，需要在外层套用suspense。用在还未加载完成时，显示Loading提示
const withLoadingComponent = (component: JSX.Element) => (
    <Suspense fallback={<div> Loading... </div>} >
        {component}
    </Suspense>)

const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children:[
            {
                path: "/page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/page2",
                element: withLoadingComponent(<Page2 />)
            },
        ]
    },
    {
        path: "/home",
        element: withLoadingComponent(<Home />)
    },
    {
        path: "/about",
        element: withLoadingComponent(<About />)
    },
]


export default routes;