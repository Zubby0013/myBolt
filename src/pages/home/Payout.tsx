import React from 'react';
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { MdDirectionsBike, MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaImagePortrait } from "react-icons/fa6";
import { RiSmartphoneFill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import bike from '../../assets/hero-bike.jpg';

const Payout = () => {
  return (
    <div className=' px-10 py-12 min-h-[180vh] w-full grid grid-rows-4 gap-5'>
        <div className=' row-span-1 max-w-7xl mx-auto px-4 py-16'>
            <div className=' text-center text-4xl font-bold'>Why couriers choose Bolt Food</div>
            <div className=' mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3'>
              <div className=' flex flex-col items-center px-6 py-8 rounded-lg bg-white shadow-lg'>
                 <div className=' text-[#FF4500]'><FaMoneyBillWaveAlt size={30}/></div>
                 <div className=' text-[25px] font-bold'>Weekly payouts</div>
                 <div className=' text-gray-600 w-[300px] text-center'>Get paid at the end of each week with no monthly fees.</div>
              </div>
              <div className='flex flex-col items-center px-6 py-8 rounded-lg bg-white shadow-lg'>
                 <div className=' text-[#FF4500]'>
                  <MdOutlineAccessTimeFilled size={30}/>
                  </div>
                 <div className=' text-[25px] font-bold'>Flexible hours</div>
                 <div className=' text-gray-600 w-[350px] text-center '>As an independent courier, you choose when to earn money delivering orders.
                 </div>
              </div>
              <div className=' flex flex-col items-center px-6 py-8 rounded-lg bg-white shadow-lg'>
              <div className=' text-[#FF4500]'>
                  <MdDirectionsBike size={30}/>
                  </div>
                 <div className=' text-[25px] font-bold'>Deliver food your way</div>
                 <div className=' text-gray-600 w-[350px] text-center '>Want to make money as a delivery driver, or get some exercise on your bike? You decide.
                 </div>
              </div>
            </div>
        </div>
        <div className=' row-span-2 max-w-7xl mx-auto px-4 py-8'>
          <div className=' col-span-1 '>
            <div className=' w-[90%] h-[90%] rounded-lg border'>
              <img src={bike} alt="" className=' object-fill w-[100%] h-[100%] rounded-lg' />
            </div>
          </div>
          <div className=' col-span-1 '>
             <div className=' w-[100%] h-[80%] '>
               <div className=' h[50px] w-[100%] text-[30px] font-[500]'>Boost your earnings</div>
               <div className=' flex h-[100px] w-[100%]'>
                  <div className=' w-[5%]'>
                  <div className=' bg-[#FF4500] rounded-3xl w-[25px] h-[25px] flex justify-center items-center '>1</div>
                   </div>
                  <div>
                   <div className=' text-[20px]'>Earn more when it’s busy</div>
                   <div className=' w-[420px]'>Maximise your earnings with our dynamic pricing model, so you get  paid more during busy times.</div>
                  </div>
                </div>
                <div className=' flex h-[100px] w-[100%]'>
                <div className=' w-[5%]'>
                  <div className=' bg-[#FF4500] rounded-3xl w-[25px] h-[25px] flex justify-center items-center '>1</div>
                   </div>
                  <div>
                   <div className=' text-[20px]'>Keep all of your tips</div>
                   <div className=' w-[450px]'>Receive additional earnings from customers who appreciate your hard work.</div>
                  </div>
                </div>
                <div className=' flex h-[100px] w-[100%]'>
                <div className=' w-[5%]'>
                  <div className=' bg-[#FF4500] rounded-3xl w-[25px] h-[25px] flex justify-center items-center '>1</div>
                   </div>
                  <div>
                   <div className=' text-[20px]'>Get paid more with bonuses</div>
                   <div className=' w-[429px]'>We offer extra income opportunities for completing deliveries on weekends, during late hours or on bad weather days.</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
        <div className=' row-span-1 grid grid-rows-3'>
           <div className='row-span-1 '>
              <div className=' text-[45px] flex justify-center items-center'>Bolt food courier requirements</div>
           </div>
           <div className=' row-span-2 grid grid-cols-3'>
              <div className=' flex flex-col justify-center items-center'>
              <div className=' text-[#FF4500]'>
                  <FaImagePortrait  size={30}/>
                  </div>
                 <div className=' text-[25px] font-bold'>Valid photo ID</div>
                 <div className=' text-gray-600 w-[350px] text-center '>Proving that you meet the minimum age requirement
                 </div>
              </div>
              <div className=' flex flex-col justify-center items-center'>
              <div className=' text-[#FF4500]'>
                  <RiSmartphoneFill size={30}/>
                  </div>
                 <div className=' text-[25px] font-bold'>Smartphone</div>
                 <div className=' text-gray-600 w-[350px] text-center '>Android 9.0+ or iOS 12+, with a local number
                 </div>
              </div>
              <div className='flex flex-col justify-center items-center'>
              <div className=' text-[#FF4500]'>
                  <FaLocationArrow size={30}/>
                  </div>
                 <div className=' text-[25px] font-bold'>Scooter, bike or car</div>
                 <div className=' text-gray-600 w-[350px] text-center '>With a valid licence and insurance
                 </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Payout;