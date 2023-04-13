import { Suspense, useState } from 'react'
// import { Button } from 'antd'
// import { UpCircleOutlined } from '@ant-design/icons'
import { useRoutes, Link } from "react-router-dom"
import router from './router'

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className="App">

      {/* <Link to="/home">Home</Link>|
      <Link to="/about">About</Link>|
      <Link to="/user">User</Link>| */}
      {/* 占位符组件，类似于窗口，用来展示组件，有点像vuew中的router-view */}
      {/* <Outlet></Outlet> */}

      {outlet}

      {/* <Suspense fallback={<div>Loading...</div>}>
        {outlet}
      </Suspense> */}

    </div>
  )
}

export default App
