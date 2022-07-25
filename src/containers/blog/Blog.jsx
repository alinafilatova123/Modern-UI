import React from 'react';
import './blog.css';
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import { motion } from 'framer-motion';

function Blog() {

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
    <motion.div className='gpt3__blog section__padding' id='blog'
      initial="hidden"
      whileInView="visible"
      variants={textAnimation}
      viewport={{amount: 0.2 , once: true}}
            transition= {{
            type: "spring",
            ease: 'easeOut',
            duration: 2,
          }}
    >
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, 
          We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>

        <div className='gpt3__blog-container_groupA'>
          <Article imgURL={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>

        <div className='gpt3__blog-container_groupB'>
          <Article imgURL={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={blog03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgURL={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>

      </div>
    </motion.div>
  )
}

export default Blog