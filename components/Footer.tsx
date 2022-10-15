import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const link = [
        {
            label: 'Home',
            path: '/',
        },
        {
            label: 'Products',
            path: '/products',
        },
        {
            label: 'About Us',
            path: '/about-us',
        },
    ]

    const Year = new Date().getFullYear()
    return (
        <footer className="h-36 bg-indigo-400 border-t-1 border-slate-300 flex text-white ">
            <div className="flex flex-col container mx-auto justify-center">
                <ul className="flex items-center justify-center space-x-5 container mx-auto">
                    {link.map((link, index) => (
                        <Link key={index} href={link.path} passHref>
                            <li className="cursor-pointer">{link.label}</li>
                        </Link>
                    ))}
                </ul>
                <hr className="border-dashed" />
                <div>&copy; {Year} Extimator, Inc</div>
            </div>
        </footer>
    )
}

export default Footer
