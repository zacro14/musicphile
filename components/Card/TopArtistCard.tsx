import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    name: string
    img: string | StaticImageData | any
}
const TopArtistCard = (props: Props) => {
    const { name, img } = props
    return (
        <div className="flex flex-col space-y-2 snap-center">
            <div className="h-48 w-36 relative ">
                <Image
                    className="rounded-lg object-cover"
                    src={img}
                    alt={name}
                    layout="fill"
                />
            </div>
            <span className="text-ellipsis font-bold cursor-pointer">
                <Link
                    href={{
                        pathname: `/artists/[slug]`,
                        query: { slug: name },
                    }}
                    passHref
                >
                    {name}
                </Link>
            </span>
        </div>
    )
}

export default TopArtistCard
