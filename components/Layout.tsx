import React from 'react'
import Header from './Header'
type Children = {
    children: React.ReactNode
}

const Layout: React.FC<Children> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}

export default Layout
