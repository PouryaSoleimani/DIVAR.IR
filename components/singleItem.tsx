/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import { Image } from '@nextui-org/react'
import NextImage from "next/image";
import React from 'react'

type SingleItemType = { id: number, title: string, location: string, img: string, price: number, status: string }

const SingleItem = (item: SingleItemType) => {
  return (
    <div className='border-2 py-3 px-2 rounded-md mt-10 flex items-start justify-between gap-x-2 cursor-pointer m-1 w-[22rem] h-[10rem] hover:border-zinc-600 duration-300'>
      <Image as={NextImage} isZoomed isBlurred radius='none' src={item.img} width={100} height={150} alt='Single-item-img' className='max-w-[12rem] h-[8.5rem] rounded-[2px]' />
      <div className='flex flex-col items-end justify-between gap-y-10'>
        <h1 className='whitespace-nowrap'>{item.title}</h1>
        <span className='flex flex-col items-end justify-around space-y-2'>
          <p className='text-sm text-zinc-500'>{item.status}</p>
          <p className='text-sm text-zinc-500 rtl flex flex-row gap-x-1 leading-3'>تومان<span>{item.price?.toLocaleString()}</span>   </p>
          <p className='text-sm text-zinc-500 whitespace-nowrap tracking-tighter'>لحظاتی پیش در <span>{item.location}</span></p>
        </span>
      </div>
    </div>
  )
}

export default SingleItem