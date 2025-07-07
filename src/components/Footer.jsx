import React from 'react'

function Footer() {
  return (
    <div className='max-w-screen-xl mx-auto py-32 flex gap-[10vw]'>
      <div className='font-semibold text-[10vw]'>
          <h1>refokus.</h1>
      </div>
      <div >
        <h1 className='mb-14 leading-6'>Social</h1>
        <h1>Instagram</h1>
        <h1>Twitter</h1>
        <h1>Facebook</h1>
      </div>
      <div>
        <h1 className='mb-14'>Sitemap</h1>
        <h1>Home</h1>
        <h1>Work</h1>
        <h1>Carrier</h1>
        <h1>Contact</h1>
      </div>
      <div className='flex flex-col items-center '><p className='mb-[10vw]'>Refokus is pioneering digital agency driven by design and empowered by technology.</p>
      <img className='bg-blue-500 p-2' src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
</div>
    </div>
  )
}

export default Footer