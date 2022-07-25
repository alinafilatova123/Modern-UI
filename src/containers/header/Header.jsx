import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import { motion } from 'framer-motion';

function Header() {

  const headerAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  }
  const imgAnimation = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <div className='gpt3__header section__padding' id="home">
      <motion.div className='gpt3__header-content'
          initial="hidden"
          animate="visible"
          variants={headerAnimation}
          viewport={{once: true}}
              transition= {{
              type: "spring",
              ease: 'easeOut',
              duration: 2,
            }}

        >
        <h1 className='gradient__text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>

        <p>
          Yet bed any for travelling assistance indulgence unpleasing. 
          Not thoughts all exercise blessing. Indulgence way everything 
          joy alteration boisterous the attachment. Party we years to order 
          allow asked of.
        </p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Adress' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people"/>
          <p>
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </motion.div>

      <motion.div className='gpt3__header-image'
        initial="hidden"
        animate="visible"
        variants={imgAnimation}
        viewport={{once: true}}
            transition= {{
            type: "spring",
            ease: 'easeOut',
            duration: 2,
            delay: 1
          }}
      >
          <img src={ai} alt="ai" />
      </motion.div>
    </div>
  )
}

export default Header