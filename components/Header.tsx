import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { NAVLINKS } from '../assets/constants'

const Header = () => {
    const router = useRouter()
    return (
        <header className="sticky top-0 h-20 container mx-auto flex align-middle z-[1000] bg-black backdrop-blur-lg  opacity-30 bg-white/10 border-b border-b-neutral-500">
            <nav className="flex justify-end w-full px-3 items-center">
                <span className="sm:hidden cursor-pointer">
                    <Bars2Icon className="text-white h-10 w-10" />
                </span>

                <ul className="hidden sm:flex md:flex">
                    {NAVLINKS.map((link, index) => (
                        <li key={index}>
                            <Link href={link.url} passHref>
                                <a
                                    className={`${
                                        link.url === router.pathname
                                            ? 'text-slate-200'
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
        </header>
    )
}

export default Header
