/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { Sidebar } from '@/components/sidebar'
import SingleItem from '@/components/singleItem'
import React from 'react'

function index() {
  return (
    <div className='flex flex-row-reverse'>
      <Sidebar />
      <SingleItem />
    </div>
  )
}

export default index