import React from 'react'

interface Props {
    name: string
    style: string
    children: React.ReactNode
}

const PrimaryButton: React.FC<Props> = ({ ...props }) => {
    return <button className={props.style}>{props.children}</button>
}

export default PrimaryButton
