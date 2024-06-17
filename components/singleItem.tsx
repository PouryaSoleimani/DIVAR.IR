/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import Image from 'next/image'
import React from 'react'

const SingleItem = () => {
  return (
    <div className='border w-fit h-fit py-4 px-3 rounded-md mt-10 flex gap-x-4 cursor-pointer hover:border-black duration-300'>
      <Image src='/ac35c186-cdc1-4d65-b520-d9288a0db8c9.webp' width={100} height={50} alt='Single-item-img' />
      <div className='flex flex-col items-end justify-between'>
        <h1>دوچرخه 24 گالانت</h1>
        <span className='flex flex-col items-end justify-around space-y-2'>
          <p className='text-sm text-zinc-400'>نو</p>
          <p className='text-sm text-zinc-500 rtl font-normal'>تومان7/500/000   </p>
          <p className='text-sm text-zinc-500'>لحظاتی پیش در کیانمهر</p>
        </span>
      </div>
    </div>
  )
}

export default SingleItem