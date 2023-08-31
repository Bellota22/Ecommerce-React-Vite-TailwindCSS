import React, { useContext, useRef, useState } from 'react'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { Link, Navigate } from 'react-router-dom'

function Signin() {

  const context = useContext(ShoppingCartContext)
  const [view, setView] = useState('user-info')
  const form = useRef(null)

  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)

  // Has an account
  const noAccountInLocalStorage = parsedAccount? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = context.account? Object.keys(context.account).length === 0 : true
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

  const handleSignIn = () =>{
    const stringifiedSignOut = JSON.stringify(false)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSignOut(false)
    //redirect
    return <Navigate replace to={'/'}/>
  }

  const createAnAccount = () =>{
    const formData = new FormData(form.current)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    }

    const stringifiedAccount = JSON.stringify(data)
    localStorage.setItem('account', stringifiedAccount)
    context.setAccount(data)
    handleSignIn()

  }

  const renderLogin = () => {
    return (
      <div className='flex flex-col w-80'>
        <p>
          <span className='font-light text-sm' >Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <p>
          <span className='font-light text-sm' >Password: </span>
          <span>{parsedAccount?.password}</span>
        </p>
        <Link
          to="/"
        >
          <button
            disabled={!hasUserAnAccount}
            onClick={() => handleSignIn()}
            className='w-80 h-10 mt-4 disabled:bg-black/40 bg-black text-white border rounded-lg' >Log in</button>
        </Link>
        <div className='flex cursor-pointer justify-center m-5'>
          <a  className='font-light text-xs   underline underline-offset-4'>Forgot my password</a>
        </div>
        <button 
          disabled={hasUserAnAccount}
          onClick={() => setView('create-user-info') }
          className='w-80 h-10 disabled:bg-black/40 disabled:border-black/40 text-black border rounded-lg border-black '>Sign up</button>


      </div>

    )
  }

  const renderCreateUserInfo = () => {
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

        <Link to="/" >
          <button
            className='bg-black text-white rounded-lg w-full h-12'
            onClick={() => createAnAccount()}
            >
            Create
          </button>
        </Link>


      </form>
    )
  }

  const renderView = () => view === 'create-user-info'? renderCreateUserInfo(): renderLogin()

  return (
    <Layout>
      <h1 className='text-xl font-bold mb-6'> Welcome </h1>
      {renderView()}

    </Layout>
  )
}

export default Signin