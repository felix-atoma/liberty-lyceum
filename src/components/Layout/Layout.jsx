// components/Layout/Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

const Layout = ({ children, seoProps = {} }) => {
  const location = useLocation();
  
  // Don't show header/footer for admin routes (except admin login)
  const isAdminRoute = location.pathname.startsWith('/admin') && 
                      location.pathname !== '/admin/login';
  
  if (isAdminRoute) {
    return (
      <>
        <SEO {...seoProps} />
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </>
    );
  }

  return (
    <>
      <SEO {...seoProps} />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;