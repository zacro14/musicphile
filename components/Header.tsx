import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Header = () => {
    const router = useRouter()
    const link = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Products',
            url: '/products',
        },
        {
            name: 'About Us',
            url: '/about-us',
        },
    ]
    return (
        <nav className="h-20 container mx-auto flex align-middle">
            <div className="flex justify-end w-full px-3 items-center">
                <ul className="flex">
                    {link.map((link, index) => (
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
            </div>
        </nav>
    )
}

export default Header
