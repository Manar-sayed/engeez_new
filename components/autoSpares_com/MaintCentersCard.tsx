import React from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import { Separator } from '../ui/separator'

function MaintCentersCard({ imageSrc, description }: any) {
  return (
    <Card className="md:h- border-none  mb-10 rounded-none">

      <CardContent className=' w-full mx-0 px-0'>
        <div className="w-full h-16  sm:h-20 md:h-60  flex ">
          <Image
            src={imageSrc}
            alt={'image'}
            width={1000}
            height={1000}
            className='w-full h-full'
            priority={true}
          >
          </Image>
        </div>
      </CardContent>

      <CardHeader className="flex justify-center items-center -mt-8 mb-3 lg:px-3">
        <CardDescription className="text-[8px] font-extralight md:text-sm lg:text-base  lg:text-justify  text-black " dir='rtl'>
          {description}
        </CardDescription>
      </CardHeader>
      <Separator className='bg-gray-200 w-[100%]' />
      <CardFooter className=' flex justify-center items-end  pt-2 -mb-5 hover:text-green-400'>
        <Link href='/'>
          المزيد
        </Link>
      </CardFooter>


    </Card>
  )
}

export default MaintCentersCard