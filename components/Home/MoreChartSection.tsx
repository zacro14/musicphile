import React from 'react'
import MoreChartBanner from '@assets/image/200x200more_chart.webp'
import TextHeader from '@components/TextHeader'
import { ChartCard } from '@components/Card'

const MoreChart = () => {
    const data = [
        {
            banner: MoreChartBanner,
            title: 'Top 200',
            category: 'Philippines',
            bg_color: '#fff',
            description:
                'Featuring songs from Mullage, SB19, Sam Smith & Kim Petras and more',
        },
        {
            banner: MoreChartBanner,
            title: 'Top 200',
            category: 'Philippines',
            bg_color: '#874958',
            description:
                'Featuring songs from Mullage, SB19, Sam Smith & Kim Petras and more',
        },
        {
            banner: MoreChartBanner,
            title: 'Top 50',
            category: 'Moscow',
            bg_color: '#445270',
            description:
                'Featuring songs from Mullage, SB19, Sam Smith & Kim Petras and more',
        },
    ]
    return (
        <div className="my-5 border-t border-t-1 border-slate-300 border-opacity-10">
            <TextHeader>Other Charts</TextHeader>
            <div className="container mx-auto before:snap-x flex overflow-x-auto px-5">
                {data.map((data, i) => (
                    <ChartCard key={i} {...data} />
                ))}
            </div>
        </div>
    )
}

export default MoreChart
