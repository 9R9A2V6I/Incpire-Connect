import React from 'react';
import Header from '../../component/header/Header';
import MideSection from '../../component/midsection/MideSection';
import ClientSection from '../../component/clientsection/ClientSection';
import Stiker from '../../component/StikerBar/Stiker';
import TimeLine from '../../component/timeline/TimeLine';


function HomePage() {
  return (
    <>
     
      <h1 className='w-full '>
        <Header/>
        <MideSection/>
        <ClientSection/>
        <TimeLine/>
        {/* <Stiker/> */}
      </h1>
    </>
  );
}

export default HomePage;
