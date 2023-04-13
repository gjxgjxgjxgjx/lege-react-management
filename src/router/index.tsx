import React, { Children, lazy } from "react"
// import About from "@/views/About"
import Home from "@/views/Home"

const About = lazy(() => import("../views/About"))
const User = lazy(() => import("../views/User"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))

import { Navigate } from "react-router-dom"

// 懒加载需要加一个loading组件,可以直接在顶层outlet上包裹实现

const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading</div>}>
        {comp}
    </React.Suspense>
)
const routes = [
    {
        path: "/",
        element: <Navigate to="/page1" />
    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                index: true,
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                // 匹配所有未定义的路由
                path: "*",
                element: <Navigate to="/page1" />
            }
        ]
    }
    // {
    //     path: "/home",
    //     element: <Home></Home>
    // },
    // {
    //     path: "/about",
    //     element: withLoadingComponent(<About />)
    // },
    // {
    //     path: "/user",
    //     element: withLoadingComponent(<User />)
    // }
]

export default routes