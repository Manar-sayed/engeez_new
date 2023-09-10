import DepartmentsSwiper from '@/components/autoSpares_com/departmentsSwiper'
import { Label } from '@/components/ui/label'
import React from 'react'

function Departments() {
  return (
       <div className='my-7'>
    <Label className='flex justify-end text-green-400 text-xl md:text-3xl xl:text-4xl font-bold m-7'>
      الأقسام
    </Label>
      <DepartmentsSwiper></DepartmentsSwiper>
  </div> 
  )
}

export default Departments