import { ArrowRight, ArrowLeft, Heart, Search, ShoppingCart } from 'lucide-react'
import { title } from 'process'
import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card'
import { FaVectorSquare, FaVk } from 'react-icons/fa'
import Link from 'next/link'

function BestSellerCard({ imageSrc, description, title, id, showIcons }: any) {
    return (
        <Card className="md:w- xl:w-72 h-  md:h-72 lg:h-80 border-none py-2 mb-10">
            {showIcons && (
                <div className=' hidden md:absolute left-[80%] lg:left-[80%] xl:left-[80%] md:flex flex-col gap-3 top-3'>
                    <Heart className='text-green-400 opacity-40 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 ' />
                    <Search className='text-green-400 opacity-40 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 ' />
                    <ShoppingCart className='text-green-400 opacity-40 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 ' />
                </div>
            )}



            <CardContent className=''>
                <Link href={`/bestSeller/${id}?cardName=${encodeURIComponent(title)}`} className='cursor-pointer '>
                    <div className="w-[100%] md:w-[100%] h-0 sm:h-28 md:h-40 lg:h-52  flex ">
                        <Image
                            src={imageSrc}
                            alt={'image'}
                            width={1000}
                            height={100}
                            className='w-full h-full'
                            quality={100}
                            priority={true} />
                    </div>
                </Link>
            </CardContent>

            <CardHeader className="flex justify-center items-center -mt-8 md:-mt-5 ">
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