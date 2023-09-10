import { Link, ArrowRight, ArrowLeft, Heart, Search, ShoppingCart } from 'lucide-react'
import { title } from 'process'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card'
import { FaVectorSquare, FaVk } from 'react-icons/fa'

function BestSellerCard({ imageSrc, description, title }: any) {
    return (
        <Card className="md:w- xl:w-72 h- sm:h-40 md:h-52 lg:h-64 border-none py-2 mb-10">
              <div className=' hidden md:absolute left-[80%] lg:left-[80%] xl:left-[80%] md:flex flex-col gap-3 top-3'>
                   <Heart className='text-green-400 opacity-40 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 '/>
                   <Search  className='text-green-400 opacity-40 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 '/>
                   <ShoppingCart  className='text-green-400 opacity-40 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 '/>
                </div>
            <CardContent className=''>
                <div className="w-[100%] md:w-[80%] h-0 sm:h-20 md:h-24 lg:h-36  flex ">

                    <Image
                        src={imageSrc}
                        alt={'image'}
                        width={100}
                        height={100}
                        // className='w-full h-full'
                        quality={100}
                        layout='responsive'
                    
                        priority={true}
                    >
                    </Image>
                </div>
              
                {/* <div className="p-5 bg-cardBg flex bg-opacity-20 rounded-lg">
                    <Image
                        src={imageSrc}
                        alt=''
                        width={100}
                        height={100}
                        className="w-6 
                                   md:w-8
                                   xl:w-10"
                    />
                </div> */}


            </CardContent>

            <CardHeader className="flex justify-center items-center -mt-8 md:-mt-3 ">

                <CardTitle className=" text-xs
                                       md:text-lg
                                       lg:text-xl
                                       xl:text-2xl">
                    {title}</CardTitle>

                <CardDescription className="text-center md:text-start text-xs md:text-lg font-normal text-green-400">{description}</CardDescription>
            </CardHeader>

        </Card>
    )
}

export default BestSellerCard