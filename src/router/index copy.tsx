// 组件形式的写法
import App from "../App"
import Home from "../views/Home"
import About from "../views/About"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
//两种路由模式的组件:BrowserRouter(History模式),HashRouter(Hash模式)

const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                {/* index 访问根目录时重定向到home 这里home是相对路径，加/就表示绝对路径 */}
                <Route index element={<Navigate to="home" />}></Route>
                <Route path="home" element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default baseRouter
