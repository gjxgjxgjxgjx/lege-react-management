import React from 'react'
import ReactDOM from 'react-dom/client'
// 正确的样式引入顺序
// 样式初始化放在最前面
import "reset-css"
// UI框架的样式

// 全局样式
import "@/assets/styles/global.scss"

// 组件的样式

import App from './App'
import { BrowserRouter } from "react-router-dom"
import Router from "./router"


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
