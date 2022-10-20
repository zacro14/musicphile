import React, { useState } from 'react'

const SeekStatusMobile = () => {
    const [value, setvalue] = useState(20)
    const onInput = ({ target }: any) => {
        setvalue(target.value)
    }
    return (
        <div>
            <input
                type="range"
                step="any"
                value={value}
                min={0}
                max={90}
                onInput={(e) => onInput(e)}
                className="h-1 2xl:mx-6 rounded-lg cursor-pointer absolute top-0 left-0 translate-y-[1px] p-0 w-full -order-1 md:hidden lg:hidden"
            />
        </div>
    )
}

export default SeekStatusMobile
