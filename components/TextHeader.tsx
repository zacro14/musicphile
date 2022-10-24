import React from 'react'
interface Props {
    children: React.ReactNode
}

const TextHeader = ({ children }: Props) => {
    return (
        <h2 className="font-bold text-white text-4xl text-center py-10 underline underline-offset-8 decoration-indigo-500">
            {children}
        </h2>
    )
}

export default TextHeader
