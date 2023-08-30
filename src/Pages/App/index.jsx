  import {useRoutes, BrowserRouter } from 'react-router-dom'
  import { ShoppingCartProvider } from '../../Context'
  import Home from '../Home'  
  import MyAccount from '../MyAccount'  
  import MyOrder from '../MyOrder'  
  import MyOrders from '../MyOrders'  
  import Signin from '../Signin'  
  import Navbar from '../../Components/Navbar'

  import './App.css'

  const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/electronics', element: <Home /> },
      { path: '/homedecoration', element: <Home /> },
      { path: '/myaccount', element: <MyAccount /> },
      { path: '/myorder', element: <MyOrder /> },
      { path: '/myorders', element: <MyOrders /> },
      { path: '/myorders/last', element: <MyOrder /> },
      { path: '/myorders/:id', element: <MyOrder /> },
      { path: '/signin', element: <Signin /> },

    ])

    return routes
  }


  function App() {

    return (
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          
        </BrowserRouter> 
      </ShoppingCartProvider>


    )
    
  }

  export default App
