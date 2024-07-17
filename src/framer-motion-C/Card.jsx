import React from 'react';
import { motion } from 'framer-motion';

function Card() {
  return (
    <>
      <motion.div
        className="card"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x:-50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
       <div>

       </div>
      </motion.div>
    </>
  );
}

export default Card;
