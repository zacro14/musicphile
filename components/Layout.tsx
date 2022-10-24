import React from 'react'
import Footer from './Footer'
import Header from './Header'
type Children = {
    children: React.ReactNode
}

const Layout: React.FC<Children> = ({ children }) => {
    return (
        <div className="bg-black">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
