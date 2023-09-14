import { Label } from '@/components/ui/label'
import { Heart, Trash2 } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import details from '@/public/images/autoSpares/details.png';
import { Separator } from '../ui/separator';

function Cart_Item({ title, oldPrice, discount, price,image }: any) {
    return (
        <>
        
        <div className='flex gap-7'>
            <div className='hidden sm:grid md:w-[70%] ' dir='rtl'>
                <Label className='text-xs md:text-base xl:text-xl'>
                    {title}
                </Label>
                <div className='flex gap-3'>
                    <del className='text-gray-300 text-xs md:text-base xl:text-xl'> {oldPrice}</del>
                    <div className='text-cyan-400 text-xs md:text-base xl:text-xl'>
                        {discount}
                    </div>
                </div>
                <p className='text-xs md:text-base xl:text-xl'>
                    {price}
                </p>
            </div>

            <div className='sm:w-[30%] border border-gray-600 rounded-xl '>
                {/* <div className='hidden md:grid absolute left-[85%] sm:left-[90%] md:left-[90%] lg:left-[92%] mt-2  space-y-3'>
                    <Heart className='text-green-400 
                               w-3 h-3 md:w-6 md:h-6 xl:w-7 xl:h-7
                               hover:text-green-200'
                        strokeWidth={1} />
                    <Trash2 className='text-green-400 
                                w-3 h-3 md:w-6 md:h-6 xl:w-7 xl:h-7
                                hover:text-green-200'
                        strokeWidth={1} />
                </div> */}
                <Image
                    className='w-[100%] h-full p-3'
                    src={image}
                    alt=''
                    width={1000}
                    height={100}
                    priority={true}
                />
            </div>
            

        </div>
        <center>
        <Separator className='shadow-xl  w-[80%]'/>
        </center>
        </>
    )
}

export default Cart_Item