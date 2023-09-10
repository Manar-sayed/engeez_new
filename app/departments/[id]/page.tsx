'use client'

import DynamicDept from '@/components/autoSpares_com/dynamicDept';
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

export default function Page() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const deptname = searchParams.get('deptName')

  // console.log("deptname------>",deptname)
  const idArray = pathname.split('/');
  const id = idArray[idArray.length - 1];
  console.log("id->", id)

  return (
    <div className='mt-36 text-4xl  mx-10'>
      <div className="text-green-400  text-[32px] my-7  font-bold flex justify-end">{deptname}</div>
      <DynamicDept></DynamicDept>


    </div>
    );
}