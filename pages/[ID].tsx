//^ DYNAMIC PRODUCT DETAILS PAGE =========================================================================================================================================== 
import { Navbar } from '@/components/navbar'
import { Button, Image, Textarea } from '@nextui-org/react'
import axios from 'axios'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import NextImage from 'next/image'
// ICONS
import { CgDanger } from "react-icons/cg";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaShareNodes } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

interface Props { response: { id: number, title: string, location: string, img: string, price: number, status: string } }
type SingleItemType = { id: number, title: string, location: string, img: string, price: number, status: string }

// COMPONENT
const SingleItemPage: NextPage<Props> = ({ response }) => {
  return (
    <>
      <Navbar />
      <section className='flex flex-col md:flex-row items-end md:items-start justify-between md:gap-x-16 w-screen md:w-[95%] mx-auto md:p-2 scale-85'>
        <div id="LEFT" className='w-screen md:w-1/2'>
          <Image as={NextImage} isZoomed isBlurred src={response.img} width={900} height={600} className='w-full md:w-full' />
          <Textarea dir='rtl' size='lg' placeholder='یادداشت شما' className='mt-10 font-bold text-xl text-zinc-600 overflow-y-auto' />
          <p className='text-end md:pr-2 text-zinc-400 text-[12px] mt-1'>یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک خواهد شد</p>
          <Button size='lg' variant='bordered' radius='sm' endContent={<FaPlus className='translate-y-.5' />} className='md:w-full text-zinc-600 mt-10 mr-4 h-[80px] text-right text-2xl flex items-center justify-end'>ارزیابی قیمت</Button>

          <div className='flex flex-row-reverse items-center justify-between w-full mt-10 px-3 border-t pt-6'>
            <h3 className='text-xl leading-loose'>بازخورد شما دربارهٔ این آگهی چیست؟</h3>
            <span className='flex items-center justify-end space-x-3 md:text-2xl'>
              <AiFillLike className='w-12 h-12 hover:bg-zinc-300/50 hover:scale-110 rounded-full p-2 duration-300 cursor-pointer text-emerald-600' />
              <AiFillDislike className='w-12 h-12 hover:bg-zinc-300/50 hover:scale-110 rounded-full p-2 duration-300 cursor-pointer text-red-800' />
            </span>
          </div>

          <div className='border-t my-6 py-2 flex items-center justify-end'>
            <Button endContent={<CgDanger className='w-8 h-8 text-red-700' />} startContent={<FaChevronCircleLeft className='w-6 h-6' />} className='my-3 py-6 w-fit whitespace-pre-wrap text-sm md:text-md text-foreground/60 hover:scale-110 duration-500 flex items-center justify-end'>گزارش کلاهبرداری و رفتار مشکوک</Button>
          </div>
        </div>


        <div id="RIGHT" className='text-end w-screen md:w-1/2'>
          <div className='text-end space-y-6 mt-4 md:mt-1 md:space-y-4 pb-2 w-full'>
            <h1 className='text-4xl whitespace-nowrap'>{response.title}</h1>
            <h2 className='text-zinc-600 text-xl'>{response.location}</h2>
          </div>

          <div className='border-t border-b my-6 py-2 flex items-center justify-end'>
            <Button endContent={<CgDanger className='w-8 h-8 text-red-700' />} startContent={<FaChevronCircleLeft className='w-6 h-6' />} className='my-3 py-6 w-fit whitespace-pre-wrap text-sm md:text-md text-foreground/60 hover:scale-110 duration-500 flex items-center justify-end'>زنگ خظر های قبل از معامله</Button>
          </div>

          <div className='flex items-center justify-between space-y-2 flex-row-reverse space-x-1 w-full'>
            <span className='flex items-center justify-end space-x-1'>
              <Button radius='sm' size="lg" className='md:text-xl p-8'>چت</Button>
              <Button radius='sm' size="lg" className='md:text-xl bg-red-900 text-white p-8'>اطلاعات تماس</Button>
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
            <span className='py-6 flex items-center whitespace-pre-line justify-between w-full px-4 my-4 text-xl text-foreground/70 border-b flex-row-reverse'>
              <p>آخرین به روزرسانی</p>
              <p>نیم ساعت پیش</p>
            </span>
            <span className='py-6 flex items-center justify-between w-full px-4 my-4 text-xl text-foreground/70 border-b flex-row-reverse'>
              <p> قیمت </p>
              <p className='text-2xl flex items-center gap-x-1 justify-start'><span className='text-sm'>تومان</span> {response.price.toLocaleString()} </p>
            </span>
          </div>

          <div className='text-xl flex text-foreground/80 py-10'>
            <p className='text-ellipsis'>
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