  import {useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
  import { ShoppingCartContext, ShoppingCartProvider, initializeLocalStorage } from '../../Context'
  import Home from '../Home'  
  import MyAccount from '../MyAccount'  
  import MyOrder from '../MyOrder'  
  import MyOrders from '../MyOrders'  
  import Signin from '../Signin'  
  import Navbar from '../../Components/Navbar'

  import './App.css'
  import { useContext } from 'react'

  const AppRoutes = () => {
    const context = useContext(ShoppingCartContext)

    // Sign Out
    const signOut = localStorage.getItem('sign-out')
    const parsedSignOut = JSON.parse(signOut)
    
    // Account
    const account = localStorage.getItem('account')
    const parsedAccount = JSON.stringify(account)
    
    // Has an account

    const noAccountInLocalStorage = parsedAccount? Object.keys(parsedAccount).length === 0 : true
    const noAccountInLocalState = Object.keys(context.account).length === 0
    const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
    const isUserSignOut = context.signOut || parsedSignOut
    



    let routes = useRoutes([
      { path: '/', element: hasUserAnAccount && !isUserSignOut? <Home /> : <Navigate replace to={'/signin'} /> },
      { path: '/electronics', element: hasUserAnAccount && !isUserSignOut? <Home /> : <Navigate replace to={'/signin'} /> },
      { path: '/homedecoration', element: hasUserAnAccount && !isUserSignOut? <Home /> : <Navigate replace to={'/signin'} /> },
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
    initializeLocalStorage()
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
