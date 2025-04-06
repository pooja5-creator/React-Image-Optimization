import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const arr=[
    {
      name:'Home',
      link:''
    },
    {
      name:'About',
      link:'about'
    },
    {
      name:'Contact',
      link:'contact'
    },
  ]
  return (
    <div className='w-full h-[150px] bg-cyan-400 flex justify-center flex-col 
    items-center text-2xl sm:text-3xl gap-5 font-bold'>
      <h1 className='text-center '>Improving React Performance with Lazy Loaded Images</h1>
    <div className='w-[300px] sm:w-[500px] bg-black flex justify-center items-center gap-5'>
      {
        arr.map((item,index)=><NavLink 
        className={({isActive})=>isActive?'text-orange-600 text-xl sm:text-2xl':'text-xl sm:text-2xl text-orange-100'} to={`/${item.link}`} key={index}>{item.name}</NavLink>)
      }
    </div>
    
    </div>
  )
}
