
import { motion } from 'framer-motion';
import { socials } from '../../lib/Data';

import styles from '../../styles/index';
import InfluSVG from "../../assets/Influencer/4515737-removebg-preview.png"
import { footerVariants } from '../../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative mt-20`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[45px] text-[35px]">
          Enter New Connection World
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src={InfluSVG}
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">
            Enter New Connection
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-red-900 opacity-40" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-bold text-[24px] uppercase ">
            Incpire Connect
          </h4>
          <p className="font-normal text-[14px]  opacity-50">
            Copyright © 2021 - 2022 Incpire-Connect. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
