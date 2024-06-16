/* eslint-disable import/order */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
import { Button, Kbd, Link, Input, Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, NavbarMenuItem, link as linkStyles, } from "@nextui-org/react";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, GithubIcon, DiscordIcon, HeartFilledIcon, SearchIcon } from "@/components/icons";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input aria-label="Search" classNames={{ inputWrapper: "bg-default-100", input: "text-xs" }} radius="sm" endContent={<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />} labelPlacement="outside" placeholder="جستجو در همه ی آگهی ها" type="search" className="w-[300px]" />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" dir="rtl">
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
          <Button isExternal as={Link} className="text-sm font-semibold rounded-[7px] text-default-600 bg-default-100" href={siteConfig.links.sponsor} endContent={<FaChevronDown className="text-default text-xl translate-y-1 mr-1" />} variant="flat"  >   دسته ها  </Button>
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>

      </NavbarContent>


      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end" >
        <div className="hidden lg:flex gap-2 justify-start ml-20">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              {/* <NextLink className={clsx(linkStyles({ color: "foreground" }), "data-[active=true]:text-primary data-[active=true]:font-medium",)} color="foreground" href={item.href} >
                {item.label}
              </NextLink> */}
              <Button isExternal as={Link} className="text-sm font-semibold rounded-[7px] text-default-600 " href={siteConfig.links.sponsor} startContent={<FaChevronDown className="text-default text-xl translate-y-1 mr-1" />} variant="light"  >{item.label}</Button>
            </NavbarItem>
          ))}
        </div>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button isExternal as={Link} className="text-sm text-default-100 bg-red-900 font-bold rounded-md" href={siteConfig.links.sponsor} variant="flat"  >   ثبت آگهی  </Button>
        </NavbarItem>
      </NavbarContent>


      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
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
