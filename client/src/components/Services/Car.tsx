import React, { FC } from 'react'
import { IMAGE_URL } from '../../api/axios.api'
import { useUser } from '../../hooks/useUser.hook'
import { MdEdit } from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'

const Car:FC<any> = ({type, title , text , id , price , img , setCarId}) => {

  const user = useUser()
  const isAdmin = user?.role=="ADMIN" 

  const click = ()=>{
    setCarId(id)
    // console.log(id)
  }

  return (
    <li className='mb-10 max-w-[30%] relative'>
    
        <input type="radio" id={type+id} name="hosting" value={id} className="hidden peer" onChange={click} required />
        <label htmlFor={type+id} 
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-slate-300 border border-gray-200 rounded-lg cursor-pointer peer-checked:text-white peer-checked:bg-amber-400 hover:text-gray-600 hover:bg-gray-10">                           
            <div className="block">
                <div className="w-full text-center text-xl font-semibold">{title}</div>
                <img src={IMAGE_URL+img}  className='rounded-md my-5' alt="" />
                <div className="w-full border-b-2 pb-2 ">{text}</div>
                <div className="font-bold text-lg pt-2">Цена в час: <span>{price}</span> ₽</div>
            </div>
        </label>
    </li>
  )
}

export default Car