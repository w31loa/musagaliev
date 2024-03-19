import React, { useContext, useState } from 'react'
import { ICar, IType } from '../../../types/types'
import { FaRegTrashAlt } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import { instance } from '../../../api/axios.api'
import toast from 'react-hot-toast'
import { ModalContext } from '../../../context/modal.context'

interface Iprop{
    car:ICar
    
    setIsCar?:any
    setIsEdit?:any
    setCarToEdit?: any
}

const RedactCar = ({car , setIsCar,  setIsEdit , setCarToEdit}:Iprop ) => {


  const {modal, close, open} = useContext(ModalContext)
  const openModalHandler = () => open()
  const сloseModalHandler = () => close()


  const [deleted, setdeleted] = useState(false)

  const deleteHandler = (e)=>{
    

    instance.delete(`car/${car.id}`)
    toast.success('Техника удалена')
    setdeleted(true)
  }

  const editHandler = (e)=>{
    setIsEdit(true)
    setIsCar(true)
    setCarToEdit(car) 
    open()
  }

  return (
    <div className={deleted?'hidden':'text-black flex justify-between w-1/3 items-center bg-gray-300 py-3 px-5 rounded-md hover:bg-gray-400'}>
    <div className="text-black text-xl"> {car.title}</div>
    <div className=" flex">
        <button onClick={editHandler} className="w-full flex gap-2 p-2 items-center  rounded-md"><MdEdit className="text-xl  text-center" /></button>
        <button onClick={deleteHandler}  className="w-fit flex py-2 px-4 gap-2 items-center rounded-md"><FaRegTrashAlt className="text-xl  text-center" /></button>
    </div>

</div>
  )
}

export default RedactCar