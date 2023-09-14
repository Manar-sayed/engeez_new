import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import DaleelInfo from './DaleelInfo'
import React, { useState } from 'react';
import SearchBox from './autoSpares_com/searchBox'
import AutoComplete from './autoComplete';

const GlobalSlider = ({
  title,
  firstDesc,
  seconDesc,
  isDaleel,
  isInfo,
  isWatercom,
  isGascom,
  isAutoSpares,
  isItSolution,
  isSupAtathcom,
  Images,
  isBtn
}:any) => {
  //These are custom properties for zoom effect while slide-show
  const Properties = {
    indicators: true,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div className="w-7 h-7 md:w-8 md:h-8 flex justify-center items-center rounded-sm absolute  md:top-[90%]  translate-y-[-90%]  !left-[calc(100%-93px)]  text-2xl  bg-white text-black/60 hover:text-black duration-200 cursor-pointer">
        <FaChevronLeft  className='w-3 md:w-full h-' />
      </div>
    ),
    nextArrow: (
      <div className="w-7 h-7 md:w-8 md:h-8 flex justify-center items-center rounded-sm absolute  md:top-[90%]  translate-y-[-90%] !right-5 text-2xl bg-white text-black/60 hover:text-black duration-200 cursor-pointer">
        <FaChevronRight className='w-3 md:w-full h-' />
      </div>
    ),
  };






  return (
    <div>
      <Fade {...Properties}>
        {Images.map((each:any, index:any) => (
          <div
            key={index}
            className={`w-full ${isSupAtathcom == true ? 'h-[300px]' : 'h-[320px] md:h-[400px] xl:h-[500px]'
              }   flex justify-center items-center  relative`}
          >
            {isInfo && (
              <DaleelInfo
                title={title}
                firstDesc={firstDesc}
                seconDesc={seconDesc}
                isBtn={isBtn}
                isDaleel={isDaleel}
                isWatercom={isWatercom}
                isGascom={isGascom}
                isItSolution={isItSolution}
                isSupAtathcom={isSupAtathcom}
              />
            )}
           <div className=' w-full'>
             <Image
              className='w-[100%] h-full'
              src={each.url}
              alt={'image'}
              width={1000}
              height={0}
              priority={true}
            >
            </Image>
           </div>
          


          </div>
        ))}
      </Fade>
      {isAutoSpares && (
        <div className='flex justify-center items-center'>
          <div className='absolute top-[30%] md:top-[45%] xl:top-[60%]  z-10 xl:w-[70%]'>
          <SearchBox></SearchBox>
        

          </div>
          
        </div>

      )}
    </div>
  );
};

export default GlobalSlider;
