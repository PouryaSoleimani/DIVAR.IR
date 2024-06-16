/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react";
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
  const defaultContent = "t enim ad .";

  return (
    <section className='flex flex-col items-start justify-start'>
      <div id="sideBarCategories" className='tracking-tighter h-fit pb-6 w-fit text-[14px] border-b border-zinc-300 flex items-start justify-start pr-2 overflow-hidden text-zinc-500 leading-5 pl-16 '>
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

      <div id="sideBarAccordions" className='w-full pr-2'>
        <Accordion
          motionProps={{
            variants: {
              enter: { y: 0, opacity: 1, height: "auto", transition: { height: { type: "spring", stiffness: 500, damping: 30, duration: 1, }, opacity: { easings: "ease", duration: 1, }, }, },
              exit: { y: -10, opacity: 0, height: 0, transition: { height: { easings: "ease", duration: 0.25, }, opacity: { easings: "ease", duration: 0.3, }, }, },
            },
          }} className="text-zinc-400 w-full pr-10"  >
          <AccordionItem key="1" aria-label="محل" title="محل" className='flex flex-col items-end text-zinc-400'>
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="قیمت" title="قیمت" className='flex flex-col items-end'>
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="وضعیت آگهی" title="وضعیت آکهی" className='flex flex-col items-end'>
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>

      <div id="sideBarLogos">

      </div>
    </section>
  )
}
