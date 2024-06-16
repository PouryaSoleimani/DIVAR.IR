/* eslint-disable prettier/prettier */
import { Link } from "@nextui-org/react";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
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
