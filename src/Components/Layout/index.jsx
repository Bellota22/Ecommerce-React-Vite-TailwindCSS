import React from 'react'
import CheckoutSideMenu from '../CheckoutSideMenu'

function Layout({ children }) {
  return (

    <div className='flex flex-col items-center mt-20' >
        {children}
        <CheckoutSideMenu />

    </div>
)
}

export default Layout