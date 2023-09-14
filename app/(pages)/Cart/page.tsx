'use client'
import React, { useState } from 'react'
import { Alert, UncontrolledAlert } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import details from '@/public/images/autoSpares/details3.png'
import { Delete, Heart, Trash2 } from 'lucide-react'
import details1 from '@/public/images/autoSpares/details.png';
import details2 from '@/public/images/autoSpares/details2.png';
import details3 from '@/public/images/autoSpares/details3.png';
import details4 from '@/public/images/autoSpares/details4.png';
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
import BestSellerCard from '@/components/autoSpares_com/bestSellerCard';
import Cart_Item from '@/components/autoSpares_com/cartItem'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import AutoComplete from '@/components/autoComplete'
const depts_swiper = [
    {
        image: `${dept1.src}`,
        description: '200 $',
        title: 'الزيوت'
    },
    {
        image: `${dept2.src}`,
        description: '200 $',
        title: 'اطارات'
    },
    {
        image: `${dept3.src}`,
        description: '200 $',
        title: 'استيراد'
    },
    {
        image: `${dept4.src}`,
        description: '200 $',
        title: 'بطاريات'
    },
    {
        image: `${dept5.src}`,
        description: '200 $',
        title: 'اكسسوارات'
    },
    {
        image: `${dept6.src}`,
        description: '200 $',
        title: 'الكل'
    },

];
function Cart() {
    const [successAlert, setSuccessAlert] = useState(true);

    return (
        <div className='mt-28 bg-slate-100 '>
            <Label className='flex justify-end text-green-400 text-base md:text-3xl xl:text-4xl font-bold m-7'>
                عربة التسوق
            </Label>


            <Alert color="success" isOpen={ successAlert }>
          <span className="alert-icon">
            <i className="ni ni-like-2"></i>
          </span>
          <span className="alert-text">
            <strong>Success!</strong>{" "}
            This is a success alert—check it out!
          </span>
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => {setSuccessAlert(false)}}
          >
              <span aria-hidden="true">&times;</span>
          </button>
      </Alert>
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>

      <UncontrolledAlert color="primary">
        <span className="alert-icon">
          <i className="ni ni-like-2"></i>
        </span>
        <span className="alert-text">
          <strong>Primary!</strong>{" "}
          This is a primary alert—check it out!
        </span>
      </UncontrolledAlert>

            <div className='flex gap-7 md:mx-10'>
                <div className='bg-white w-[50%] sm:w-[25%] h-[50%] rounded-xl p-3 space-y-7' dir='rtl'>
                   <dl>
                    <dt className='text-lg'>
                        السعر:
                    </dt>
                    <dd className='text-cyan-400 text-base'>
                        100.0$
                    </dd>
                    <dt className='text-lg'>
                        كود الخصم:
                    </dt>
                    <dd className='text-cyan-400 text-base'>
                        00.0$
                    </dd>
                    <dt className='text-lg'>
                        السعر بعد الخصم:
                    </dt>
                    <dd className='text-cyan-400 text-base'>
                        100.0$
                    </dd>
                    <dt className='text-lg'>
                        الكود:
                    </dt>
                    <dd className='text-cyan-400 text-base'>
                     
                    </dd>
                   </dl>
                   <div className='flex justify-end'>
                   <Button className='bg-gray-400' >  اضف </Button>
                   </div>
                   <Separator className='shadow-xl  h-[2px] '/>
                   <div className='flex justify-center'>
                   <Button className='bg-cyan-600 w-[70%]' >تكمله الدفع</Button>
                   </div>
                </div>

                <div className='w-[50%] sm:w-[70%] bg-white rounded-xl p-6 space-y-3'>
                    {/* each card */}
                    <Cart_Item
                    title={'توتال كوريك تمساح 3 طن رفع سريع THT10833 '}
                    oldPrice={'115.3$'}
                    discount={'وفر 70$ (17%)'}
                    image={details}
                    price={' 100.0$'}/>
                    <Cart_Item
                    title={'توتال كوريك تمساح 3 طن رفع سريع THT10833 '}
                    oldPrice={'115.3$'}
                    discount={'وفر 70$ (17%)'}
                    image={details2}
                    price={' 100.0$'}/>
                </div>

            </div>




            <div className='mt-16'>


                <Label className='flex justify-end text-green-400 text-base md:text-3xl xl:text-4xl font-bold m-7'>
                    منتجات مشابهة
                </Label>


                <Swiper
                    slidesPerView={4.25}
                    spaceBetween={5}
                    modules={[Grid, Pagination, Autoplay]}
                    className="flex justify-between" dir='rtl'
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



              <AutoComplete></AutoComplete>
        </div>
    )
}

export default Cart