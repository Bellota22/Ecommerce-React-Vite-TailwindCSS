import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'

function Card(data) {

    const context = useContext(ShoppingCartContext)

    const showProduct = (ProductDetail) => {
        context.openProductDetail()
        context.setProductShow(ProductDetail)
    }

    const addProductToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()

    }


    const renderIcon = (id) =>{
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

        if(isInCart){

        return (
            <div
            className=' m-2 absolute top-0 right-0 flex justify-center items-center  w-9 h-9 rounded-full bg-black text-white' >
                <CheckIcon className="w-6 h-6 bg-black text-white" ></CheckIcon>
                



            </div>
        )
        }else{
        return (
            <div
            onClick={(event) =>addProductToCart(event, data.data)}
            className=' m-2 absolute top-0 right-0 flex justify-center items-center  w-10 h-10 rounded-full' >
                
                <PlusIcon className="h-6 w-6  "> </PlusIcon>

            </div>
        )
        
        }
    }

  return (
    <div 
        onClick={() => showProduct(data.data)}
        className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
        <figure className='relative mb-2 w-full h-4/5' >
            <span className='absolute bottom-0 m-2  left-0 rounded-lg text-black bg-white/60 text-xs px-3 py-0.5' >{data.data.category.name}</span>
            <img 
            className='rounded-lg w-full h-full object-cover' src={data.data.images[0]} alt={data.data.title} />
            {renderIcon(data.data.id)}
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light' >{data.data.title}</span>
            <span className='text-sm font-medium'>${data.data.price}</span>

        </p>

    </div>
    )
}

export default Card