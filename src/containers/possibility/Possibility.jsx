import React from 'react';
import './possibility.css';
import possibilityimage from '../../assets/possibility.png'
import { motion } from 'framer-motion';

function Possibility() {

  const imageAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }
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
    <div className='gpt3__possibility section__padding' id='possibility'>

      <motion.div className='gpt3__possibility-image'
        initial="hidden"
        whileInView="visible"
        variants={imageAnimation}
        viewport={{amount: 0.4 , once: true}}
            transition= {{
            type: "spring",
            ease: 'easeOut',
            duration: 2,
          }}
      >
        <img src={possibilityimage} alt="possibility" />
      </motion.div>

      <motion.div className='gpt3__possibility-content'
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
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <h4>
          Request Early Access to Get Started
        </h4>
      </motion.div>
    </div>
  )
}

export default Possibility