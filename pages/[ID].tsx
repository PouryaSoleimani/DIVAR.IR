//^ DYNAMIC PRODUCT DETAILS PAGE =========================================================================================================================================== 
import { Navbar } from '@/components/navbar'
import { Button, Image } from '@nextui-org/react'
import axios from 'axios'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import NextImage from 'next/image'
// ICONS
import { CgDanger } from "react-icons/cg";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";

interface Props { response: { id: number, title: string, location: string, img: string, price: number, status: string } }
type SingleItemType = { id: number, title: string, location: string, img: string, price: number, status: string }

// COMPONENT
const SingleItemPage: NextPage<Props> = ({ response }) => {
  return (
    <>
      <Navbar />
      <section className='flex items-start justify-between w-[85%] mx-auto p-10'>
        <div id="LEFT" className='w-1/2'>
          <Image as={NextImage} src={response.img} width={700} height={600} />
        </div>


        <div id="RIGHT" className='text-end w-1/2'>
          <div className='text-end space-y-4 pb-2 w-full'>
            <h1 className='text-4xl'>{response.title}</h1>
            <h2 className='text-zinc-600 text-xl'>{response.location}</h2>
          </div>

          <div className='border-t border-b my-6 py-2 flex items-center justify-end'>
            <Button endContent={<CgDanger className='w-8 h-8 text-red-700' />} startContent={<FaChevronCircleLeft className='w-6 h-6' />} className='my-3 py-6 text-md text-foreground/60 hover:scale-110 duration-500 flex items-center justify-end'>زنگ خظر های قبل از معامله</Button>
          </div>

          <div className='flex items-center justify-between flex-row-reverse space-x-1'>
            <span className='flex items-center justify-end space-x-1'>
              <Button radius='sm' size="lg" className='text-xl p-8'>چت</Button>
              <Button radius='sm' size="lg" className='text-xl bg-red-900 text-white p-8'>اطلاعات تماس</Button>
            </span>
            <span className='flex items-center justify-center space-x-4'>
              <FaShareNodes className='w-12 h-12 hover:bg-zinc-300/50 hover:scale-110 rounded-full p-2 duration-300 cursor-pointer' />
              <FaBookmark className='w-12 h-12 hover:bg-zinc-300/50 hover:scale-110 rounded-full p-2 duration-300 cursor-pointer' />
            </span>
          </div>

          <div>
            <span className='py-6 flex items-center justify-between w-full px-4 my-4 text-xl text-foreground/70 border-b flex-row-reverse'>
              <p>وضعیت</p>
              <p>{response.status}</p>
            </span>
            <span className='py-6 flex items-center justify-between w-full px-4 my-4 text-xl text-foreground/70 border-b flex-row-reverse'>
              <p>آخرین به روزرسانی</p>
              <p>نیم ساعت پیش</p>
            </span>
            <span className='py-6 flex items-center justify-between w-full px-4 my-4 text-xl text-foreground/70 border-b flex-row-reverse'>
              <p> قیمت </p>
              <p className='text-2xl flex items-center gap-x-1 justify-start'><span className='text-sm'>تومان</span> {response.price.toLocaleString()} </p>
            </span>
          </div>

          <div className='text-xl text-foreground/80 py-10'>
            <p className='whitespace-pre leading text-wrap'>
              توضیحات
              (((**گروه تولیدی درب بابازاده**)))
              بزرگترین تولیدکننده و توضیع کننده دربهای ساختمانی

              بالاترین کیفیت و پایین ترین قیمت
              ****در کل استان البرز****
              به صورت تک و عمده و قابل مذاکره با انبوه سازان
              ✅️درب لابی✅️درب ضدسرقت ✅️درب اتاق و سرویس و حمام ✅️چهارچوب فلزی و چوبی و ضدآب
              ✅️کاور چهارچوب ضدسرقت و اتاقی
              ✅️قفل و دستگیره هوشمند اثرانگشتی و کارتی
              ✅️دستگیره دربهای اتاق و سرویس

              جهت کسب اطلاعات بیشتر با کارشناسان فروش این مجموعه در تماس باشید

              **ساعت بازدید 9:00 الی 18:00**

              **** پخش مرکزی درب بابازاده****
              ♦️آدرس و لوکیشن پایین آگهی میباشد♦️
            </p>
          </div>

        </div>
      </section>
    </>

  )
}

//^ STATIC PATHS
export const getStaticPaths: GetStaticPaths = async () => {
  const request = axios.get(`http://localhost:5000/products`)
  const response = (await request).data
  const paths = response.map((item: SingleItemType) => { return { params: { ID: String(item.id) } } })
  return {
    paths: paths,
    fallback: false,
  }
}

//* STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
  const productID = ctx.params?.ID
  const request = axios.get(`http://localhost:5000/products/${productID}`)
  const response = (await request).data

  return {
    props: { response },
  }
}

export default SingleItemPage