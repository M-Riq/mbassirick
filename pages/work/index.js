// icons

// service data

//components 
import WorkSlider from '../../components/WorkSlider'
import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles';

//framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'




const Work = () => {
  return (
    <div className='h-full bg-primary/100 py-36 flex items-center'>
      {/* <Circles/> */}
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-28'>
          {/* text */}
          <div className='text-center flex  xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'> 
            < motion.h2 variants={fadeIn('up', 0.2)} initial = 'hidden' animate="show" exit= 'hidden'
             className='h2 xl:mt-12'> Mes Réalisations <span className='text-accent'>.</span></motion.h2>
            <motion.p variants={fadeIn('down', 0.2)} initial = 'hidden' animate="show" exit= 'hidden'
             className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              Voici quelques-unes de mes créations en développement, design, montage video.
              Chaque réalisation est le fruit d’une collaboration, d’une vision partagée, et d’un objectif atteint.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div variants={fadeIn('up', 0.2)} initial = 'hidden' animate="show" exit= 'hidden'
           className='w-full xl:max-w-[65%]'>
             <WorkSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  )
};

export default Work;
