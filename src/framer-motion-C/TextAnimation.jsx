import React from 'react';
import { motion } from 'framer-motion';

function TextAnimation(props) {
  return (
    <>
      <div className='flex justify-center items-center'>
        {props.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{' '}
          </motion.span>
        ))}
      </div>
    </>
  );
}

export default TextAnimation;
