import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import img1 from '../../assets/Influencer/pexels-mostafasanadd-868113.jpg';
import './CardInfu.css';
import { useNavigate } from 'react-router-dom';

function CardInfu({ index, color,name,id}) {

  const navigate=useNavigate();
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <>
      <div
        key={index}
        className="w-10/12 h-96 flex justify-center items-start p-2
              "
        style={{ backgroundColor: color }}
        ref={ref}
      onClick={()=>navigate('/singleInfu', { state:{ id } })}
      >

        <motion.div
          className="w-full h-full flex justify-center items-start relative "
          style={{ y }}
        >
          <h1 className=" font-Covered text-[40px] font-meduim tracking-widest opacity-70 ">
            {name}
          </h1>
          <div className="absolute w-9/12 h-[300px]  border border-black   top-14 left-8 ring1InfluCard ">
            <img
              src={img1}
              alt=""
              className="ring1InfluCardImg absolute w-8/12 h-[300px] left-9"
            />
          </div>
          <div className="absolute w-10/12 h-[115px]  border border-black   top-14 left-5 ring1InfluCard  "></div>
          <div className="absolute w-10/12 h-[50px]  border border-black   top-44 left-5 ring1InfluCard  "></div>
          <div className="absolute w-10/12 h-[115px]  border border-black   top-60 left-5 ring1InfluCard  "></div>
        </motion.div>
      </div>
    </>
  );
}

export default CardInfu;
