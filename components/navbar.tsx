/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import { Button, Link, Input, Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "@/components/icons";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoCarSportOutline, IoChatboxEllipses } from "react-icons/io5";
import { MdOutlineSupport } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { Logo } from "@/components/icons";
import { TbBuildingEstate } from "react-icons/tb";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { LuDices, LuLamp } from "react-icons/lu";
import { PiOfficeChairBold, PiPaintBrushBroadBold, PiSuitcaseBold } from "react-icons/pi";
import { BsSmartwatch } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { Noto_Sans_Arabic } from 'next/font/google'

const inter = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: "700"
})

export const Navbar = () => {
  const searchInput = (
    <Input aria-label="Search" classNames={{ inputWrapper: "bg-default-100", input: "text-xs" }} radius="sm" endContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />} labelPlacement="outside" placeholder="جستجو در همه ی آگهی ها" type="search" className="w-[300px]" />
  );

  return (
    <NextUINavbar maxWidth="full" position="sticky" dir="rtl" className="border-b pb-2 border-zinc-300 w-full overflow-hidden">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">

        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>

        <NavbarItem className="hidden md:flex">
          <Button isExternal as={Link} className="text-sm font-semibold rounded-[7px] text-default-600 bg-default-100" href={siteConfig.links.sponsor} startContent={<FaLocationDot className="text-default text-xl" />} variant="flat"  >   تهران  </Button>
        </NavbarItem>


        <NavbarItem className="hidden md:flex">
          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button className="text-sm font-semibold rounded-[7px] text-default-600 bg-default-100" endContent={<FaChevronDown className="text-default text-xl translate-y-1 mr-1" />} variant="flat"  >   دسته ها  </Button>
            </DropdownTrigger>

            <DropdownMenu variant="faded" aria-label="Static Actions" dir="rtl" className={`text-4xl font-extrabold p-2 ${inter.className}`}>
              <DropdownItem startContent={<TbBuildingEstate />} key="realstate"><p className="text-xl">املاک</p></DropdownItem>
              <DropdownItem startContent={<IoCarSportOutline />} key="vehicles"> <p className="text-xl">وسایل نقلیه</p></DropdownItem>
              <DropdownItem startContent={<HiOutlineDevicePhoneMobile />} key="digitals"><p className="text-xl">کالای دیجیتال </p></DropdownItem>
              <DropdownItem startContent={<LuLamp />} key="homeappliances"> <p className="text-xl">خانه و آشپزخانه</p></DropdownItem>
              <DropdownItem startContent={<PiPaintBrushBroadBold />} key="homeappliances"> <p className="text-xl"> خدمات </p></DropdownItem>
              <DropdownItem startContent={<BsSmartwatch />} key="homeappliances"> <p className="text-xl"> وسایل شخصی </p></DropdownItem>
              <DropdownItem startContent={<LuDices />} key="homeappliances"> <p className="text-xl">سرگرمی</p></DropdownItem>
              <DropdownItem startContent={<GoPeople />} key="homeappliances"> <p className="text-xl">اجتماعی</p></DropdownItem>
              <DropdownItem startContent={<PiOfficeChairBold />} key="homeappliances"> <p className="text-xl">تجهیزات و صنعتی</p></DropdownItem>
              <DropdownItem startContent={<PiSuitcaseBold />} key="homeappliances"> <p className="text-xl"> استخدام و کاریابی </p></DropdownItem>
            </DropdownMenu>

          </Dropdown>
        </NavbarItem>



        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>

      </NavbarContent>


      <NavbarContent className="hidden sm:flex items-center basis-1/5 sm:basis-full" justify="end" >
        <div className="hidden lg:flex justify-start items-center ml-8">
          <NavbarItem className="flex items-center">
            <Button isExternal as={Link} className="text-sm font-semibold rounded-[7px] text-default-600 flex items-center" href={siteConfig.links.sponsor} startContent={<FaUserAlt className="text-default text-lg mr-1" />} variant="light"  >دیوار من</Button>
          </NavbarItem>
          <NavbarItem className="flex items-center">
            <Button isExternal as={Link} className="text-sm font-semibold rounded-[7px] text-default-600 flex items-center" href={siteConfig.links.sponsor} startContent={<IoChatboxEllipses className="text-default text-lg translate-y-[1px] mr-1" />} variant="light"  > چت</Button>
          </NavbarItem>
          <NavbarItem className="flex items-center">
            <Button isExternal as={Link} className="text-sm font-semibold rounded-[7px] text-default-600 flex items-center " href={siteConfig.links.sponsor} startContent={<MdOutlineSupport className="text-default text-lg translate-y-[1px] mr-1" />} variant="light"  > پشتیبانی</Button>
          </NavbarItem>
          <NavbarItem className="flex items-center">
            <Button isExternal as={Link} className="text-sm font-semibold rounded-[7px] text-default-600 flex items-center " href={siteConfig.links.sponsor} startContent={<BiWorld className="text-default text-lg translate-y-[1px] mr-1" />} variant="light"  > زبان</Button>
          </NavbarItem>
        </div>

        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button isExternal as={Link} className="text-sm text-default-100 bg-red-900 font-bold rounded-md" href={siteConfig.links.sponsor} variant="flat"  >   ثبت آگهی  </Button>
        </NavbarItem>
      </NavbarContent>


      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color={index === 2 ? "primary" : index === siteConfig.navMenuItems.length - 1 ? "danger" : "foreground"} href="#" size="lg" >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
