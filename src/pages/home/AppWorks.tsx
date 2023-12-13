import React from 'react';
import pix from '../../assets/how-the-app-works-desktop.png'

const AppWorks = () => {
  return (
    <div className=' w-full h-[120vh]  flex justify-center items-center py-10'>
        <div className='  w-[90%] h-[95%] grid grid-cols-2 flex-wrap gap-4'>
            <div className=''>
                <img src={pix} alt="" className=' w-[100%] h-[95%]'/>
            </div>
            <div className=' grid grid-rows-3'>
                <div className=' row-span-1 '>
                    <div className=' text-[50px] font-[700]'>How the Bolt Courier app works</div>
                    <div className=' text-[24px]'> Our app is designed to help couriers receive, deliver and manage orders easily and effectively.</div>
                </div>
                <div className=' row-span-2'>
                     <div className=' h-[85px] row-span-1flex mt-7'>
                        <div className=' w-[7%]'>
                            <div className=' w-[25px] h-[25px] bg-[#FF4500] rounded-3xl flex justify-center items-center'>1</div>
                        </div>
                        <div>
                            <div className=' font[400] text-[25px]'>Receive orders</div>
                            <div>View incoming orders, check their details, and get going.</div>
                        </div>
                     </div>
                     <div className=' h-[85px] row-span-1 flex'>
                     <div className=' w-[7%]'>
                            <div className=' w-[25px] h-[25px] bg-[#FF4500] rounded-3xl flex justify-center items-center'>2</div>
                        </div>
                        <div>
                            <div className=' font[400] text-[25px]'>Pick up the order</div>
                            <div>Collect the order from the restaurant or store.</div>
                        </div>
                     </div>
                     <div className=' h-[85px] row-span-1 flex'>
                     <div className=' w-[7%]'>
                            <div className=' w-[25px] h-[25px] bg-[#FF4500] rounded-3xl flex justify-center items-center'>3</div>
                        </div>
                        <div>
                            <div className=' font[400] text-[25px]'>Deliver</div>
                            <div className=' w-[90%]'>Head to the delivery address as quickly and safely as possible.</div>
                        </div>
                     </div>
                     <div className=' h-[85px] row-span-1 flex'>
                     <div className=' w-[7%]'>
                            <div className=' w-[25px] h-[25px] bg-[#FF4500] rounded-3xl flex justify-center items-center'>4</div>
                        </div>
                        <div>
                            <div className=' font[400] text-[25px]'>Track your earnings</div>
                            <div className=' w-[90%]'>Track your progress in real-time and view your earnings easily.</div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppWorks;