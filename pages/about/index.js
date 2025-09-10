// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiFacebook,
  SiTiktok,
  SiLinkedin
} from "react-icons/si";

import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles'

import { useState } from "react";

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

//counter
import CountUp from "react-countup"



//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma key="figma1" />,
          <SiAdobexd key="xd1" />,
          <SiAdobephotoshop key="ps1" />,
        ],
      },
      {
        title: 'designer graphique',
        icons: [
          <FaFigma key="figma2" />,
          <SiAdobexd key="xd2" />,
          <SiAdobephotoshop key="ps2" />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - freelance',
        stage: '2023',
      },
      {
        title: 'Web Developer - freelance',
        stage: '2023-2025',
      },
      {
        title: 'Graphic designer  - freelance',
        stage: '2022-2025',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0)

  return (
   <div className="h-full bg-primary/100 py-32 text-center xl:text-left">
    <Circles/>
    {/* avatar img */}
    <motion.div
       variants = {fadeIn('right', 0.2)}
       initial = "hidden"
       animate = 'show'
       exit = 'hidden'
       className = "hidden xl:flex absolute bottom-0 -left-[310px] h-1/2"
    >
     <Avatar/>
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-10">
      {/* text */}
      <div className="flex-1 flex flex-col justify-center mb-11">
       <motion.h2 variants = {fadeIn('right', 0.2)}
       initial = "hidden"
       animate = 'show'
       exit = 'hidden'
       className="h2">
         Polyvalent <span className="text-accent ">Creatif</span>
       </motion.h2>
       <motion.p variants = {fadeIn('right', 0.2)}
       initial = "hidden"
       animate = 'show'
       exit = 'hidden'
       className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
        Je suis Mbassi rick bryan, passionné par le numérique et les outils qui façonnent notre monde.Développeur web et mobile, designer graphique, copywriter, monteur vidéo et gestionnaire de communautés en ligne — je combine ces compétences pour créer des solutions puissantes, sur mesure, et centrées sur l’utilisateur.Mon objectif : faire briller vos projets grâce à une approche humaine, stratégique et résolument créative.</motion.p>
       {/* counters  */}
        <motion.div variants = {fadeIn('right', 0.2)}
           initial = "hidden"
           animate = 'show'
           exit = 'hidden' className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">  
         <div className="flex flex-1 xl:gap-x-6">  
          {/* experience */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"> 
             <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
               <CountUp start={0} end={2} duration={10}/> 
             </div>
             <div className="text-xs uppercase tracking-[1px] leading-[1.4]"> 
               year of experience 
             </div>
          </div>
           {/* clients */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"> 
             <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
               <CountUp start={0} end={10} duration={10}/> 
             </div>
             <div className="text-xs uppercase tracking-[1px] leading-[1.4]"> 
               client satisfait  
             </div>
          </div>
           {/* Projects */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"> 
             <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
               <CountUp start={0} end={15} duration={10}/> 
             </div>
             <div className="text-xs uppercase tracking-[1px] leading-[1.4]"> 
              projetct terminé
             </div>
          </div>
           {/* Winning awards */}
         
         </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div variants = {fadeIn('left', 0.7)}
       initial = "hidden"
       animate = 'show'
       exit = 'hidden' className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
         <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) => {
            return(
              <div key={itemIndex} className={`${index == itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
               cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
               onClick={() => setIndex(itemIndex)}>
                 {item.title}
              </div>
            )
          })}
         </div>
         <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
           {aboutData[index].info.map((item, itemIndex) => {
            return(
              <div key={itemIndex} className="flex-1 flex  flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"> 
                {/* title */}
                 <div>{item.title}</div>
                 <div className="hidden md:flex">-</div>
                 <div>{item.stage}</div>
                 <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((icon, itemIndex) => {
                    return <div key={itemIndex} className="text-2xl">{icon}</div>
                  })}
                </div>
              </div>

            )
           })}
         </div>
      </motion.div>
    </div>
   </div>
  );
};

export default About;
