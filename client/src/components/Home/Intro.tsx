import React from 'react'

const Intro = () => {
  return (
    <div className=" w-full h-[100vh] bg-cover flex justify-start items-center">
        <img src="intro.webp" className='absolute w-full top-[88px] blur-sm -z-10' alt="" />
        <div className="p-10  max-h-fit bg-slate-700/50  text-7xl font-thin text-white rounded-md">
                    <div className="">Перевозим: <br/>
                    <span className='ml-64'>любой транспорт,</span><br/>    
                    <span className='ml-64'>в любое место!</span></div>
        </div>
    </div>
  )
}

export default Intro
