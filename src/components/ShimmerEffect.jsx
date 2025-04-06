import React from 'react'
export default function ShimmerEffect() {
    return (
        <div className='w-full 2xl:w-[80%] min-h-[500px] p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  py-[50px] '>
            {Array.from({ length: 10 }).map((el, index) =>
            (
                <div key={index}
                    className={`bg-gray-100 sm:w-[95%] rounded-2xl  h-[400px]
                                ${index === 0 || index === 4 ? 'row-span-1 sm:row-span-2 h-[400px] sm:h-full' :
                            'h-[400px] md:h-[500px] lg:h-[550px]'}`}>
                </div>
            )
            )
            }
        </div>

    )
}
