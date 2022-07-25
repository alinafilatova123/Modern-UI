import React from 'react'
import './cta.css'
import { motion } from 'framer-motion';

function CTA() {

  const textAnimation = {
    hidden: {
      x: 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div className='gpt3__cta'
      initial="hidden"
      whileInView="visible"
      variants={textAnimation}
      viewport={{amount: 0.4 , once: true}}
            transition= {{
            type: "spring",
            ease: 'easeOut',
            duration: 2,
          }}
    >
      <div className='gpt3__cta-content'>
        <p>Request Early Access to Get Started</p>
        <h3>Register today &#x26; start exploring the endless possiblities.</h3>
      </div>
      <div className='gpt3__cta-btn'>
        <button type='button'>Get Started</button>
      </div>
    </motion.div>
  )
}

export default CTA