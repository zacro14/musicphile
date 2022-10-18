import React from 'react'
import SonglistItem from '../SonglistItem'
import TextHeader from '../TextHeader'
import SongThumb from '@assets/image/200x200bb.webp'
import Link from 'next/link'

const GlobalTopSongs = () => {
    return (
        <section className="min-h-[80] text-white border-t border-t-1 border-slate-300 border-opacity-10 my-5">
            <div className="px-5">
                <TextHeader>Top Global Chart</TextHeader>
                <Link href={{ pathname: '/charts' }} passHref>
                    <span className="flex justify-end mx-auto container">
                        <a className="text-right hover:underline underline-offset-8 cursor-pointer">
                            See All
                        </a>
                    </span>
                </Link>
                <div className="snap-x flex container mx-auto overflow-x-auto">
                    <div className="snap-center px-3 w-96  shrink-0 pb-5">
                        <SonglistItem
                            order={1}
                            song={'Unholy'}
                            artist={'Jin'}
                            thumbImg={SongThumb}
                        />
                        <SonglistItem
                            order={1}
                            song={'Unholy'}
                            artist={'Jin'}
                            thumbImg={SongThumb}
                        />
                        <SonglistItem
                            order={1}
                            song={'Unholy'}
                            artist={'Jin'}
                            thumbImg={SongThumb}
                        />
                    </div>

                    <div className="snap-center px-3 w-96 overflow-x-auto shrink-0">
                        <SonglistItem
                            order={2}
                            song={'Unholy'}
                            artist={'Jin'}
                            thumbImg={SongThumb}
                        />
                        <SonglistItem
                            order={1}
                            song={'Unholy'}
                            artist={'Jin'}
                            thumbImg={SongThumb}
                        />
                    </div>
                    <div className="snap-center px-3 w-96 overflow-x-auto shrink-0">
                        <SonglistItem
                            order={2}
                            song={'Unholy'}
                            artist={'Jin'}
                            thumbImg={SongThumb}
                        />
                    </div>
                    <div className="snap-center px-3 w-96 overflow-x-auto shrink-0">
                        <SonglistItem
                            order={2}
                            song={'Unholy'}
                            artist={'Jin'}
                            thumbImg={SongThumb}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GlobalTopSongs
