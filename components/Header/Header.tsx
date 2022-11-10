import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const router = useRouter()
    return (
        <header>
            <DesktopHeader setOpenMenu={setOpen} />
            <MobileHeader
                router={router}
                setOpenMenu={setOpen}
                isOpen={isOpen}
            />
        </header>
    )
}

export default Header
