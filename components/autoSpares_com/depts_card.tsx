import {  ArrowRight, ArrowLeft } from 'lucide-react'
import { title } from 'process'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../ui/card'
import { Label } from '../ui/label'
import Link from 'next/link'

function Depts_card({ imageSrc, title ,id }: any) {
    return (
        <div>
            <Card className="w- md:h-40 p-3 flex items-center md:justify-between rounded-none shadow-none border-none">

                <div className="w-[0%] md:w-[50%] xl:w-[40%]">
                {/* <Image
                         className=" w-20 h-60"
                            src={imageSrc}
                            alt={'image'}
                            width={100}
                            height={100}
                            quality={100}
                            layout='responsive'
                            // priority={true}
                        > */}
                        
                    <Image
                        src={imageSrc}
                        alt={'image'}
                        width={100}
                        height={100}
                          layout='responsive'
                        priority={true}
                    >
                    </Image>
                </div>

                <div className='w-[100%] md:w-[40%] xl:w-[40%] '>

                    <CardHeader className="flex flex-col md:items-end">
                        <CardTitle className=" text-xs font-normal
                                               md:text-lg
                                               lg:text-xl
                                               xl:text-xl">
                            {title}
                        </CardTitle>
                      
                        <Button   className="bg-gray-200 text-black px-3   xl:w-[70%]
                         hover:bg-transparent  hover:border border-green-400">
                              <Link href={`/departments/${id}?deptName=${encodeURIComponent(title)}`} className='cursor-pointer'>
                                <Label className='text-xs xl:text-lg text-gray-700 
                                hover:text-green-400 font-extralight'>المزيد</Label>
                                </Link>
                            </Button>
                    </CardHeader>

                

                        
                        
                        

                </div>

            </Card>
        </div>
    )
}

export default Depts_card