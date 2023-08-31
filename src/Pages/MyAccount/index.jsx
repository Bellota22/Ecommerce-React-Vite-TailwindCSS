import React, { useContext, useRef, useState } from 'react'
import { ShoppingCartContext } from '../../Context'
import Layout from '../../Components/Layout'


function MyAccount() {
  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  const form = useRef(null)

  const editAccount = () =>{
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    }

    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)

  }
  

  const renderUserInfo = () =>{
    return (
      <div className='flex flex-col w-80' >
        <p>
          <span className='font-light text-sm'>Name: </span>
          <span>{parsedAccount?.name} </span>
        </p>
        <p>
          <span className='font-light text-sm'>Email: </span>
          <span>{parsedAccount?.email} </span>
        </p>
        <button 
          onClick={() => setView('edit-user-info')}
          className='border border-black rounded-lg mt-6 py-3'
        >

          Edit
        </button>

      </div>
    )
  }



  const renderEditUserInfo = () => {
    return(
      <form ref={form} className='flex flex-col gap-4' >
        <div className='flex flex-col w-80  gap-1' >
          <label htmlFor='name' className='font-light text-sm' >Your name: </label>
          <input
            id='name'
            name='name'
            type='text'
            defaultValue={parsedAccount?.name}
            className='w-full h-full border border-black rounded-lg px-4 focus:outline-none py-2'
            placeholder='Gabriel Villanueva' />
        </div>
        <div className='flex flex-col w-80  gap-1' >
          <label htmlFor='email' className='font-light text-sm' >Your email: </label>
          <input
            id='email'
            name='email'
            type='text'
            defaultValue={parsedAccount?.email}
            className='w-full h-full border border-black rounded-lg px-4 focus:outline-none  py-2'
            placeholder='new_email@gmail.com' />
        </div>
        <div className='flex flex-col w-80  gap-1' >
          <label htmlFor='password' className='font-light text-sm' >Your password: </label>
          <input
            id='password'
            name='password'
            type='text'
            defaultValue={parsedAccount?.password}
            className='w-full h-full border border-black rounded-lg px-4 focus:outline-none  py-2'
            placeholder='**********' />
        </div>

        
        <button
          className='bg-black text-white rounded-lg w-full h-12'
          onClick={() => {setView("user-info") ,editAccount()}}
          >
          Edit
        </button>
        
      </form>
    )
  }

  const renderView = () => view === 'edit-user-info'? renderEditUserInfo() : renderUserInfo()
  return (
    <Layout>
      <h1 className="font-bold text-xl text-center mb-6 w-80">My account</h1>
      {renderView()}
    </Layout>
    )
}

export default MyAccount