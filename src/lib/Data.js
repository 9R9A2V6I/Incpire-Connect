import img1 from '../assets/Influencer/pexels-koolshooters-8534435.jpg';
import img2 from '../assets/Influencer/pexels-mostafasanadd-868113.jpg';
import img3 from '../assets/Influencer/pexels-nguy-n-nguyen-689620639-18200420.jpg';
import img4 from '../assets/Influencer/pexels-oleratomotshebe-19349789.jpg';
import img5 from '../assets/Influencer/pexels-pixabay-36029.jpg';
import logo1 from '../assets/SVGS/facebook.svg';
import logo2 from '../assets/SVGS/instagram.svg';
import logo3 from '../assets/SVGS/linkedin.svg';
import logo4 from '../assets/SVGS/twitter.svg';
import img6 from '../assets/Influencer/pexels-rules-effects-875275396-20363012.jpg';
import img7 from '../assets/Influencer/pexels-simon-robben-55958-977796.jpg';
import img8 from '../assets/Influencer/pexels-yesenia-mora-432270070-22748549.jpg';
import img9 from '../assets/Influencer/pexels-koolshooters-8534435.jpg';
import img10 from '../assets/Influencer/pexels-mostafasanadd-868113.jpg';
import img11 from '../assets/Influencer/pexels-pixabay-36029.jpg';
import { IoPersonOutline } from "react-icons/io5";
import { FaHistory } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";

export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: img1,
    name: 'Rachina Gupta',
    title: 'Yoga Influencer',
  },
  {
    id: 'world-2',
    imgUrl: img2,
    name: 'Satvik Tiwari',
    title: 'Fashion Influencer',
  },
  {
    id: 'world-3',
    imgUrl: img3,
    name: 'Pooja Ronak',
    title: ' Beauty Product',
  },
  {
    id: 'world-4',
    imgUrl: img4,
    name: ' Riya Nakor',
    title: 'Sport Kit',
  },
  {
    id: 'world-5',
    imgUrl: img5,
    name: 'Ashvita Sen',
    title: 'Child Toys',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: logo1,
  },
  {
    name: 'linkedin',
    url: logo3,
  },
  {
    name: 'instagram',
    url: logo2,
  },
  {
    name: 'facebook',
    url: logo4,
  },
];

export const MidSectionData = [
  {
    id: 'world-1',
    imgUrl: img6,
    name: 'Rachina Gupta',
    title: 'Yoga Influencer',
  },
  {
    id: 'world-2',
    imgUrl: img7,
    name: 'Satvik Tiwari',
    title: 'Fashion Influencer',
  },
  {
    id: 'world-3',
    imgUrl: img8,
    name: 'Pooja Ronak',
    title: ' Beauty Product',
  },
  {
    id: 'world-4',
    imgUrl: img9,
    name: ' Riya Nakor',
    title: 'Sport Kit',
  },
  {
    id: 'world-5',
    imgUrl: img10,
    name: 'Ashvita Sen',
    title: 'Child Toys',
  },
  {
    id: 'world-6',
    imgUrl: img11,
    name: 'Ashvita Sen',
    title: 'Child Toys',
  },
];

export const SidebarData = [
  {
    id: 1,
    name: 'Profile',
    icon:<IoPersonOutline size={20}/> ,
    link: '/profile',
  },
  {
    id: 2,
    name: 'Client History',
    icon:<FaHistory size={20}/>,
    link: '/clientHistory',
  },
  {
    id: 3,
    name: 'Notification',
    icon:<FaRegBell size={20}/>,
    link: '/notification',
  },
  {
    id: 4,
    name: 'Accounts Center',
    icon:<MdOutlineManageAccounts size={20}/>,
    link: '/accountCenter',
  },
];
