import Image from "next/image";

//components 
import ParticlesContainer from "../components/ParticlesContainer"
import ProjectsBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar" 

//framer motion
import {motion} from "framer-motion"

//variant 
import {fadeIn} from "../variants";


const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
    {/* text */}
     <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
       <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
         {/* title */}
         <motion.h1 variants={fadeIn('right', 0.5)} initial="hidden" animate="show" exit="hidden" className="h1"> Transformez les idée <br/> en {''} <span className="text-accent">Realité digital</span></motion.h1>
         {/* subtitle */}
         <motion.p variants={fadeIn('left', 0.5)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">Je transforme vos idée en solution réel, vous avez un problèm, je suis la solution numerique qu&apos;il vous faut</motion.p>
         <div className="flex justify-center xl:hidden">
             <ProjectsBtn/>
         </div>
         <motion.div variants={fadeIn('down', 0.7)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
             <ProjectsBtn/>
         </motion.div>
       </div>
     </div>
     
     {/* image */}
     <div className="w-[1200px] h-full ">
        <div className=""></div>
        {/* particles */}
        <ParticlesContainer/>
        <motion.div variants={fadeIn('up', 0.7)} initial="hidden" animate="show" exit="hidden" transition={{duration: 3, ease: 'easeInOut'}} className="w-full h-full max-w-[737px] max-h-[620px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
          <Avatar/>
        </motion.div>
        <ParticlesContainer/>
     </div>
    </div>
  )
};

export default Home;
