import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SEO from './SEO'

const Layout = ({ children, seoProps = {} }) => {
  return (
    <>
      <SEO {...seoProps} />
      <div className="min-h-screen bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout