/* eslint-disable prettier/prettier */
import { Link } from "@nextui-org/react";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen items-start justify-start p-0">
      <Head />
      <Navbar />
      <main className="pt-8 w-screen flex-grow flex flex-row-reverse items-start justify-between ">
        <Sidebar />
        {children}
      </main>

      <footer className="w-full flex items-center justify-center py-3">
        <Link isExternal className="flex items-center gap-x-1 text-current" href="https://github.com/PouryaSoleimani" title="nextui.org homepage"  >
          <span className="text-default-600">Designed and Developed By</span>
          <p className="text-red-700 font-bold ">Pourya Soleimani</p>
        </Link>
      </footer>
    </div>
  );
}
