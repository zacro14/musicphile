import React, { useState } from 'react'

const SeekStatus = () => {
    const [value, setvalue] = useState(20)
    const onInput = ({ target }: any) => {
        setvalue(target.value)
    }
    return (
        <div className="hidden sm:flex flex-row items-center justify-center flex-auto">
            <p className="text-white">{'0:00'}</p>
            <input
                type="range"
                step="any"
                value={value}
                min={0}
                max={90}
                onInput={(e) => onInput(e)}
                className="md:block lg:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg cursor-pointer"
            />
            <p className="text-white">{'0:00'}</p>
        </div>
    )
}

export default SeekStatus
