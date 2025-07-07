import React from 'react'

function Stripe({val}) {
  return (                                                                                       
    <div className='w-[20%] px-10 py-1 border-b-[1px] border-t-[1px] border-r-[1px]  border-zinc-700 text-center flex justify-between '>
      <img src={val.url} alt="" />
      <span className='font-semibold  '>{val.number}</span>
    </div>
  )
}

export default Stripe 