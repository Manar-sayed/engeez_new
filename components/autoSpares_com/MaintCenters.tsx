import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Autoplay } from 'swiper/modules';
import center1 from '@/public/images/autoSpares/center1.png'
import center2 from '@/public/images/autoSpares/center2.png'
import center3 from '@/public/images/autoSpares/center3.png'

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import Depts_card from './depts_card';
import BestSellerCard from './bestSellerCard';
import MaintCentersCard from './MaintCentersCard';
const depts_swiper = [
  {
    image: `${center1.src}`,
    title: 'اكبر واهم مركز صيانه في الاردن في اربيد لصيانة سيارتك باقل الاسعار واكثر الطرق ضمانا للحفاظ علي سيارتك.اكبر واهم مركز صيانه في الاردن في اربيد لصيانة سيارتك باقل الاسعار .'
  },
  {
    image: `${center2.src}`,
    title: 'اكبر واهم مركز صيانه في الاردن في اربيد لصيانة سيارتك باقل الاسعار واكثر الطرق ضمانا للحفاظ علي سيارتك.اكبر واهم مركز صيانه في الاردن في اربيد لصيانة سيارتك باقل الاسعار .'
  },
  {
    image: `${center3.src}`,
    title: 'اكبر واهم مركز صيانه في الاردن في اربيد لصيانة سيارتك باقل الاسعار واكثر الطرق ضمانا للحفاظ علي سيارتك.اكبر واهم مركز صيانه في الاردن في اربيد لصيانة سيارتك باقل الاسعار .'
  },
];

function MaintCenters() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={45}
      modules={[Grid, Pagination, Autoplay]}
      className="flex justify-between w-[95%]" dir='rtl'
    >
      {depts_swiper.map((card, index) =>
        <SwiperSlide key={index} className='' dir='ltr'>
          <MaintCentersCard
            imageSrc={card.image}
            description={card.title}
          />
        </SwiperSlide>
      )}
    </Swiper>
  );
}

export default MaintCenters