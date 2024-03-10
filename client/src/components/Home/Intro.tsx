import React from 'react'

const Intro = () => {
  return (
    <div className="bg-[url('/promo.jpg')] w-full h-[100vh] bg-cover flex justify-start items-center">
        <div className="p-10 bg-yellow-400 max-h-fit text-7xl font-thin">
                    <div className="">Перевозим: <br/>
                    <span className='ml-64'>любой транспорт,</span><br/>    
                    <span className='ml-64'>в любое место!</span></div>
        </div>
    </div>
  )
}

export default Intro