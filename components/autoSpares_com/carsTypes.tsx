import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Autoplay } from 'swiper/modules';
import carType1 from '@/public/images/autoSpares/toyota.png';
import carType2 from '@/public/images/autoSpares/honda.png';
import carType3 from '@/public/images/autoSpares/nissan.png';
import carType4 from '@/public/images/autoSpares/ford.png';
import carType5 from '@/public/images/autoSpares/hun.png';
import carType6 from '@/public/images/autoSpares/suzuki.png';
import carType7 from '@/public/images/autoSpares/mercedes.png';
import carType8 from '@/public/images/autoSpares/chevrolet.png';
import carType9 from '@/public/images/autoSpares/ladi.png';
import carType10 from '@/public/images/autoSpares/bmw.png';
import carType11 from '@/public/images/autoSpares/mazoa.png';
import carType12 from '@/public/images/autoSpares/lexus.png';
import carType13 from '@/public/images/autoSpares/dodg.png';
import carType14 from '@/public/images/autoSpares/audi.png';
import carType15 from '@/public/images/autoSpares/jeep.png';
import carType16 from '@/public/images/autoSpares/acura.png';
import carType17 from '@/public/images/autoSpares/mitsubishi.png';
import carType18 from '@/public/images/autoSpares/ww.png';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const depts_swiper = [
    {
        image: `${carType1.src}`,
    },
    {
        image: `${carType2.src}`,
    },
    {
        image: `${carType3.src}`,
    },
    {
        image: `${carType4.src}`,
    },
    {
        image: `${carType5.src}`,
    },
    {
        image: `${carType6.src}`,
    },
    {
        image: `${carType7.src}`,
    },
    {
        image: `${carType8.src}`,
    },
    {
        image: `${carType9.src}`,
    },
    {
        image: `${carType10.src}`,
    },
    {
        image: `${carType11.src}`,
    },
    {
        image: `${carType12.src}`,
    },
    {
        image: `${carType13.src}`,
    },
    {
        image: `${carType14.src}`,
    },
    {
        image: `${carType15.src}`,
    },
    {
        image: `${carType16.src}`,
    },
    {
        image: `${carType17.src}`,
    },
    {
        image: `${carType18.src}`,
    },

];

function CarsTypes() {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                modules={[Grid, Pagination, Autoplay]}
                className="flex justify-center w-[95%] bg-white"
                grid={{
                    rows: 5,
                    fill: 'row',
                }}
            >
                {depts_swiper.map((type, index) =>
                    <SwiperSlide key={index} className=''>
                        <div className="md:w-60 md:h-60">
                            <Image
                                className="w-[100%] h-"
                                src={type.image}
                                alt={'image'}
                                width={100}
                                height={100}
                                quality={100}
                                priority={true}
                            >
                            </Image>

                        </div>
                    </SwiperSlide>
                )}
            </Swiper>


        </div>
    )
}

export default CarsTypes