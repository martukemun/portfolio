import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className='content font-mont'>{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
