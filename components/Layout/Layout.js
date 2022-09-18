import Header from './Header';
import Footer from './Footer';
import Bubbles from './Bubbles';
import React, { useEffect, useState } from 'react';

const POSITION_START_SHOW_BUBBLE = 200;

const Layout = ({ children }) => {
  const [showBubble, setShowBubble] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > POSITION_START_SHOW_BUBBLE) {
      setShowBubble(true);
    } else {
      setShowBubble(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className='min-h-screen flex flex-col'>
      <Header />
      <div className='mt-16 flex flex-col'>{children}</div>
      <Footer />
      {showBubble && <Bubbles />}
    </main>
  );
};

export default Layout;
