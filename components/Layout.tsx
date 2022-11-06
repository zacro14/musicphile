import React from 'react'
import { useAppSelector } from 'redux/store'
import Footer from './Footer'
import Header from './Header'
import MusicPlayer from './Player'
type Children = {
    children: React.ReactNode
}

const Layout: React.FC<Children> = ({ children }) => {
    const { activeSong, isActive } = useAppSelector((state) => state.player)

    return (
        <div className="bg-black">
            <Header />
            <main>{children}</main>
            <Footer />
            {isActive && <MusicPlayer />}
        </div>
    )
}

export default Layout
