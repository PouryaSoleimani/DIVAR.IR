/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import React from 'react'
import { TbBuildingEstate } from "react-icons/tb";
import { IoCarSportOutline } from "react-icons/io5";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { LuLamp } from "react-icons/lu";
import { PiPaintBrushBroadBold } from "react-icons/pi";
import { BsSmartwatch } from "react-icons/bs";
import { LuDices } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { PiOfficeChairBold } from "react-icons/pi";
import { PiSuitcaseBold } from "react-icons/pi";

export const Sidebar = () => {
  return (
    <section className='flex flex-col items-start justify-start'>
      <div id="sideBarCategories" className='tracking-tighter h-fit pb-6 w-fit text-[14px] border-b border-zinc-300 flex items-start justify-start pr-4 text-zinc-500 leading-5 pl-16 '>
        <ul className='flex flex-col space-y-5 font-thin tracking-tighter'>
          <h2 className='text-zinc-400 text-[12px] text-end px-2'>دسته ها</h2>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><TbBuildingEstate className='w-6 h-6' />املاک </li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><IoCarSportOutline className='w-6 h-6' />وسایل نقلیه</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><HiOutlineDevicePhoneMobile className='w-6 h-6' />کالای دیجیتال</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><LuLamp className='w-6 h-6' />خانه و آشپزحانه</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><PiPaintBrushBroadBold className='w-6 h-6' />خدمات</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><BsSmartwatch className='w-6 h-6' />وسایل شخصی</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><LuDices className='w-6 h-6' />سرگرمی و فراغت</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><GoPeople className='w-6 h-6' />اجتماعی</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[12px] sm:[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><PiOfficeChairBold className='w-6 h-6' />تجهیزات و صنعتی</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><PiSuitcaseBold className='w-6 h-6' />استخدام و کاریابی </li>
        </ul>
      </div>
      <div id="sideBarPlace">
        
      </div>
    </section>
  )
}
