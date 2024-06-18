/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import { Image } from '@nextui-org/react'
import NextImage from "next/image";
import React from 'react'

type SingleItemType = { id: number, title: string, location: string, img: string, price: number, status: string }

const SingleItem = (item: SingleItemType) => {
  return (
    <div className='border-2 w-fit h-fit py-4 px-3 rounded-md mt-10 flex gap-x-4 cursor-pointer m-1 hover:border-zinc-600 duration-300'>
      <Image as={NextImage} isZoomed isBlurred radius='none' src={item.img} width={100} height={50} alt='Single-item-img' />
      <div className='flex flex-col items-end justify-between'>
        <h1>{item.title}</h1>
        <span className='flex flex-col items-end justify-around space-y-2'>
          <p className='text-sm text-zinc-500'>{item.status}</p>
          <p className='text-sm text-zinc-500 rtl flex flex-row gap-x-1 leading-3'>تومان<span>{item.price.toLocaleString()}</span>   </p>
          <p className='text-sm text-zinc-500'>لحظاتی پیش در <span>{item.location}</span></p>
        </span>
      </div>
    </div>
  )
}

export default SingleItem