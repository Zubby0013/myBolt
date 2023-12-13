import React from 'react'
import { Outlet } from 'react-router-dom';
import pix from "../../assets/react.svg";

const AuthLayout = () => {
  return (
    <div className='bg-[#e3e1fb] w-full h-[100%] grid grid-cols-5'>
        <div className=' col-span-3 bg-red-400'>
           <Outlet/>
        </div>
        <div className=' bg-green-300 col-span-2 m-4 rounded-lg p-2'>
        <div className='w-full h-[65%]'>
            <img src={pix} alt="" className=' w-full h-full object-cover rounded-lg'/>
        </div>
        <div className=' flex w-full items-center flex-col'>
            <div>line</div>
            <div className=' mt-5 font-bold text-[25px]'>Lorem ipsum dolor sit amet consectetur.</div>
            <div className=' font-medium text-[12px] text-[gray]'>Lorem, ipsum.</div>
            <div className=' font-bold mt-7 mb-2 text-[25px]'>Logo</div>
        </div>
        </div>
    </div>
  )
}

export default AuthLayout;