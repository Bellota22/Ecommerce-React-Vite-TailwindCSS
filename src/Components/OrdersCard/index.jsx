import React from 'react'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const  OrdersCard = props => {
    const { totalPrice, totalProducts } = props

   
  return (
    <div className='w-80 h-12 flex  items-center mb-3 border border-black rounded-md' >
        
        <p className='flex w-full justify-between px-5 '>
            <span className='flex' > <CalendarDaysIcon className='w-6 h-6' /> 01.02.23</span>
            <span className='flex' > <ShoppingCartIcon className='w-6 h-6' /> {totalProducts}</span>
            <span className='flex' > <CurrencyDollarIcon className='w-6 h-6'/> {totalPrice}</span>
        </p>

    </div>
)
}

export default OrdersCard