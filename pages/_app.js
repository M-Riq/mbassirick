  import '../styles/globals.css';
  import  Layout from '../components/Layout'
  import Transition from '../components/Transition'
  import { Component } from 'react';

  //router
  import {useRouter} from 'next/router'
  
  //framer motion
  import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log("the route is ", router.route)
 
  return (
    <Layout>
        <AnimatePresence mode = 'wait'>
           <motion.div key={router.route} className='h-full'>
             <Transition/>
             <Component {...pageProps}/>
           </motion.div>
        </AnimatePresence>
    </Layout>
  ) 
}

export default MyApp;
