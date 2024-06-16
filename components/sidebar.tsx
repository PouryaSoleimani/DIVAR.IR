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
    <div className='font-candal'>
      <div id="sideBarCategories" className='tracking-tighter relative top-0 right-0 h-full text-[14px] border-b border-zinc-300 mb-6 pb-6 flex items-center justify-start pr-8 text-zinc-800 leading-5'>
        <ul className='flex flex-col space-y-5 font-thin tracking-tighter'>
          <h2 className='text-zinc-700 text-[12px]'>دسته ها</h2>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:text-zinc-900'><TbBuildingEstate />املاک </li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:text-zinc-900'><IoCarSportOutline />وسایل نقلیه</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:text-zinc-900'><HiOutlineDevicePhoneMobile />کالای دیجیتال</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:text-zinc-900'><LuLamp />خانه و آشپزحانه</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:text-zinc-900'><PiPaintBrushBroadBold />خدمات</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:text-zinc-900'><BsSmartwatch />وسایل شخصی</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:text-zinc-900'><LuDices />سرگرمی و فراغت</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:text-zinc-900'><GoPeople />اجتماعی</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:[12px] leading-4 font-light hover:text-zinc-900'><PiOfficeChairBold />تجهیزات و صنعتی</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer text-[10px] sm:text-[12px] leading-4 font-light hover:text-zinc-900'><PiSuitcaseBold />استخدام و کاریابی </li>
        </ul>
      </div>
    </div>
  )
}
