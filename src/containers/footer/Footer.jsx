import React from 'react';
import './footer.css';
import gpt3logo from '../../assets/logo.svg'
import { motion } from 'framer-motion';

function Footer() {

  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div className='gpt3__footer section__padding'
      initial="hidden"
      whileInView="visible"
      variants={textAnimation}
      viewport={{amount: 0.1 , once: true}}
            transition= {{
            type: "spring",
            ease: 'easeOut',
            duration: 2,
          }}
    >

      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step in to the future before others
        </h1>
      </div>

      <button className='gpt3__footer-btn'>Request Early Access</button>

      <div className='gpt3__footer-links'>

        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>

        
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms &#x26; Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
        

      </div>

      <div className='gpt3__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>

    </motion.div>
  )
}

export default Footer