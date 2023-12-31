import React, { useContext }from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard'

function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/')+1)

    if (index === 'last') index = context.order?.length -1
  return (
    <Layout>
      
      <div className='flex items-center justify-center w-80 relative mb-6'>
          <Link to='/myorders' className='absolute left-0' >
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer ' />
          </Link>
          <h1>My Order</h1>
        </div>
      <div className='w-80 flex flex-col' >

        {
        context.order?.[index]?.products.map(product => (
            <OrderCard
                key={product.id} 
                id={product.id} 
                title={product.title}
                price={product.price}
                imageUrl={product.images}
            />
        ))

        }
      </div>
    </Layout>

    )
}

export default MyOrder