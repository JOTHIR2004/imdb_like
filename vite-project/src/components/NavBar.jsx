import React from 'react'
import Logo from '../assets/imdb.svg'
import {Link }from 'react-router-dom'
export const NavBar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-3'>
        <img className='w-[50px]' src={Logo} alt="" />

        <Link to='/' className='text-xl font-bold text-yellow-400'>Movies</Link>

        <Link to='/watchlist'className=' text-xl font-bold text-yellow-400'>Watchlist</Link>        

    </div>
  )
}
