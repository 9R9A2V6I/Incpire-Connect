import React from 'react';
import { motion } from 'framer-motion';
import img from '../../assets/Influencer/11.jpg';

function TimeLine() {
  return (
    <>
      <div className="flex justify-center items-center w-full mt-20 flex-col mb-10">
        <div className="flex justify-center items-center flex-col w-11/12">
          <motion.h1
            className="font-inter text-[50px] font-semibold uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            viewport={{ once: true }}
          >
            Timeline
          </motion.h1>
          <motion.p
            className="font-inter text-[15px] font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            viewport={{ once: true }}
          >
            A brief overview of key milestones and achievements.
          </motion.p>

          <div className="flex justify-between items-center w-11/12 mt-14 gap-3">
          <motion.div
              initial={{ x:-30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 3, ease: 'easeOut' }} className="w-4/12  text-left ">
              <p className="text-[18px] font-inter">23 July 2024</p>
              <h1 className="font-inter text-[35px] font-semibold ">
                Award-winning photographer
              </h1>
              <p className="text-[20px] font-inter leading-[35px]">
                The photographer's talent and hard work are recognized as they
                receive a prestigious photography award. This milestone
                represents their achievement and recognition within the
                photography community.
              </p>
            </motion.div>
           
              <motion.img initial={{ y:30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 3, ease: 'easeOut' }} src={img} alt="" className='w-8/12 rounded-[25px] h-[400px]' />
          
          </div>
        </div>
      </div>
    </>
  );
}

export default TimeLine;
