'use client';
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import details1 from '@/public/images/autoSpares/details.png';
import details2 from '@/public/images/autoSpares/details2.png';
import details3 from '@/public/images/autoSpares/details3.png';
import details4 from '@/public/images/autoSpares/details4.png';
import { Heart, ListStart, Star, StarsIcon } from 'lucide-react';
import { Label } from '@/components/ui/label';
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

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import BestSellerCard from '@/components/autoSpares_com/bestSellerCard';
function DetailsId() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const deptname = searchParams.get('cardName');
  const moreImages =[
    {
      image:`${details1.src}`
    },
    {
      image:`${details2.src}`
    },
    {
      image:`${details3.src}`
    },
    {
      image:`${details4.src}`
    },
  ];
  return (
    <div className='bg-slate-50'>
      <div className='flex mt-24 gap-3 mx-8 xl:mx-16'>
        <div className=' hidden md:grid w-[50%] md:w-[70%] px-3 space-y-5' dir='rtl'>
          {/* main title */}
          <Label className=' md:text-lg xl:text-3xl  flex mb-3 '>
            توتال كوريك تمساح 3 طن رفع سريع THT10833
          </Label>

          {/* sub title */}
          <Label className=' md:text-lg xl:text-2xl flex mb-3  '>
            <Link href={'/'} className='underline'>
              العلامة التجارية: توتال تولز
            </Link>
          </Label>



          {/* rate*/}
          <div className='flex gap-3 mb-3'>
            <Label className='md:text-xl xl:text-3xl'>
              5.0
            </Label>
            <StarsIcon className='text-yellow-500' />
            <StarsIcon className='text-yellow-500' />
            <StarsIcon className='text-yellow-500' />
            <StarsIcon className='text-yellow-500' />
            <StarsIcon className='text-yellow-500' />
          </div>

          {/* price */}
          <div className='flex gap-3 items-center mb-3'>
            <Label className='md:text-xl xl:text-3xl'>
              السعر:
            </Label>
            <Label className='md:text-xl xl:text-2xl'>100$</Label>
          </div>

          {/* الوصف */}
          <Label className='md:text-xl xl:text-3xl'>
            الوصف:
          </Label>
          <div className='space-y-2'>
            <p>.الرقم المصنعي : THT10833 </p>
            <p>.العلامة التجارية : توتال تولز </p>
            <p>.نوع : رافعات</p>
            <p>.هل يتطلب هذا المنتج بطارية او يحتوي بطارية : لا </p>
            <p>Min height :145mm.</p>
            <p>Max height : 500mm.</p>
            <p>Travel: 355mm.</p>
            <p>Net weight : 37 kg.</p>
          </div>
           <Button className='bg-green-400 p-5 rounded-md md:w-[50%] xl:w-[30%]'>
            <p>اضف الي العربة</p>
           </Button>
        </div>
        <div className=' md:w-[80%] xl:w-[50%] '>

          <div className=' w-full h-[50%] xl:h-[75%] mb-5 border border-green-400'>
            <Heart className='text-green-400 absolute
             left-[77%] md:left-[85%] lg:left-[90%] mt-6 
             w-5 h-5 md:w-7 md:h-7 xl:w-10 xl:h-10
             hover:text-green-200' 
             strokeWidth={1.5} />

            <Image
              className='w-[100%] h-full'
              src={details1}
              alt=''
              width={1000}
              height={100}
              priority={true}
            >
            </Image>
          </div>
          <div className='grid grid-cols-4 gap-3 h-'>
            {moreImages.map((item,index)=>(
            <Image src={item.image} alt={''} 
            priority={true}
            width={1000} height={100} 
            key={index}
            className='w-full h-full'/>

            ))}
             </div>
        </div>
      </div>
      <Label className='flex justify-end text-green-400 text-base md:text-3xl xl:text-4xl font-bold m-7'>
        منتجات مشابهة  
      </Label>


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
            id={index}
            showIcons={false}
            />
        </SwiperSlide>
      )}
    </Swiper>

    </div>
  );

}
export default DetailsId
