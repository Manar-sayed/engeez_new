'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import ford from '@/public/images/autoSpares/ford.png'
import toyota from '@/public/images/autoSpares/toyota.png'
import { Label } from '../ui/label'
import { Star, StarsIcon } from 'lucide-react'
import Link from 'next/link'


import Test from './Test'
import Calender_center from './Calender_center'


function More_center_card({ imgSrc, title, address, services }: any) {

    return (

        <div className=' rounded-md shadow-md my-7 
                         flex justify-around gap-3 p-3  
                         md:justify-center md:gap-7 
                          hover:shadow-green-200 w-[85%]'
            dir='rtl'>
            <div className='w-[100%]'>
                <Image
                    className="w-[100%] h-[100%] rounded-md"
                    src={imgSrc}
                    alt={'image'}
                    width={1000}
                    height={1000}
                    quality={100}
                    priority={true}
                />
            </div>
            {/* details div col-2 */}

            <div className=' w-full space-y-3' dir='rtl'>
                {/* main title */}
                <Label className='text-xs md:text-lg xl:text-3xl  flex my-3 '>
                    {title}
                </Label>

                {/*  address  */}
                <div className='text-xs md:text-sm xl:text-lg flex gap-3 items-center'>
                    <span className='bg-slate-100 rounded-md p-3'>
                        مركز الصيانة
                    </span>
                    <span>
                        {address}
                    </span>
                </div>

                {/* rate*/}
                <div className='flex gap-2 mb-3 items-center'>

                    <div className='flex'>
                        <Star className='text-amber-500 w-3  md:w-5 md:h-5' />
                        <Star className='text-amber-500 w-3  md:w-5 md:h-5' />
                        <Star className='text-amber-500 w-3  md:w-5 md:h-5' />
                        <Star className='text-amber-500 w-3  md:w-5 md:h-5' />
                        <Star className='text-amber-500 w-3  md:w-5 md:h-5' />
                    </div>
                    <Label className='text-[10px] md:text-xl xl:text-2xl'>
                        4.9
                    </Label>
                    <Label className='text-[10px] md:text-xs xl:text-base'>
                        التقيم العام من زوار المركز
                    </Label>
                </div>

                <div className=' md:h-20 flex gap-3 mb-3 items-center'>
                    <Image src={ford} alt='ford' className='w-[20%] md:w- h-[100%]' />
                    <Image src={toyota} alt='toyota' className='w-[20%] md:w- h-[100%]' />
                    <div className=' text-sm md:text-xl'>
                        +٢٥ ماركة
                    </div>

                </div>

                {/* sub title */}
                <Label className='text-[12px] md:text-lg xl:text-2xl flex mb-3  '>

                    الخدمات المقدمة
                </Label>
                <Label className='text-[px] md:text-xs xl:text-base flex'>
                    {services}
                </Label>
                {/* read more */}
                <Label className='flex text-xs xl:text-base pt-5 hover:opacity-40'>
                    <Link href={'/'} className=' text-green-500 no-underline' >
                        عرض الكل
                    </Link>
                </Label>
            </div>

            {/* calender col-3 */}
            <div className=' hidden md:grid  gap-3 '>
                <Calender_center />
                {/* <Test/> */}
            </div>

        </div>
    )
}

export default More_center_card