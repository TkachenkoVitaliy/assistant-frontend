import Home from 'pages/Home'
import { RouteObject, createBrowserRouter } from 'react-router-dom'

const applicationRoutes: RouteObject = {
  path: '/',
  element: <Home />,
  children: [],
}

const router = createBrowserRouter([applicationRoutes])

export default router
