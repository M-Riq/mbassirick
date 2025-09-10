import {animate, motion} from "framer-motion"

const transitionVariants = {
  initial: {
    x : '100%',
    width: '100%'
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%']
  }
}

const Transition = () => {
  return (
    <>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#03010a]" variants = {transitionVariants} initial = 'initial' animate="animate" 
       exit="exit" transition={{delay: 0.5, duration: 0.6, ease: 'easeInOut'}}> 
      </motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#33303f]" variants = {transitionVariants} initial = 'initial' animate="animate" 
       exit="exit" transition={{delay: 0.7, duration: 0.6, ease: 'easeInOut'}}> 
      </motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#f0eff3]" variants = {transitionVariants} initial = 'initial' animate="animate" 
       exit="exit" transition={{delay: 0.9, duration: 0.6, ease: 'easeInOut'}}> 
      </motion.div>
    </>
  );
};

export default Transition;
