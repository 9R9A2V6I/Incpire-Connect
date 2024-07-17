import React, { useState } from 'react';
import './Header.css';
import { FaAngleRight } from 'react-icons/fa';
import PhoneImg from "../../assets/headerImg.png"
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/toggleSlice';
import {motion} from "framer-motion"

function Header() {
  
  const dispatch = useDispatch();

  const toggleBGHandler = () => {
    dispatch(toggle())
  };

  return (
    <>
      <div className={`flex justify-center items-center w-ful`}>
        <div className="grid grid-cols-2 justify-center items-center  font-inter w-10/12 gap-20 mt-10  ">
        <motion.div          
           initial={{ x:-30, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.6, ease: "easeOut" }}>
          <div className="headerLeft w-12/12">
         
            <label className="switch">
              <input type="checkbox" onChange={toggleBGHandler} />
              <span className="slider"></span>
            </label>
          
            <div className="leading-[55px] text-start mt-5">
              <h1 className="font-semibold text-[30px] uppercase">The Next</h1>
              <h1 className="font-semibold font-petit text-[55px] uppercase">
                Generation
              </h1>
              <h1 className="font-semibold text-[14px] uppercase">
                Connect with Your Ideal Influencer Today
              </h1>
            </div>
            <p className="font-normal uppercase text-gray-600 text-[14px] mt-2">
              We Bring the future of Your Marketing with Influencer Insights
            </p>
            <div className="headerBtn mt-20 text-[13px] font-semibold flex justify-center items-center uppercase">
              Explore
              <FaAngleRight className="ml-2" />
            </div>
          </div>
          </motion.div>
          <motion.div          
           initial={{ x:30, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.5, ease: "easeOut" }}>
          <div className='rightHeader w-12/12'>
          <h1 className=" font-russonOne  text-[45px]  uppercase">Gen-Z Era</h1>
          <img  className = "h-[500px]" src={PhoneImg} alt="img"/>
          </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Header;
