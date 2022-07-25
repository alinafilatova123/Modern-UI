import React from 'react';
import './brand.css';
import {google, slack, atlassian, dropbox, shopify} from './imports'
import { motion } from 'framer-motion';

function Brand() {

  const brandAnimation = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div className='gpt3__brand section__padding'
      initial="hidden"
      whileInView="visible"
      variants={brandAnimation}
      viewport={{amount: 0.2 , once: true}}
          transition= {{
          type: "spring",
          ease: 'easeOut',
          duration: 2,
        }}
    >
      
      <div>
        <img src={google} alt="google" /> 
      </div> 

      <div>
        <img src={atlassian} alt="atlassian" />  
      </div> 

      <div>
        <img src={dropbox} alt="dropbox" /> 
      </div>

      <div>
        <img src={shopify} alt="shopify" />
      </div>

      <div>
        <img src={slack} alt="slack" />  
      </div>

    </motion.div>
  )
}

export default Brand