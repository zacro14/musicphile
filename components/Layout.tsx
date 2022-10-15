import React from 'react'
import Header from './Header'
import Footer from './Footer'
type Children = {
    children: React.ReactNode
}

const Layout: React.FC<Children> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout
