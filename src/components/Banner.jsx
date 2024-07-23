import React from 'react';

// import data
import { banner } from '../data';

const Banner = () => {
  // destructure banner data
  const { logo, titlePart1, titlePart2,titlePart3, subtitle, textBtn } = banner;
  return (
    <section className='bg-rose-100 h-[790px]'>
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full relative -space-x-48 lg:-space-x-24'>
          <div className='text-white flex-1 z-10 pl-6 lg:pl-0'>
            <h1
              className='h1 text-white mb-8'
              data-aos='fade-down'
              data-aos-delay='500'
            >
            <span className='font-primary'>{titlePart1}</span> <br/>
            <span className='font-primary'>{titlePart2}</span>
            <span className='text-amber-400'>{titlePart3}</span> 
            </h1>
            <p
              className='max-w-[415px] text-body-md lg:text-body-lg mb-8'
              data-aos='fade-down'
              data-aos-delay='600'
            >
              {subtitle}
            </p>
            <button
              className='btn btn-sm lg:btn-lg btn-secondary'
              data-aos='fade-down'
              data-aos-delay='700'
            >
              {textBtn}
            </button>
          </div>
          {/* image */}
          
        </div>
      </div>
    </section>
  );
};

export default Banner;