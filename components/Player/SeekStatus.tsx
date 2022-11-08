import React from 'react'
export interface ISeekProps {
    value: number
    max: number
    setSeekTime?: () => void
    apptime: number
    min: number
    onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SeekStatus: React.FC<ISeekProps> = ({
    value,
    max,
    setSeekTime,
    apptime,
    min,
    onInput,
}) => {
    const getTime = (time: number) =>
        `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`

    return (
        <div className="hidden md:flex lg:flex flex-row items-center justify-center flex-auto">
            <p className="text-white">
                {value === 0 ? '0:00' : getTime(value)}
            </p>
            <input
                type="range"
                step="any"
                value={value}
                min={min}
                max={max}
                onInput={onInput}
                className="md:block lg:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg cursor-pointer"
            />
            <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
        </div>
    )
}

export default SeekStatus
