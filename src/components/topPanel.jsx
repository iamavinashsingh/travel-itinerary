import React from 'react'

const topPanel = () => {
    const time = new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false
    });
    return (
    <div className='bg-background flex items-center justify-between'>
        <div className='font-bold dark:text-white'>{time}</div>
        <div className='flex items-center justify-center gap-2'>
            <img className='h-5 w-5 dark:invert dark:brightness-150 ' src="/sim.png" alt="" />
            <img className='h-5 w-5 dark:invert dark:brightness-150 ' src="/wi-fi.png" alt="" />
            <img className='h-5 w-5 dark:invert dark:brightness-150' src="/battery.png" alt="" />
        </div>
        
    </div>
    )
}

export default topPanel