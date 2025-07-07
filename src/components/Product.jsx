import React from 'react'
import Button from './Button'

function Product({val,mover,count,hover}) {
    
  return (
    <div className='w-full h-[18rem] py-16 text-white '>
        <div onMouseEnter={()=>{mover(count)}} className={`max-w-screen-xl mx-auto py-8 flex items-center justify-between hover:bg-[#7443ff] transition duration-500  rounded-xl`}>
            <h1 className='text-6xl font-medium'>{val.name}</h1>
            <div className='w-1/3 '>
                <p className='mb-7'>{val.desc}</p>
                <div className='flex gap-5'>
                    {val.live && <Button title="live Website"/>}
                    {val.case && <Button title="Case Study"/>}
                </div>
                
            </div>
        </div>
    </div>
  )
}
 
export default Product