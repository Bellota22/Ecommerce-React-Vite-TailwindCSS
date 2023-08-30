import { useContext } from 'react'
import React from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
import { FaceFrownIcon } from '@heroicons/react/24/solid'

function Home() {

  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    
      if (context.filteredItems?.length > 0){
        return (
          context.filteredItems?.map((item) => (
            <Card key={item.id} data={item}/>
          ))
          )
      } else {
        return (
          <div className=' w-full justify-center flex flex-col'>
            <FaceFrownIcon className='w-full h-10 flex' />
            <p className='w-full text-center'> Srry manito no hay items </p>
          </div>
          
        )
      
    } 
  }


  return (
   
    <Layout>
      <div className='flex items-center justify-center w-80 relative'>

        <h1 className='mb-6 font-medium text-xl' >Exclusive products</h1>
      </div>
      <input
       type='text'
       placeholder='Search a product'
       onChange={(event) => context.setSearchProduct(event.target.value)}
       className='rounded-lg focus:outline-none border border-black w-80 p-2 mb-6'
       />
      <div className='grid grid-cols-4 gap-4 w-full max-w-screen-lg' >
        { renderView() }
      </div>

      <ProductDetail />
    </Layout>

    )
}

export default Home