import React, { useState } from 'react';

import './MidSection.css';
import { motion } from 'framer-motion';
import { MidSectionData } from '../../lib/Data';
import img1 from '../../assets/Influencer/pexels-koolshooters-8534435.jpg';

function MideSection() {
  const [bgImage, setBgImage] = useState(img1);
  const [headerText, setHeaderText] = useState('Ragav Gupta');

  const handleImageChange = (image, text) => {
    setBgImage(image);
    setHeaderText(text);
  };

  return (
    <>
      <section className="flex justify-center items-center w-full mt-20 flex-col">
        <div className="flex justify-start flex-col w-11/12">
          <motion.h1
            className="font-inter text-[50px] font-semibold uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            viewport={{ once: true }}
          >
            OUR INFLUENCER
          </motion.h1>
          <motion.p
            className="font-inter text-[15px] font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            viewport={{ once: true }}
          >
            EXPLORE OUR UNMATCHED SERVICES
          </motion.p>
        </div>
        <div className="flex justify-center items-center  flex-col w-11/12 relative">
          <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 3, ease: 'easeOut' }}
            className={`mt-10 h-[500px]  w-10/12  midBGChange mb-20 relative  rounded-lg`}
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <motion.h1
              className="font-inter text-[50px] font-semibold uppercase absolute top-10 left-20  text-red-600"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              key={headerText}
            >
              {headerText}
            </motion.h1>
          </motion.div>

          <div className="flex w-7/12 overflow-x-scroll gap-5 hide-scrollbar absolute  top-96 ">
            {MidSectionData.map((item, index) => (
              <>
                <motion.img
                 initial={{ y: 30, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 5, ease: 'easeOut' }}
                  className="w-[180px] h-[200px] cursor-pointer rounded-lg"
                  onClick={() => handleImageChange(item.imgUrl, item.name)}
                  src={item.imgUrl}
                  alt="Background 1"
                />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default MideSection;
