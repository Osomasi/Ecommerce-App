import React from 'react';

import Header from '../partials/Header';
import HeroPage from '../partials/Welcome';
import Footer from '../partials/Footer';
import ImageSlider from '../partials/Imageslider';
// import Cart from '../partials/Cart';



function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header></Header>

      {/*  Page content */}
      <main className="flex-grow">
 
        {/*  Page sections */}
        <HeroPage/>

      </main>

      {/*  Site footer */}
      <Footer/>

    </div>
  );
}

export default Home;