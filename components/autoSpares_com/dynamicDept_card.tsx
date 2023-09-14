import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Heart, Search, ShoppingCart, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
function DynamicDept_card({ imageSrc, title, description, id }: any) {
    return (


        <center className=''>
        <Card className="w-auto   border border-green-200  py-3 ">

            <CardContent className='flex'>
                <div className=' hidden md:relative left-[95%]  md:flex flex-col gap-3 top-3'>
                    <Heart className='text-green-400 opacity-40 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 cursor-pointer ' />
                    <Search className='text-green-400 opacity-40 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 cursor-pointer' />
                    <ShoppingCart className='text-green-400 opacity-40 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 cursor-pointer' />
                </div>

                <div className="w-[100%] md:w-[100%] h-0 sm:h-28 md:h-40 lg:h-64 flex ">
                    <Image
                        src={imageSrc}
                        alt={'image'}
                        width={1000}
                        height={100}
                         className='w-full h-full'
                         quality={100}
                        priority={true}
                    >
                    </Image>
                </div>
            </CardContent>

            <CardHeader className="flex justify-center items-center -mt-8 md:-mt-3 ">

                <CardTitle className=" text-xs
                             md:text-lg
                             lg:text-xl
                             xl:text-2xl">
                    {title}</CardTitle>
                <div className='my-3 flex justify-around gap-1'>
                    <Star className='w-3 h-3 md:w-5 md:h-5 text-yellow-400' />
                    <Star className='w-3 h-3 md:w-5 md:h-5 text-yellow-400' />
                    <Star className='w-3 h-3 md:w-5 md:h-5 text-yellow-400' />
                    <Star className='w-3 h-3 md:w-5 md:h-5 text-yellow-400' />
                    <Star className='w-3 h-3 md:w-5 md:h-5 text-yellow-400' />
                </div>

                <CardDescription className="text-center md:text-start text-xs md:text-lg font-normal text-green-400 pt-5">{description}</CardDescription>
            </CardHeader>

        </Card>
        </center>

    )
}

export default DynamicDept_card