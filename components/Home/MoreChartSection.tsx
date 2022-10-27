import React from 'react'
import MoreChartBanner from '@assets/image/200x200more_chart.webp'
import TextHeader from '@components/TextHeader'
import { ChartCard } from '@components/Card'

const MoreChart = () => {
    return (
        <div className="my-5 border-t border-t-1 border-slate-300 border-opacity-10">
            <TextHeader>Other Charts</TextHeader>
            <div className="container mx-auto before:snap-x flex overflow-x-auto px-5">
                <ChartCard
                    banner={MoreChartBanner}
                    title={'Top 200'}
                    category={'Philippines'}
                    description={
                        'Featuring songs from Mullage, SB19, Sam Smith & Kim Petras and more'
                    }
                />
                <ChartCard
                    banner={MoreChartBanner}
                    title={'Top 200'}
                    category={'Philippines'}
                    description={
                        'Featuring songs from Mullage, SB19, Sam Smith & Kim Petras and more'
                    }
                />
                <ChartCard
                    banner={MoreChartBanner}
                    title={'Top 50'}
                    category={'Moscow'}
                    description={
                        'Featuring songs from DJ Smash & NIVESTA, State TV Radio Symphony Orchestra of the USSR & Vladimir Fedoseyev, Markul & Тося Чайкина and more'
                    }
                />
            </div>
        </div>
    )
}

export default MoreChart
