import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import stiker1 from '../../assets/Stiker/4193251.png';
import stiker2 from "../../assets/Stiker/4681580.png";

function Stiker() {
  const ref = useRef();

  const { scrollYProgress, scrollXProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 200]);
  const x = useTransform(scrollXProgress, [0, 1], [-100, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="w-full h-full flex justify-center items-center mt-10">
      <div className='w-11/12' ref={ref}>
        <motion.img
          src={stiker1}
          className="h-20 w-20"
          alt="stiker1"
          style={{ y, x, rotate }}
        />
        <motion.img
          src={stiker2}
          className="h-20 w-20"
          alt="stiker2"
          style={{ y, x, rotate }}
        />
      </div>
    </div>
  );
}

export default Stiker;
