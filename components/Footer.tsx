import React from 'react'

const Footer = () => {
    const Year = new Date().getFullYear()
    return (
        <footer className="h-36 border-t-1 border-slate-300 flex text-white border-t border-opacity-10 px-3">
            <div className="flex flex-col container mx-auto justify-center">
                <div>&copy; {Year} Musicphile Inc</div>
            </div>
        </footer>
    )
}

export default Footer
