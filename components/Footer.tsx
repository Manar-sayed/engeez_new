'use client'
import React from 'react'
import map from '@/public/map.png'
import logo from '@/public/images/logo-x.png'
import logo1 from '@/public/images/logo-y.png'
import logo2 from '@/public/images/neuss_logo.png'

import facebook from '@/public/facebook.png'
import twitter from '@/public/twitter.png'
import linkedIn from '@/public/linkedIn.png'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const pVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: .03, //to make delay betwean each span by 1 sec
        }
    }
};
const spanVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,

    }
};

function Footer() {

    return (
        <div id='footer' dir='rtl'
            className="w-[100%] h-auto grid grid-cols-3 gap-7 py-7  md:gap-0 p-5 md:px-[5%] bg-blue-950">

            {/* 1col */}
            <div className='flex flex-col justify-center '>
                <Image className="w-10 md:w-16 xl:w-20 " 
                src={logo} alt='' />
                <div className='text-white text-xs   
                              lg:text-lg  capitalize py-1 pt-3 w-[100%]'>
                    <p>
                        مرحبًا بك في تطبيقنا! في انجز، نسعى جاهدين لتحويل طريقة نقل البضائع والأشخاص. يهدف تطبيقنا إلى تبسيط الخدمات اللوجستية وتعزيز كفاءة نقل البضائع والأفراد.
                    </p>
                </div>
                <div className="gap-5 inline-flex py-5">
                    <div className="w-[40.82px] h-[40.82px] flex justify-center items-center bg-black bg-opacity-20 rounded-full">
                        <Link href={'https://www.facebook.com/neusssoftware/'} as={'https://www.facebook.com/neusssoftware/'}
                            aria-label='Go to facebook page'>
                            <Facebook className='w-4 md:w-5 text-white' />
                        </Link>
                    </div>
                    <div className="w-[40.82px] h-[40.82px] flex justify-center items-center bg-black bg-opacity-20 rounded-full">
                        <Link href={'https://instagram.com/neuss_software'} as={'https://instagram.com/neuss_software'}
                            aria-label='Go to instagram page'>
                            <Instagram className='w-4 md:w-5 text-white' />
                        </Link>
                    </div>
                    <div className="w-[40.82px] h-[40.82px] flex justify-center items-center bg-black bg-opacity-20 rounded-full">
                        <Link href={'https://www.linkedin.com/company/neuss-software/'} as={'https://www.linkedin.com/company/neuss-software/'}
                            aria-label='Go to linkedin page'>
                            <Linkedin className='w-4 md:w-5 text-white' />
                        </Link>
                    </div>

                </div>
                <div className=" text-white 
                text-sm ">
                    جميع الحقوق محفوظة © 2023 لشركة نويس لتطوير البرامج.
                </div>

            </div>

            {/* 2col */}
            <div className='grid justify-center  pt-14 md:pt-5 '>
                <div className=" text-green-400
                     text-sm 
                     font-semibold 
                     md:text-lg lg:text-xl
                     xl:text-2xl">
                    الاقسام
                </div>
                <div className="flex-col justify-start items-start gap-[25px] inline-flex">
                    <div className="text-white 
                          text-sm 
                      md:text-lg lg:text-lg
                      xl:text-xl">
                        مياهكم
                    </div>
                    <div className="text-white 
                          text-sm 
                      md:text-lg lg:text-lg
                      xl:text-xl">
                        غازكم
                    </div>
                    <div className="text-white 
                          text-sm 
                      md:text-lg lg:text-lg
                      xl:text-xl">
                        دليلكم
                    </div>
                    <div className="text-white 
                          text-sm 
                      md:text-lg lg:text-lg
                      xl:text-xl">
                        حلولكم البرمجيه
                    </div>
                    <div className="text-white 
                          text-sm 
                      md:text-lg lg:text-lg
                      xl:text-xl">
                        قطع غيار سيارات
                    </div>
                </div>
            </div>

            {/* 3col */}
            <div className='flex flex-col justify-start'>
                <div
                    className="flex flex-col justify-start pt-14 md:pt-5 md:justify-center">
                    <div className=" text-green-400 text-sm 
                                               md:text-lg lg:text-xl
                                               xl:text-2xl
                                               font-semibold  pb-5">
                        العنوان</div>
                    <div className=' text-white text-sm 
                                               md:text-lg
                                               xl:text-xl
                                                 pb-5'>
                      <p>
                      مرحبًا بك في تطبيقنا! في انجز، نسعى جاهدين لتحويل طريقة نقل البضائع والأشخاص. يهدف تطبيقنا إلى تبسيط الخدمات اللوجستية وتعزيز كفاءة نقل البضائع والأفراد.
                      </p>

                    </div>
                    <div className='flex justify-center gap-7 '>
                        <Image 
                        className="w-16 md:w-20 xl:w-24 " 
                        src={logo1}
                        width={1000}
                        alt=''
                        />
                        <Image
                         className="w-16 md:w-20 xl:w-24 "
                         width={1000}
                        src={logo2}
                        alt=''
                        />
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Footer