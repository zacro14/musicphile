import Banner from '@components/Banner/Banner'
import SonglistItem from '@components/SonglistItem'
import React from 'react'
import Seo from '../../components/Seo/Seo'
import Songs from '@assets/data/getWorldChart.json'
const Charts = () => {
    return (
        <>
            <Seo title="Music Just For You" description="discover music" />
            <Banner />
            <section className="min-h-screen mx-auto max-w-7xl">
                <section className="pt-5 text-white">
                    {Songs.map((song: any, i: number) => (
                        <SonglistItem
                            key={i}
                            order={i + 1}
                            id={song.key}
                            title={song.title}
                            subtitle={song.subtitle}
                            image={song.images}
                            artist={song?.artists}
                        />
                    ))}
                </section>
            </section>
        </>
    )
}

export default Charts
