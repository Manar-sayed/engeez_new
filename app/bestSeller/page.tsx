import BestSeller from '@/components/autoSpares_com/bestSeller'
import { Label } from '@/components/ui/label'
import React from 'react'

function Best_Seller() {
  return (
    <>
      <div className='my-7'>
        <div className='flex justify-between'>
          <Label className='flex justify-end ps-3 text-green-400 text-xs font-light md:text-lg xl:text-xl  m-7'>
            المزيد
          </Label>
          <Label className='flex justify-end text-green-400 text-base md:text-3xl xl:text-4xl font-bold m-7'>
            الاكثر مبيعا
          </Label>
        </div>
        <center className='mx-5 xl:mx-0'>
          <BestSeller />
        </center>
      </div>
    </>
  )
}

export default Best_Seller