import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'

export const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const router = useRouter()
    return (
        <header>
            <DesktopHeader setOpenMenu={setOpen} />
            <AnimatePresence>
                {isOpen && (
                    <MobileHeader
                        router={router}
                        setOpenMenu={setOpen}
                        isOpen={isOpen}
                    />
                )}
            </AnimatePresence>
        </header>
    )
}
