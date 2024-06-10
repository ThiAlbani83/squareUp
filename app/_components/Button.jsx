import React from 'react'

function Button({title, primary}) {
  return (
   <button className={` ${!primary ? "bg-gray15 w-full text-white" : "bg-green50 text-gray10 font-semibold w-[250px]"} text-[14px] leading-[24px] font-barlow px-[50px] py-[14px] rounded-[6px]`}>
        {title}
   </button>
  )
}

export default Button