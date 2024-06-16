/* eslint-disable prettier/prettier */
import { Fira_Code as FontMono, Inter as FontSans, Akatab  , Candal} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const candal = Candal({
  subsets: ["latin"],
  variable: "--font-alerta",
  weight: "400"
})