/* eslint-disable prettier/prettier */
import DefaultLayout from "@/layouts/default";
import SingleItem from "@/components/singleItem";
import { GetStaticProps } from "next";
import axios from "axios";

interface DataType { response: [{ id: number, title: string, price: number, views: number, status: string, location: string, img: string }] }
type SingleItemType = { id: number, title: string, price: number, views: number, status: string, location: string, img: string }


export default function IndexPage({ response }: DataType) {
  return (
    <DefaultLayout>
      <section className="flex flex-wrap items-center justify-end pl-2 w-full">
        {response.map(((item: SingleItemType) => <SingleItem key={item.id} {...item} />))}
      </section>
    </DefaultLayout>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const request = axios.get('http://localhost:5000/products')
  const response = (await request).data
  
  return {
    props: { response },
    revalidate: 2000
  }
}
