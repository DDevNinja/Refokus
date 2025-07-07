import React from 'react'
import { IoIosReturnRight } from "react-icons/io";/*it is import from react icon website*/
// here we accept the title
function Button({title="Get Started"})  {
  return (
    <div className='py-2 px-3 min-w-40 flex justify-center text-sm gap-5 items-center rounded-full bg-white text-black'>
        <span className='font-semibold'>{title}</span>
       <IoIosReturnRight /> 
    </div>
     /*this is used from react icon web */
  )
}

export default Button