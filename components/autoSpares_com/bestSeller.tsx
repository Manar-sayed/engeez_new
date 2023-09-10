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
import BestSellerCard from './bestSellerCard';
const depts_swiper = [
    {
      image: `${dept1.src}`,
      description:'200 $',
      title: 'الزيوت'
    },
    {
      image: `${dept2.src}`,
       description:'200 $',
      title: 'اطارات'
    },
    {
      image: `${dept3.src}`,
       description:'200 $',
      title: 'استيراد'
    },
    {
      image: `${dept4.src}`,
       description:'200 $',
      title: 'بطاريات'
    },
    {
      image: `${dept5.src}`,
       description:'200 $',
      title: 'اكسسوارات'
    },
    {
      image: `${dept6.src}`,
       description:'200 $',
      title: 'الكل'
    },

  ];
  
function BestSeller() {
  return (
    <>
    <Swiper
      slidesPerView={4.25}
      spaceBetween={5}
  
      modules={[Grid, Pagination, Autoplay]}
      className="flex justify-between"  dir='rtl'
    >
      {depts_swiper.map((card, index) =>
        <SwiperSlide key={index} className='' dir='ltr'>
          <BestSellerCard
            imageSrc={card.image}
            title={card.title} 
            description={card.description}
            />
        </SwiperSlide>
      )}
    </Swiper>
  </>  )
}

export default BestSeller