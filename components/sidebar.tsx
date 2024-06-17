/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Accordion, AccordionItem, Button, Input } from "@nextui-org/react";
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
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import Image from 'next/image';


export const Sidebar = () => {
  return (
    <section className='flex flex-col items-start justify-start pr-2'>  

      <div id="sideBarCategories" className='tracking-tighter h-fit pb-6 w-full text-[8px] sm:text-[14px] border-zinc-300 flex items-start justify-end pr-2 overflow-hidden text-zinc-500 leading-5 pl-16 '>
        <ul className='flex flex-col space-y-1 sm:space-y-5 font-thin tracking-tighter'>
          <h2 className='text-zinc-400 text-[8px] sm:text-[12px] text-end px-2'>دسته ها</h2>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><TbBuildingEstate className='w-6 h-6' />املاک </li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer sm:text-[12px] whitespace-nowrap leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><IoCarSportOutline className='w-6 h-6' />وسایل نقلیه</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer whitespace-nowrap sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><HiOutlineDevicePhoneMobile className='w-6 h-6' />کالای دیجیتال</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer whitespace-nowrap sm:text-[12px] leading-3 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><LuLamp className='w-6 h-6' />خانه و آشپزحانه</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer whitespace-nowrap sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><PiPaintBrushBroadBold className='w-6 h-6' />خدمات</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer whitespace-nowrap sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><BsSmartwatch className='w-6 h-6' />وسایل شخصی</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer whitespace-nowrap sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><LuDices className='w-6 h-6' />سرگرمی </li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer whitespace-nowrap  sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><GoPeople className='w-6 h-6' />اجتماعی</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer whitespace-nowrap sm:[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><PiOfficeChairBold className='w-6 h-6' />تجهیزات و صنعتی</li>
          <li className='flex flex-row-reverse items-center gap-2 cursor-pointer whitespace-nowrap sm:text-[12px] leading-4 font-light hover:bg-zinc-200 px-2 py-1 rounded-lg'><PiSuitcaseBold className='w-6 h-6' />استخدام و کاریابی </li>
        </ul>    
      </div>

      <div id="sideBarAccordions" className='w-full'>
        <Accordion
          motionProps={{
            variants: {
              enter: { y: 0, opacity: 1, height: "auto", transition: { height: { type: "spring", stiffness: 500, damping: 30, duration: 1, }, opacity: { easings: "ease", duration: 1, }, }, },
              exit: { y: -10, opacity: 0, height: 0, transition: { height: { easings: "ease", duration: 0.25, }, opacity: { easings: "ease", duration: 0.3, }, }, },
            },
          }} className="text-zinc-400 w-full"  >
          <AccordionItem key="1" aria-label="آگهی دهنده" title="نوع آگهی دهنده" className='flex flex-col border-zinc-300 items-end text-zinc-400 py-1'>
            <Button size='sm' radius='sm' className='hover:bg-red-800 hover:text-white'>فروشگاه</Button>
            <Button size='sm' radius='sm' className='hover:bg-red-800 hover:text-white'>شخصی</Button>
            <Button size='sm' radius='sm' className='hover:bg-red-800 hover:text-white'>همه</Button>
          </AccordionItem>
          <AccordionItem key="2" aria-label="محل" title="محل" className='flex flex-col items-end text-zinc-400'>
            <Input placeholder='تعیین محل' size='md' radius='sm' dir='rtl' variant='bordered' accept='string' autoComplete='true' />
          </AccordionItem>
          <AccordionItem key="3" aria-label="قیمت" title="قیمت" className='flex flex-col items-end'>
            <span className='flex flex-col space-y-1'>
              <Input placeholder='حداقل' radius='sm' dir='rtl' variant='bordered' accept='string' autoComplete='true' />
              <Input placeholder='حداکثر' radius='sm' dir='rtl' variant='bordered' accept='string' autoComplete='true' />
            </span>
          </AccordionItem>
          <AccordionItem key="4" aria-label="وضعیت کالا" title="وضعیت کالا" className='flex flex-col items-end '>
            <Button size='sm' radius='sm' className='hover:bg-red-800 hover:text-white'>در حد تو</Button>
            <Button size='sm' radius='sm' className='hover:bg-red-800 hover:text-white'>کارکرده</Button>
            <Button size='sm' radius='sm' className='hover:bg-red-800 hover:text-white'>آکبند</Button>
          </AccordionItem>
        </Accordion>
      </div>

      <div id="sideBarLogos" className='flex flex-col'>
        <ul id="top" className='text-xs text-zinc-400 flex space-x-3 font-thin py-6'>
          <li>درباره ی دیوار</li>
          <li>دریافت برنامه</li>
          <li>اتاق خبر</li>
        </ul>
        <ul id="middle" className='text-xs text-zinc-400 flex justify-center space-x-3 py-2'>
          <li> کسب و کارها </li>
          <li> پشتیبانی و قوانین</li>
        </ul>
        <div id='logos' className='flex items-center justify-around py-4 text-zinc-500 text-xl'>
          <BsTelegram />
          <FaLinkedin />
          <RiInstagramFill />
          <FaTwitter />
        </div>
        <div id="bottom" className='flex items-center justify-center py-2'>
          <Image src='/samandehi_logo.png' alt='logo' width={70} height={80} />
          <Image src='/organization_logo.png' alt='logo' width={70} height={80} />
          <Image src='/enamad_logo.png' alt='logo' width={70} height={80} />
        </div>

      </div>

    </section>
  )
}
