import React from 'react'

const Banner = ({ title, bgImage }) => {
  return (
    <div className='bg-zinc-400 h-[50vh] mt-25 flex justify-center items-center relative'
    style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", // ya "cover" apki need k hisaab se
          }}>
      <h2 className='text-zinc-800 text-5xl bg-white p-5 rounded-xl font-bold z-10'>{title}</h2>
      <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}

export default Banner
