import { useRoutes, BrowserRouter } from 'react-router-dom'
import { NavBar } from '../../components/NavBar/NavBar'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount/MyAccount'
import { MyOrder } from '../MyOrder/MyOrder'
import { MyOrders } from '../MyOrders/MyOrders'
import { SingIn } from '../SingIn/SingIn'
import { NotFound } from '../NotFound/NotFound'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sing-in', element: <SingIn/> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes
}

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </>
  )
}

export default App
