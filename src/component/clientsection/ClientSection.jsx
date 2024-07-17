import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';
import { exploreWorlds } from '../../lib/Data';
import styles from '../../styles/index';
import Explore from '../exploreClient/Explore';

function ClientSection() {
  const [active, setActive] = useState('world-2');
  return (
    <>
    <div className=' w-full flex justify-center items-center'>
      <div className='w-11/12 flex justify-center items-center flex-col'>

      <motion.h1
            className="font-inter text-[50px] font-semibold uppercase"
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            viewport={{ once: true }}
          >
            India Future INFLUENCER
          </motion.h1>
          <motion.p
            className="font-inter text-[15px] font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 2 } }}
            viewport={{ once: true }}
          >
            EXPLORE OUR UNMATCHED SERVICES
          </motion.p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto  flex flex-col`}
        >
          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
            {exploreWorlds.map((world, index) => (
              <Explore
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
              />
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </>
  );
}

export default ClientSection;
