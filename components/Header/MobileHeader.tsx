import React, { useRef } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Logo from '@assets/image/musicphile_logo1_200x200.png'
import { NAVLINKS } from '@assets/constants'
import Link from 'next/link'
import { NextRouter } from 'next/router'

export interface Header {
    isOpen: boolean
    setOpenMenu: (v: boolean) => void
    router: NextRouter
}

export const MobileHeader: React.FC<Header> = (props) => {
    const { isOpen, setOpenMenu, router } = props
    return (
        <div
            className={`fixed ${
                isOpen ? 'block' : 'hidden'
            }  top-0 md:hidden lg:hidden h-screen bg-black z-[1001] w-full min-h-20`}
        >
            <div className="grid grid-cols-2 items-center border-b border-b-neutral-200/10">
                <div className="flex">
                    <div className="relative h-28 w-28">
                        <Image src={Logo} alt={'MusicPhile'} layout={'fill'} />
                    </div>
                </div>
                <div className="flex justify-end px-3">
                    <XMarkIcon
                        className="text-white h-10 w-10"
                        onClick={() => setOpenMenu(false)}
                    />
                </div>
            </div>

            <nav>
                <ul className="mt-5">
                    {NAVLINKS.map((link, index) => (
                        <li className=" pl-16 py-6" key={index}>
                            <Link href={link.url} passHref>
                                <a
                                    className={`${
                                        link.url === router.pathname
                                            ? 'text-slate-200 underline underline-offset-8 decoration-indigo-500'
                                            : 'text-slate-400'
                                    } hover:text-zinc-200 px-5 text-xl transition delay-75`}
                                >
                                    {link.name}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
