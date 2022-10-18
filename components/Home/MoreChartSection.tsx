import ChartCard from '@components/Card/ChartCard'
import React from 'react'
import MoreChartBanner from '@assets/image/200x200more_chart.webp'

const MoreChart = () => {
    return (
        <div className="container mx-auto py-5 snap-x flex overflow-x-auto px-5 gap-x-5 my-5">
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
    )
}

export default MoreChart
