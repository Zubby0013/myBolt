// import React from 'react'
// import hero from "../../assets/hero-bike.jpg"

// const Hero = () => {
//   return (
//     <div className=' w-full h-[90vh] flex lg:justify-center lg:items-center justify-center items-end relative bg-cover' style={{
//         backgroundImage: `url(${hero})`
//     }}>
      
//       <div className='text-white flex flex-col leading-tight items-start w-[90%] font-bold lg:text-[60px] lg:w-[95%] text-[35px]  '>
//       <div className='lg:w-[50%]'>Make money delivering food in Nigeria</div>
//       <div className='py-2 px-4 my-5 bg-green-500 text-[20px] rounded-[40px] '>Sign up as courier</div>
//       </div>

//     </div>
//   )
// }

// export default Hero;

import React from 'react';
import hero from "../../assets/hero-bike.jpg";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='bg-cover bg-center h-screen lg:h-[90vh]' style={{ 
      backgroundImage: `url(${hero})`
    }}>

      <div className='mx-auto max-w-7xl px-4 flex flex-col items-start justify-end h-full'>

        <div className='text-white lg:text-[60px] md:text-[45px] text-[35px] font-bold lg:leading-[1.1] lg:w-2/3'>
          Make money delivering food in Nigeria
        </div>

        <Link to="/registerascourier">
           <button className='bg-green-500 px-6 py-3 my-5 rounded-[40px] lg:text-base text-sm'>
             Sign up as courier
           </button>
        </Link>
          <p className=' text-white'> If you are representing a delivery company, <span className=' underline'>signup as a fleet owner here.</span></p>
      </div>

    </div>
  )
}

export default Hero;