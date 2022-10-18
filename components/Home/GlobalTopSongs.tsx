import React from 'react'
import SonglistItem from '../SonglistItem'
import TextHeader from '../TextHeader'
import SongThumb from '@assets/image/200x200bb.webp'

const GlobalTopSongs = () => {
    return (
        <section className="h-80 text-white border-y border-indigo-900 my-5">
            <TextHeader>Top Global Chart</TextHeader>
            <div className="px-3 w-96">
                <SonglistItem
                    order={1}
                    song={'Unholy'}
                    artist={'Jin'}
                    thumbImg={SongThumb}
                />
            </div>
        </section>
    )
}

export default GlobalTopSongs
