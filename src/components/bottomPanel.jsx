import React from 'react'

const bottomPanel = () => {
    return (
    <div className='bg-[#F3F1F1] dark:bg-[#1d1f24] flex items-center justify-between px-4 py-4 fixed bottom-0 left-0 right-0'>
        <i className="ri-home-4-line scale-150 rounded-full w-7 h-7 flex justify-center items-center bg-[#c2cdff] text-[#313ddf] 
                    dark:text-[#D3F462] dark:bg-[#414431]"></i>
        <i className="ri-search-line scale-150 rounded-full w-7 h-7 flex justify-center items-center text-[#676d75] hover:text-[#313ddf] hover:bg-[#c2cdff] 
                    hover:dark:text-[#D3F462] hover:dark:bg-[#414431]"></i>
        <i className="ri-add-large-fill scale-150 rounded-full w-7 h-7 flex justify-center items-center text-[#313ddf] font-extrabold hover:bg-[#c2cdff]
                    dark:text-[#D3F462] hover:dark:bg-[#414431]"></i>
        <i className="ri-heart-line scale-150 rounded-full w-7 h-7 flex justify-center items-center text-[#676d75] hover:text-[#313ddf] hover:bg-[#c2cdff]
                    hover:dark:text-[#D3F462] hover:dark:bg-[#414431]"></i>
        <i className="ri-user-3-line scale-150 rounded-full w-7 h-7 flex justify-center items-center text-[#676d75] hover:text-[#313ddf] hover:bg-[#c2cdff]
                    hover:dark:text-[#D3F462] hover:dark:bg-[#414431]"></i>
    </div>
    )
}

export default bottomPanel