import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { NAVLINKS } from '@assets/constants'
import Logo from '@assets/image/musicphile_logo1_200x200.png'
import Image from 'next/image'

interface Props {
    setOpenMenu: (b: boolean) => void
}

export const DesktopHeader: React.FC<Props> = (props) => {
    const { setOpenMenu } = props
    const router = useRouter()
    return (
        <div className="sticky top-0 min-h-20  overflow-hidden w-full  z-[1000] bg-black backdrop-blur-lg backdrop-saturate-50 border-b border-b-neutral-200/10">
            <div className="mx-auto container grid grid-cols-2 justify-center items-center">
                <div className="flex justify-center items-center relative h-28 w-28  select-none">
                    <Link href={'/'} passHref>
                        <Image
                            className="select-none"
                            src={Logo}
                            alt={'MusicPhile'}
                            layout={'fill'}
                        />
                    </Link>
                </div>
                <nav className="flex justify-end w-full px-3 items-center">
                    <span className="sm:hidden cursor-pointer">
                        <Bars2Icon
                            className="text-white h-10 w-10"
                            onClick={() => setOpenMenu(true)}
                        />
                    </span>

                    <ul className="hidden sm:flex md:flex">
                        {NAVLINKS.map((link, index) => (
                            <li key={index}>
                                <Link href={link.url} passHref>
                                    <a
                                        className={`${
                                            link.url === router.pathname
                                                ? 'text-slate-200 underline underline-offset-8 decoration-indigo-500'
                                                : 'text-slate-400'
                                        } hover:text-zinc-200 px-5 font-medium transition delay-75`}
                                    >
                                        {link.name}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
