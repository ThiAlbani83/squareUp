import React from 'react'

function ReasonsCard({icon, title, description}) {
    return (
        <div className='p-[30px] lg:p-[60px] xl:p-[80px] flex flex-col gap-6 md:gap-16 border border-gray15'>
            <div className='flex items-center gap-[14px]'>
                {icon}
                <h4 className='font-barlow font-semibold text-white text-[16px] lg:text-[20px] xl:text-[24px] leading-[45px]'>{title}</h4>
            </div>
            <p className='text-gray90 text-[14px] leading-[32px] font-light font-barlow max-w-[400px] lg:max-w-[650px] xl:max-w-[480px]'>
                {description}
            </p>
        </div>
    )
}

export default ReasonsCard