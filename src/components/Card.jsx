import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Card({width,start,para,hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff",padding:"25px"}} className={`gap-5 bg-zinc-800 p-5 rounded-xl  ${width} min-h-[30rem] flex flex-col justify-between`}>
        <div w-full>
            <div className='w-full flex justify-between items-center text-white'>
                <h1>Up Next:News </h1>
                <FaArrowRight /></div>
                <div className='mt-2 text-3xl font-medium'><h1>Insight and behind the scenes</h1></div>
            </div>
            <div className='downelem w-full mt-60'>
              {
                start && (
                  <>
                <h1 className='text-6xl  font-medium tracking-tight leading-none'>Start Project</h1>
                  <button className='rounded-full mt-5 border-2 border-zinc px-5 py-2'><a href="https://www.refokus.com/about">Contact us</a></button>
                  </>)
              }
                {
                para && (<>
                  <p className='text-1xl  font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </>)
                }
            </div>
    </motion.div>
  )
}

export default Card