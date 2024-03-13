import React from 'react'
import { Link } from 'react-router-dom'
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {

  return (
    <div className="text-white bg-gradient-to-t bg-orange-500 p-5 flex flex-col justify-center  items-center font-medium font-['Franklin_Gothic']">

        <div className="container">
            <div className='flex justify-around px-20 text-1xl'>
                   <div className="">
                     <p>Телефон:</p>
                     <p>+7 909 610-72-73</p>
                    </div> 
                   <div className="">
                     <p>Адрес:</p>
                     <p>г.ОРЕНБУРГ УЛ Транспортная 4</p>
                    </div> 
                   <div className="">
                     <p>Соцсети:</p>
                     <a className='items-center flex gap-2 hover:text-slate-800/50 transition-colors' href='https://t.me/sxrizx'><TelegramIcon/>  Телеграмм</a>
                    </div> 
            </div>
        </div>
    </div>
  )
}

export default Footer