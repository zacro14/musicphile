import React from 'react'
import Banner from '@components/Banner/Banner'
import SonglistItem from '@components/SonglistItem'
import Songs from '@assets/data/getWorldChart.json'
import Seo from '@components/Seo/Seo'
import { NextPage } from 'next'

const Charts: NextPage = () => {
    return (
        <>
            <Seo title="Music Just For You" description="discover music" />
            <Banner banner={Songs.slice(0, 3)} />
            <section className="min-h-screen mx-auto max-w-7xl">
                <section className="pt-5 text-white px-5">
                    {Songs.map((song: any, i: number) => (
                        <SonglistItem
                            key={song.id}
                            order={i}
                            id={song.key}
                            title={song.title}
                            subtitle={song.subtitle}
                            images={song.images}
                            artist={song?.artists}
                            data={Songs}
                            hub={song.hub}
                        />
                    ))}
                </section>
            </section>
        </>
    )
}

export default Charts
