import Head from 'next/head'
import React from 'react'
import { NextSeo } from 'next-seo'
import seoconfig from '../../seo.config'

interface Props {
    title?: string
    description?: string
}
const Seo = (props: Props) => {
    const { title, description } = props
    return (
        <NextSeo
            description={description}
            title={title}
            titleTemplate={seoconfig.titleTemplate}
        />
    )
}

export default Seo
