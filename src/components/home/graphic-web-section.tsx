import { Button } from '@heroui/react'
import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function GraphicWebSection() {
  return (
    <div className='flex bg-[#060f15] pt-20 items-center px-5 h-[750px] justify-center gap-20'>
      <div className=' flex gap-2'>
        {/* img section  */}

        <div className='flex flex-col gap-2'>
            <img src="/dist/images/hero-images/img1.png" alt="" className='h-52 w-52 rounded-full object-cover'/>
            <img src="/dist/images/hero-images/img1.png" alt="" className='h-72 w-52'/>
        </div>
        <div className='flex flex-col gap-2  mt-16'>
            <img src="/dist/images/hero-images/img1.png" alt="" className='h-72 w-52'/>
            <img src="/dist/images/hero-images/img1.png" alt="" className='h-52 w-52 rounded-full object-cover'/>
        </div>
      </div>
      <div className='text-white flex flex-col gap-5'>
        <h1 className='text-4xl font-extrabold'>I'm A Creative Graphic & <br/>Web Designer</h1>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vitae <br /> eligendi accusantium saepe ratione eos doloremque sed? Nam, quas sunt.</p>

        <button className="flex items-center px-4 py-3 bg-white text-black text-sm font-semibold rounded-tl-4xl rounded-br-4xl shadow hover:scale-105 transition w-44">
          <span className="italic font-semibold">View All Service</span>
          <span className="ml-2 bg-[#802cf2] p-1 text-white">
            <ChevronRight size={16} />
          </span>
        </button>
      </div>
    </div>
  )
}
