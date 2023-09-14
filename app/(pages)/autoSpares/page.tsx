'use client'
import GlobalSlider from '@/components/GlobalSlider'
import React from 'react'
import autoImg1 from '@/public/autoImg1.png'
import autoImg2 from '@/public/autoImg2.png'
import autoImg3 from '@/public/autoImg3.png'
import DepartmentsSwiper from '@/components/autoSpares_com/departmentsSwiper'
import { Label } from '@/components/ui/label'
import CarsTypes from '@/components/autoSpares_com/carsTypes'
import BestSeller from '@/components/autoSpares_com/bestSeller'
import MaintCenters from '@/components/autoSpares_com/MaintCenters'
import Departments from '@/app/departments/page'
import Best_Seller from '@/app/bestSeller/page'
const Images = [
  {
    url: `${autoImg1.src}`,
    caption: 'First Slide',
  },
  {
    url: `${autoImg2.src}`,
    caption: 'Second Slide',
  },
  {
    url: `${autoImg3.src}`,
    caption: 'Third Slide',
  },
];
function AutoSpares() {
  return (
    <div className='bg-slate-100'>
      <div className='mb-28'>
        <GlobalSlider
          title={''}
          firstDesc={''}
          seconDesc={''}
          isBtn={false}
          isDaleel={false}
          isInfo={false} isWatercom={undefined}
          isGascom={undefined} isItSolution={undefined}
          isSupAtathcom={undefined}
          Images={Images} isAutoSpares={true} />
      </div>

      {/* الأقسام */}
      <center>
        <Departments />
      </center>

      {/*انواع السيارات */}
      <div className='my-7'>
        <Label className='flex justify-end text-green-400 text-xl md:text-3xl xl:text-4xl font-bold m-7'>
          انواع السيارات
        </Label>
        <center>
          <CarsTypes />
        </center>
      </div>

      {/* الاكثر مبيعا*/}
      <center>
        <Best_Seller />
      </center>

      {/* مراكز الصيانة */}
      <div className='my-7'>
        <div className='flex justify-between'>
          <Label className='flex justify-end ps-3 text-green-400 text-xs font-light md:text-lg xl:text-xl  m-7'>
            المزيد
          </Label>
          <Label className='flex justify-end text-green-400 text-base md:text-3xl xl:text-4xl font-bold m-7'>
            مراكز الصيانة
          </Label>
        </div>
        <center className='mx-5 xl:mx-0'>
          <MaintCenters />
        </center>
      </div>


    </div>
  )
}

export default AutoSpares