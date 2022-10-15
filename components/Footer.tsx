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
        <footer className="h-36 border-t-1 border-slate-300 flex text-white border-t border-opacity-10">
            <div className="flex flex-col container mx-auto justify-center">
                <div>&copy; {Year} Extimator, Inc</div>
            </div>
        </footer>
    )
}

export default Footer
