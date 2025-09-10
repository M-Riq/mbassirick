// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
  RxCaretLeft,
  RxCaretRight,
  RxBox
} from "react-icons/rx";
// import { RxArrowTopRight, RxCaretLeft, RxCaretRight } from 'react-icons/rx';

import {Swiper, SwiperSlide} from 'swiper/react'
// import swiper styles 
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required module
import {FreeMode, Pagination, Navigation} from 'swiper';

// import { Swiper } from "swiper/types";


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Développement Web & Mobile',
    description: 'Sites vitrines, applis performantes, interfaces modernes et responsive.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Logos, affiches, branding visuel : marquez les esprits avec style.',
  },
  {
    icon: <RxDesktop />,
    title: 'Montage Vidéo',
    description: 'Du contenu dynamique et professionnel qui capte l’attention.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxBox />,
    title: 'Gestion de Réseaux Sociaux',
    description: 'Stratégie, contenu, animation — développez votre communauté et votre impact.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper breakpoints = {{
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 15
      }, 
    }}
    
    freeMode = {true}
    pagination = {{
      clickable : true,
    }}
    navigation={{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hideOnClick: true
    }}
    modules = {[FreeMode, Pagination, Navigation]}
    className = 'h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
             <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg md:px-2 md:py-8 py-4 flex sm:flex-col md:gap-x-6 sm:gap-x-0 
             group cursor-pointer hover:bg-[rgba(89,65, 169, 0.15)] transition-all duration-300">
                {/* icon */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                {/* title  & descript */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] leading-normal">{item.description}</p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                   <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                </div>
             </div>
          </SwiperSlide>
        )
      })}

      {/* Navigation Buttons */}
      <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2">
          <RxCaretLeft className="text-xl text-accent" />
        </div>
        <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2">
          <RxCaretRight className="text-xl text-accent" />
        </div>

    </Swiper>
  )
};

export default ServiceSlider;
