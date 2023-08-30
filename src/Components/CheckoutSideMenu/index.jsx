import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../../Components/OrderCard'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { totalPrice } from '../../utils'

function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredProducts)
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: '2021-09-01',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.setCount(0)
        context.closeCheckoutSideMenu()
        context.setSearchProduct(null)

    }
    
  return (
    <aside className={`${context.isCheckoutSideMenuOpen? 'flex':'hidden'}   flex-col fixed right-0 border bg-white border-black rounded-lg w-1/6 h-[calc(100vh-68px)]`}>
        <div
        className='flex justify-between items-center p-6 border-b'
        >
            <h2 className=" font-medium text-xl">Cart</h2>
            <div
            className='cursor-pointer'
            onClick={() => context.closeCheckoutSideMenu()}
            >   
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>
            </div>
        </div>
        <div className='px-5 overflow-y-scroll flex-1' >

            {
            context.cartProducts.map(product => (
                <OrderCard
                    key={product.id} 
                    id={product.id} 
                    title={product.title}
                    price={product.price}
                    imageUrl={product.images}
                    handleDelete={handleDelete}
                />
            ))
            
            }
        </div>

        <div className='p-5'>
            <p className='flex justify-between items-center mb-2'>
                <span className='font-light' >Total: </span>
                <span className='font-medium text-2xl' >$ {totalPrice(context.cartProducts)}</span>
            </p>
            <Link to='/myorders/last' >
                <button
                    className='w-full py-2 mb-2 bg-black text-white rounded-lg'
                    onClick={() => handleCheckout()} > Checkout
                </button> 
            </Link>
        </div>


    </aside>
)
}

export default CheckoutSideMenu