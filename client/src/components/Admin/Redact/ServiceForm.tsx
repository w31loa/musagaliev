import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { IoMdAdd } from 'react-icons/io'
import { instance } from '../../../api/axios.api'

interface Props{
    service?: {
        id:number
        title: string
    }
    isEdit: boolean
}

const ServiceForm = ({service, isEdit }:Props) => {

    const [title,setTitle] = useState(isEdit?service?.title:'')


    
    const addHandler = (e)=>{
        const data = {
            title: title,
        }

        instance.post('type', data)
        toast.success('Услуга добавлена')
    }

    const updHandler = (e)=>{
        const data = {
            title: title,
        }

        instance.patch(`type/${service?.id}`, data)
        toast.success('Услуга изменена')
    }

 

  return (
    <div className="">
        <form onSubmit={isEdit?updHandler:addHandler} className='bg-white'>
            <div className="mb-5">    
                    <label htmlFor="email" className="block    mb-2 text-xl font-medium text-gray-900" >Название</label>
                    <input
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }}
                    value={title}
                    type="text" id="text" className= " py-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10"  required />
                </div>   
                <button className="flex w-full justify-center p-2 bg-green-400 rounded-md"  ><span>{isEdit?"Изменть":"Добавить"}</span><IoMdAdd className="text-2xl  text-center" /></button>
        </form>
    </div>

  )
}

export default ServiceForm