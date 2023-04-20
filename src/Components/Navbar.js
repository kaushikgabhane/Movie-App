import React from 'react'

import img from '../Assets/Movie-Logo.png';
import SearchBox from './SearchBox';
import './FontFamily.css';


const Navbar = () => {
  return (
    <div className="navbar  flex justify-between  bg-zinc-950 sticky top-0 z-20">

      <div className="h-10 ">
        <img src={img} alt='Logo img'  className='h-[100%] rounded-md animate-shake shadow-sm shadow-white'/>
      </div>

      <SearchBox />

      <div className="">
        <ul className="menu menu-horizontal px-1 flex  gap-20">
          <li className="font-semibold text-red-700 hover:shadow-[1px_1px_10px_#7f1d1d,-1px_-1px_10px_#7f1d1d] oswald p-2 rounded-lg">Home</li>
          <li className='font-semibold text-red-700 hover:shadow-[1px_1px_10px_#7f1d1d,-1px_-1px_10px_#7f1d1d] oswald p-2 rounded-lg'>Second</li>
          <li className='font-semibold text-red-700 hover:shadow-[1px_1px_10px_#7f1d1d,-1px_-1px_10px_#7f1d1d] oswald mr-4 p-2 rounded-lg'>Third</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar