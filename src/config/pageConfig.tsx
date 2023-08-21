import Home from 'pages/Home/Home'
import Margin from 'pages/Margin/Margin'

export interface ExtendedRouteObject {
  path: string
  element: JSX.Element
  label: string
}

const ROUTES: ExtendedRouteObject[] = [
  {
    path: '',
    element: <Home />,
    label: 'ROOT',
  },
  {
    path: 'margin',
    element: <Margin />,
    label: 'Маржинальность',
  },
]

export const applicationRoutes = () => {
  return ROUTES.map((route) => ({ path: route.path, element: route.element }))
}

export const navbarLinks = () => {
  return ROUTES.map((route) => ({
    link: route.path,
    label: route.label,
  })).filter((route) => !!route.label)
}
