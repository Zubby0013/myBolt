import React from 'react'

const SignUp = () => {
  return (
    <div className=' w-full min-h-screen flex justify-center items-center py-4'>
        <div className=' w-[70%] h-[90%]'>
           <div className=' bg-[#39A88E] w-[100%] h-[40%]'></div>
           <div className='  w-[100%] min-h-[300px] grid grid-rows-10 gap-4'>
               <div className=' '>
                  <label>Please confirm that you are at least 18 years old.*</label>
                   <div className=' mt-3 w-[100%] h-[40px] rounded-md flex items-center text-gray-500 bg-gray-300'>
                    <input type="radio" className=' w-[20px] '/>
                    Confirm
                   </div>
               </div>
               <div className='  grid grid-cols-2'>
                  <div className=''>
                      <label> Name*</label>
                      <input type="text" placeholder='Job' className=' rounded-md mt-3 px-3 w-[95%] h-[40px] bg-gray-300 outline-none'/>
                  </div>
                  <div>
                      <label> Surname*</label>
                      <input type="text" placeholder='Joseph' className=' w-[90%] h-[40px] rounded-md mt-3 px-3 bg-gray-300 outline-none'/>
                  </div>
               </div>
               <div className='  grid grid-cols-2'>
                   <div>
                      <label> Phone Number*</label>
                      <p className=' text-gray-500'>Example: +2349011100045</p>
                      <input type="tel" placeholder='+2349011100045' className=' w-[90%] h-[40px] rounded-md mt-3 px-3 bg-gray-300 outline-none'/>
                  </div> 
                  <div>
                      <label> Email*</label>
                      <p className=' text-gray-500'>Example: job.smith@gmail.com</p>
                      <input type="email" placeholder='job.smith@gmail.com' className=' w-[90%] h-[40px] rounded-md mt-3 px-3 bg-gray-300 outline-none'/>
                  </div>
               </div>
               <div className=' '>
                    <label >City*</label>
                    <div className=' grid grid-cols-2 mt-3'>
                    <div className='  w-[100%] h-[40px] flex items-center text-gray-500 bg-gray-300'>
                    <input type="radio" className=' w-[20px] '/>
                       MainLand
                   </div>
                   <div className='  w-[100%] h-[40px] flex items-center text-gray-500 bg-gray-300'>
                    <input type="radio" className=' w-[20px] '/>
                      IsLand
                   </div>
                    </div>
               </div>
               <div className=' '>
                   <label>Date Of Birth*</label>
                   <input type="date" id="birthday" name="birthday" className=' w-full h-[40px] outline-none bg-gray-300 mt-3'/>
               </div>
               <div className='  grid grid-cols-2'>
                  <div>
                      <label> National ID*</label>
                      <p className=' text-gray-500'>Your valid national ID</p>
                      <input type="text" placeholder='9011100045' className=' w-[90%] h-[40px] rounded-md mt-3 px-3 bg-gray-300 outline-none'/>
                  </div> 
                  <div>
                      <label> What is Your Nationality?*</label>
                      <p className=' text-gray-500'>Nationality/Citizenship</p>
                      <input type="text" className=' w-[90%] h-[40px] rounded-md mt-3 px-3 bg-gray-300 outline-none'/>
                  </div>
               </div>
               <div className=' '>
                  <button className=' bg-[#39A88E] w-[100%] h-[40px] rounded-md'>Submit</button>
               </div>
           </div>
        </div>
    </div>
  )
}

export default SignUp;