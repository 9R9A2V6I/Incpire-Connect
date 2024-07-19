import React, { useState, useEffect } from 'react';
import './AllInflucer.css';
import img1 from '../../assets/Influencer/pexels-mostafasanadd-868113.jpg';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import CardInfu from '../../component/AllInfluCard/CardInfu';
import axios from 'axios';

function AllInflucer() {
  const [infuData, setInfuData] = useState([]);

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 31) + 35;
    const lightness = Math.floor(Math.random() * 31) + 60;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  };

  const fetchHandler = async () => {
    try {
      const response = await axios.get('http://localhost:5000/workout/influcerInfo');
      if (response.status === 200) {
        setInfuData(response.data.data.influcerInfo);
      }
    } catch (err) {
      console.log("Error",err);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const colors = Array.from({ length: infuData.length }, () => getRandomColor());

  return (
    <>
      <div className="flex justify-center items-center w-full mt-5">
        <div className="grid grid-cols-3 gap-5 w-10/12">
          {infuData.map((influencer, index) => (
            <CardInfu key={index} name={influencer.username}  id={influencer._id}color={colors[index]} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllInflucer;
