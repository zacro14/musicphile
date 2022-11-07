import React from 'react'
import { ISeekProps } from './SeekStatus'

const SeekStatusMobile = (props: ISeekProps) => {
    const { value, min, max, onInput } = props
    return (
        <div>
            <input
                type="range"
                step="any"
                value={value}
                min={min}
                max={max}
                onInput={onInput}
                className="h-1 2xl:mx-6 rounded-lg cursor-pointer absolute top-0 -left-1 -right-0 translate-y-[1px] p-0 w-full -order-1 md:hidden lg:hidden"
            />
        </div>
    )
}

export default SeekStatusMobile
