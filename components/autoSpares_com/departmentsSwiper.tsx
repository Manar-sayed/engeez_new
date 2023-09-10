import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Autoplay } from 'swiper/modules';
import dept1 from '@/public/images/dept1.png'
import dept2 from '@/public/images/dept2.png'
import dept3 from '@/public/images/dept3.png'
import dept4 from '@/public/images/dept4.png'
import dept5 from '@/public/images/dept5.png'
import dept6 from '@/public/images/dept6.png'
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Depts_card from './depts_card';
import Link from 'next/link';

// import './styles.css';
const depts_swiper = [
  {
    image: `${dept1.src}`,
    title: 'الزيوت',
    id:1,
  },
  {
    image: `${dept2.src}`,
    title: 'اطارات',
    id:2,
  },
  {
    image: `${dept3.src}`,
    title: 'استيراد',
    id:3,
  },
  {
    image: `${dept4.src}`,
    title: 'بطاريات',
    id:4,
  },
  {
    image: `${dept5.src}`,
    title: 'اكسسوارات',
    id:5,
  },
  {
    image: `${dept6.src}`,
    title: 'الكل',
    id:6,
  },
  // {
  //     image:`${dept6.src}`,
  //     title:'الكل'
  // },
  // {
  //     image:`${dept6.src}`,
  //     title:'الكل'
  // },
  // {
  //     image:`${dept6.src}`,
  //     title:'الكل'
  // },
];
function DepartmentsSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        modules={[Grid, Pagination, Autoplay]}
        className="flex justify-center w-[95%]"
        grid={{
          rows: 2,    // 2 rows
          fill: 'row', // Fills the rows first before moving to the next column
        }}
      >
        {depts_swiper.map((card, index) =>
          <SwiperSlide key={index} className=''>
            
            <Depts_card
              imageSrc={card.image}
              title={card.title}
              id={card.id} />
        
            
          </SwiperSlide>
        )}
      </Swiper>
    </>
  )
}

export default DepartmentsSwiper