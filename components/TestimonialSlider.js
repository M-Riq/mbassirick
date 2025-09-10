
// icons
import {FaQuoteLeft} from 'react-icons/fa';

import {Swiper, SwiperSlide} from 'swiper/react'
// import swiper styles 
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import required module
import {Navigation, Pagination} from 'swiper';
import Image from 'next/image';

// import { Swiper } from "swiper/types";


// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Marielle',
    position: 'Customer',
    message:
      'très agreable de travailler avec ce monsieur il est très collaboratif',
  },
  {
    image: '/t-avt-2.png',
    name: 'Chinatech',
    position: 'Customer',
    message:
      'il ma creer un site internet a moins de 4 jours, il est très interessant!',
  },
  {
    image: '/t-avt-3.png',
    name: 'linguae',
    position: 'Customer',
    message:
      "au depart, je comprenais pas l'utilité d'avoir un site internet pour ma boite mais grace a lui, j'ai eu les idées claire",
  },
];


const TestimonialSlider = () => {
  return (
    <Swiper 
    navigation = {true}
    spaceBetween={10}
    pagination = {{
      clickable : true,
    }}
    modules = {[Navigation, Pagination]}
    className = 'h-[400px] '
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
             {/* avatar, name, position */}
                <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                  <div className='flex flex-col justify-center text-center'> 
                    {/* avatar */}
                    <div> 
                       <Image src={person.image} width={100} height={100} alt = '' />
                    </div>
                    {/* name */}
                    <div className='text-lg'>{person.name}</div>
                    {/* position */}
                    <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                  </div>
                </div>
                {/* quote and messsage */}
                <div className='flex-1 flex flex-col justify-center before:w-[10px] xl:before:bg-white
                 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                   {/* quote icon */}
                   <div className='mb-4'>
                     <FaQuoteLeft className ='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
                   </div>
                   {/* message */}
                   <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                </div>
             </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default TestimonialSlider;
