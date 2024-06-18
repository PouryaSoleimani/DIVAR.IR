/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import { Noto_Sans_Arabic } from 'next/font/google'

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";

import { RecoilRoot } from 'recoil';

const inter = Noto_Sans_Arabic({
  subsets: ['arabic'],
  weight: "700"
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <RecoilRoot>
      <NextUIProvider navigate={router.push} className={inter.className}>
        <NextThemesProvider>
          <Component {...pageProps} />
        </NextThemesProvider>
      </NextUIProvider>
    </RecoilRoot>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
