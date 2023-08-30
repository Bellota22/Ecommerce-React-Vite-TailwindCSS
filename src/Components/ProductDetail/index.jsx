import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function ProductDetail() {
    const context = useContext(ShoppingCartContext)


  return (
    <aside className={`${context.isProductDetailOpen? 'flex':'hidden'}   flex-col fixed right-0 border bg-white border-black rounded-lg w-1/6 h-[calc(100vh-68px)]`}>
        <div
        className='flex justify-between items-center p-6 border-b'
        >
            <h2 className=" font-medium text-xl">Detail</h2>
            <div
            className='cursor-pointer'
            onClick={() => context.closeProductDetail()}
            >   
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                </svg>
            </div>

        </div>
            <figure className='p-6' >
                <img
                className='w-full h-full object-cover rounded-lg'
                src={context.productShow.images?.[0]} alt='context.productShow.title' />
            </figure>

            <p className='flex flex-col px-6'>
                <span className='font-bold text-2xl '>$ {context.productShow.price}</span>
                <span className='font-medium text-md '>{context.productShow.title}</span>
                <span className='font-light text-sm '>{context.productShow.description}</span>
            </p>
    </aside>
)
}

export default ProductDetail