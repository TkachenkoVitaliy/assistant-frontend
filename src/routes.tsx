import ApplicationLayout from 'layouts/ApplicationLayout/ApplicationLayout'
import Home from 'pages/Home/Home'
import Margin from 'pages/Margin/Margin'
import { RouteObject, createBrowserRouter } from 'react-router-dom'

const applicationRoutes: RouteObject = {
  path: '/',
  element: <ApplicationLayout />,
  children: [
    {
      path: '',
      element: <Home />,
    },
    {
      path: 'margin',
      element: <Margin />,
    },
  ],
}

const router = createBrowserRouter([applicationRoutes])

export default router
