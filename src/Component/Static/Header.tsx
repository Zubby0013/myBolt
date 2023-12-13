import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {

  const [state, setState] = useState(false);
  const [show, setShow] = useState(false);

  const toggle = ()=>{
    setState(!state)
  };
  const toggle2 = ()=>{
    setShow(!show)
  };

  return (
    <div className=' w-[100%] h-[50px] bg-[#39A88E] flex justify-center items-center relative'>
       <div className=' w-[90%] h-[90%] bg-gray-500 flex justify-between'>
          <div className=' w-[90px] bg-red-500'>Logo</div>
          <div className='w-[50%] bg-lime-400 flex text-white'>
            <div className=' w-[100px] flex items-center'
            onClick={()=>(
              toggle()
            )}
            >
              <nav className=' hidden md:block'>Nigeria</nav>(EN) <MdOutlineArrowDropDown size={25}/>
              {state? (
        <div className=' w-[200px] h-[250px] rounded-md bg-gray-600 absolute top-16 right-[200px]'></div>
       ):null}
            </div>
            <div className=' w-[100px] bg-blue-600 hidden md:block'>Support</div>
            <div className=' w-[100px] hidden md:block bg-green-600 '>
              <button className=' w-[100px] h-[30px] rounded-3xl bg-white'>SignUp</button>
            </div>
            <div className=' w-[50px] bg-orange-600 flex items-center'><MdOutlineMenu size={25}/></div>
          </div>
       </div>
      
    </div>
  )
}

export default Header;