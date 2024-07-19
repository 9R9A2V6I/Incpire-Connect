import React, { useState, useEffect } from 'react';
import img1 from '../../assets/Influencer/pexels-mostafasanadd-868113-removebg-preview.png';
import Insta from '../../assets/LogoImg/3d-fluency-instagram-logo.png';
import Facebook from '../../assets/LogoImg/3d-fluency-facebook-logo.png';
import Twitter from '../../assets/LogoImg/3d-fluency-twitter-logo.png';
import Snapchat from '../../assets/LogoImg/3d-fluency-snapchat.png';
import Contact from '../../assets/LogoImg/Contact.png';
import { motion } from 'framer-motion';
import './SingleInfu.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SingleInfu() {
  const [infuData, setInfuData] = useState([]);

  const location = useLocation();
  const { id } = location.state || {};

  const fetchHandler = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/workout/influcerInfo/${id}`
      );
      if (response.status === 200) {
        setInfuData(response.data.data.influcer);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const formatNumber = (num) => {
    if (num == null) return 'N/A';
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="w-full flex justify-center items-center mt-5 ">
      <div className="w-10/12 flex justify-between items-center  relative ">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-5/12 h-[500px] bg-gray-100"
        >
          <img
            src={img1}
            alt=""
            className="w-full h-full object-cover opacity-90"
          />
        </motion.div>
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-7/12 h-[470px] flex justify-start items-center flex-col"
        >
          <h1 className="text-[40px]  font-meduim  font-Contrail uppercase tracking-widest ">
            {infuData.username}
          </h1>
          <h1 className="text-[40px]  font-meduim  font-Contrail uppercase tracking-widest">
            {infuData.influType}
          </h1>
          <p className="text-[14px] font-normal font-russonOne uppercase text-gray-600">
            Content Creater
          </p>
          <div className="w-full  grid grid-cols-2">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="flex justify-center items-center"
            >
              <img src={Insta} alt="" className="w-20 h-20 socialIcon " />
              <h1 className="text-[30px] font-Covered  text-red-300">
                {formatNumber(infuData.instagramFollower)}
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 3, ease: 'easeOut' }}
              className="flex justify-center items-center"
            >
              <img src={Facebook} alt="" className="w-20 h-20  socialIcon" />
              <h1 className="text-[30px] font-Covered  text-blue-500">
                {formatNumber(infuData.facebookFollower)}
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 4, ease: 'easeOut' }}
              className="flex justify-center items-center"
            >
              <img src={Twitter} alt="" className="w-20 h-20  socialIcon" />
              <h1 className="text-[30px] font-Covered  text-blue-200">
                {formatNumber(infuData.twitterFollower)}
              </h1>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 5, ease: 'easeOut' }}
              className="flex justify-center items-center"
            >
              <img src={Snapchat} alt="" className="w-20 h-20 socialIcon " />
              <h1 className="text-[30px] font-Covered  text-yellow-400">
                {formatNumber(infuData.youtubeFollower)}
              </h1>
            </motion.div>
          </div>
          <div className="flex justify-center items-center gap-2">
            <img src={Contact} alt="" className="w-20 h-20 " />
            <div>
              <h1 className="text-[20px] font-Covered  text-gray-700">
                +91-{infuData.contactNo}
              </h1>
              <h1 className="text-[20px] font-Covered  text-gray-700">
                {infuData.email}
              </h1>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: 'easeOut' }}
          className="absolute left-[300px] text-center z-30 flex items-center flex-col top-[120px]"
        >
          <div className="top-56 w-[300px] absolute flex justify-center items-center gap-3 left-8">
            <div className="w-1/3 h-[100px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100  object-contain ">
              <img
                src={img1}
                alt=""
                className="w-full h-full object-contain opacity-90 "
              />
            </div>
            <div className="w-1/3 h-[100px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100  object-contain ">
              <img
                src={img1}
                alt=""
                className="w-full h-full object-contain opacity-90 "
              />
            </div>
            <div className="w-1/3 h-[100px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100  object-contain ">
              <img
                src={img1}
                alt=""
                className="w-full h-full object-contain opacity-90 "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SingleInfu;
