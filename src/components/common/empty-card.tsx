'use client'
import { Button } from '@heroui/react'
import Image from 'next/image'
import React from 'react'

export default function EmptyCard() {
  return (
    <div className='w-[380px] h-[586px] flex flex-col gap-6 mx-auto my-auto items-center justify-center'>
      <Image height={152} width={152} src="/empty.svg" alt="" />
    <p className='text-xl font-semibold'>Favorites, Just a Click Away</p>
    <p className='text-sm text-center px-10'>Save tours or stays you love and access them anytime from your favourites list.</p>
    <Button className='h-[36px] w-[140px] bg-primary text-white-50 text-sm font-normal'>Let’s Fill This Up!</Button>
    </div>
  )
}
