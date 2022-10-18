import TopArtistCard from '@components/Card/TopArtistCard'
import TextHeader from '@components/TextHeader'
import React from 'react'
import ArtistImg from '@assets/image/200x200artist.webp'
import David from '@assets/image/200x200bb -davidgueta.webp'

const TopArtists = () => {
    return (
        <section className=" text-white mx-auto">
            <TextHeader>Top Artists</TextHeader>
            <div className="container mx-auto py-3 px-5 snap-x w-full flex space-x-5 overflow-x-auto scroll-smooth">
                <TopArtistCard name="Sam Smith" img={ArtistImg} />
                <TopArtistCard name="David Gueta" img={David} />
                <TopArtistCard name="Sam Smith" img={ArtistImg} />
                <TopArtistCard name="Sam Smith" img={ArtistImg} />
                <TopArtistCard name="Sam Smith" img={ArtistImg} />
                <TopArtistCard name="Sam Smith" img={ArtistImg} />
                <TopArtistCard name="Sam Smith" img={ArtistImg} />
                <TopArtistCard name="Sam Smith" img={ArtistImg} />
                <TopArtistCard name="Sam Smith" img={ArtistImg} />
                <TopArtistCard name="Sam Smith" img={ArtistImg} />
                <TopArtistCard name="Sam Smith" img={ArtistImg} />
            </div>
        </section>
    )
}

export default TopArtists
