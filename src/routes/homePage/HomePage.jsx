import React from 'react';
import Header from '../../component/header/Header';
import MideSection from '../../component/midsection/MideSection';
import ClientSection from '../../component/clientsection/ClientSection';


function HomePage() {
  return (
    <>
     
      <h1 className='w-full '>
        <Header/>
        <MideSection/>
        <ClientSection/>
      </h1>
    </>
  );
}

export default HomePage;
