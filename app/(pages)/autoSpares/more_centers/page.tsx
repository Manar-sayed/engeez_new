import More_center_card from '@/components/autoSpares_com/more_center_card'
import { Label } from '@/components/ui/label'
import React from 'react'
import more from '@/public/images/autoSpares/more.png'
const AllCenter = [
  {
    image: `${more.src}`,
    title: `الميكانيكي ـ اربد`,
    address: `اربد ـ شارع الجيش`,
    services: `ميكانيكا*كهربا*عفشة*سمكرة*دوكو*`,
  },

];
function More_centers() {
  return (
    <div className='mt-24'>
      <div dir='rtl' className=' px-10'>
        <Label className='text-green-400 text-base md:text-2xl xl:text-2xl font-bold ' >
          افضل مراكز الصيانة في الاردن
        </Label>
      </div>

      <div className='flex flex-col items-center w-full'>
        {AllCenter.map((each) => (
          <More_center_card
            imgSrc={each.image}
            title={each.title}
            address={each.address}
            services={each.services}

          />
        ))}

      </div>
    </div>
  )
}

export default More_centers