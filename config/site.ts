/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable prettier/prettier */
export type SiteConfig = typeof siteConfig;
import { FaUserAlt } from "react-icons/fa";

export const siteConfig = {
  name: "Divar.ir-Pourya Soleimani",
  description: "A Fully Responsive Website , With Dark And Light theme , Inspired By Divar.ir , But Added a Little more Modern Stuffs to it ...",
  navItems: [
    {
      label: "دیوار من",
      href: "/",
      logo: "FaUserAlt"
    },
    {
      label: "چت",
      href: "/docs",
    },
    {
      label: "پشتیبانی",
      href: "/pricing",
    },
    {
      label: "زبان",
      href: "/blog",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui-docs-v2.vercel.app",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
