/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import React from 'react'
import axios from 'axios'
import SingleItem from '@/components/singleItem'
import { Sidebar } from '@/components/sidebar'
import { GetStaticProps } from 'next'


interface DataType { response: { id: number, title: string, price: number, views: number, status: string, location: string, img: string } }

function TestPage({ response }: DataType) {

  return (
    <div className='flex flex-row-reverse'>
      <Sidebar />
      <SingleItem {...response} />
    </div>
  )
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  const request = axios.get('http://localhost:5000/products/1')
  const response = (await request).data

  return {
    props: { response },
  }
}

export default TestPage