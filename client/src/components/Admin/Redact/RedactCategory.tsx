import React, { useContext, useState } from 'react'
import { IType } from '../../../types/types'
import { FaRegTrashAlt } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import toast from 'react-hot-toast'
import { instance } from '../../../api/axios.api'
import Modal from '../../Modal'
import { ModalContext } from '../../../context/modal.context'
import ServiceForm from './ServiceForm'

interface Iprop{
    type:IType
    setIsCar?:any
    setIsEdit?:any
    setTypeToEtid?: any
}

const RedactCategory = ({type , setIsCar,  setIsEdit , setTypeToEtid}:Iprop) => {

  
  const {modal, close, open} = useContext(ModalContext)
  const openModalHandler = () => open()
  const сloseModalHandler = () => close()


  const [deleted, setdeleted] = useState(false)

  const deleteHandler = (e)=>{
    instance.delete(`type/${type.id}`)
    setdeleted(true)
    toast.success('Услуга удалена')
  }


  const editHandler = (e)=>{
    setIsEdit(true)
    setIsCar(false)
    setTypeToEtid(type)
    open()
  }

  return (
    <div className={deleted?'hidden':'text-black flex justify-between w-1/3 items-center bg-gray-300 py-3 px-5 rounded-md hover:bg-gray-400'}>
        <div className="text-black text-xl"> {type.title}</div>
        <div className=" flex">
            <button onClick={editHandler} className="w-full flex gap-2 p-2 items-center  rounded-md"><MdEdit className="text-xl  text-center" /></button>
            <button onClick={deleteHandler} className="w-fit flex py-2 px-4 gap-2 items-center rounded-md"><FaRegTrashAlt className="text-xl  text-center" /></button>
        </div>
 

    
    </div>
  )
}

export default RedactCategory


