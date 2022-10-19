import React from 'react'

const SeekStatus = () => {
    return (
        <div className="hidden sm:flex flex-row items-center justify-center flex-auto">
            <p className="text-white">{'0:00'}</p>
            <input
                type="range"
                step="any"
                value={''}
                min={0}
                max={'90'}
                //  onInput={onInput}
                className="md:block w-24 md:w-56 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg cursor-pointer"
            />
            <p className="text-white">{'0:00'}</p>
        </div>
    )
}

export default SeekStatus
