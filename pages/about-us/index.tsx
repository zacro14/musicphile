import Seo from '@components/Seo/Seo'
import React from 'react'

const About = () => {
    return (
        <>
            <Seo title="About Us" description="about musicphile" />
            <section className="h-screen p-5">
                <h1 className="text-2xl text-center font-bold text-white">
                    Hi, Welcome to MusicPhile, For your music Music Enthusiast
                </h1>
            </section>
        </>
    )
}

export default About
