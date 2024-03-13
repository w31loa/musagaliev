import React from 'react'
import { IType } from '../../../types/types'
import { FaRegTrashAlt } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'

interface Iprop{
    type:IType
}

const RedactCategory = ({type}:Iprop) => {
  return (
    <div className='text-black flex justify-between w-1/3 items-center bg-gray-300 py-3 px-5 rounded-md hover:bg-gray-400'>
        <div className="text-black text-xl"> {type.title}</div>
        <div className=" flex">
            <button className="w-full flex gap-2 p-2 items-center  rounded-md"><MdEdit className="text-xl  text-center" /></button>
            <button className="w-fit flex py-2 px-4 gap-2 items-center rounded-md"><FaRegTrashAlt className="text-xl  text-center" /></button>
        </div>
 
    </div>
  )
}

export default RedactCategory


