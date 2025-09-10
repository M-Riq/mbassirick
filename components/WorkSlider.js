// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'LRKBDESIGN',
          path: '/image3.jpg',
          link: 'https://www.lrkbdesign.com/'
        },
        {
          title: 'Linguae',
          path: '/img4.jpg',
          link: 'https://linguaecm.com/'
        },
        {
          title: 'chinatech',
          path: '/img.jpg',
          link: 'https://chinatechacademy.org/'
        },
        {
          title: 'itdigitalmind',
          path: '/img2.jpg',
          link: 'https://itdigitalmind.net/'
        },
      ],
    },
    {
      images: [
        {
          title: 'fodecam',
          path: '/image6.jpg',
          link: 'https://fodecam.org/'
        },
        {
          title: 'fedecam',
          path: '/img5.jpg',
          link: 'https://fecadame.com/'
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link: 'https://itdigitalmind.net/'
        },
      ],
    },
  ],
};

// icons
import {BsArrowRight} from 'react-icons/bs';

import {Swiper, SwiperSlide} from 'swiper/react'
// import swiper styles 
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required module
import {FreeMode, Pagination} from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

// import { Swiper } from "swiper/types";




const WorkSlider = () => {
  return (
    <Swiper 
    spaceBetween={10}
    pagination = {{
      clickable : true,
    }}
    modules = {[Pagination]}
    className = 'h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
  <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
    {slide.images.map((image, index) => {
      return (
        <Link href={image.link} key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
          {/* image */}
          <Image src={image.path} width={500} height={300} alt="" />

          {/* overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

          {/* title */}
          <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
            <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
              {/* title 1 */}
              <div className="delay-100">live</div>
              {/* title 2 */}
              <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                project
              </div>
              {/* icon */}
              <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                <BsArrowRight />
              </div>
            </div>
          </div>
        </Link>
      );
    })}
  </div>
</SwiperSlide>
        )
      })}
    </Swiper>
  )
};

export default WorkSlider;

