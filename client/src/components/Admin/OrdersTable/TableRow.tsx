import React, { useState } from 'react'
import { formatDateFromIsoToLocal } from '../../../helpers/date.helper'
import { IOrder } from '../../../types/types'
import { instance } from '../../../api/axios.api'
import toast from 'react-hot-toast'



interface IRow{
    order?: IOrder
}


const TableRow = ({order}:IRow) => {

    const [status, setStatus] = useState(order?.status)

    const doneBtnHandler = ()=>{
        instance.patch(`/request/${order?.id}`, {status:'DONE'})
        setStatus("DONE")
        toast.success(`Заказ ${order?.id} завершен`)
    }


  return (
    <tr className="bg-gray-200 p-10 rounded-lg  border-b-2 border-slate-300 ">
 
        <td className="px-6 py-4 text-gray-900 text-base text-center">
            {order?.id}

        </td>
        <td className="px-6 py-4 text-gray-900 text-base text-center">
            {order?.phoneNumber}

        </td>
        <td className="px-6 py-4 text-gray-900 text-base text-center">
            {order?formatDateFromIsoToLocal(order?.date):<></>}

        </td>
        <td className="px-6 py-4 text-gray-900 text-base text-center">
            {order?.name}

        </td>
        <td className="px-6 py-4 text-gray-900 text-base text-center">
            {order?.duraction}ч.

        </td>
        <td className="px-6 py-4 text-gray-900 text-base text-center">
            {order?.adress}

        </td>
        <td className="px-6 py-4 text-gray-900 text-base text-center">
            {order?.car.title}

        </td>
        <td className="px-6 py-4 text-gray-900 text-base  max-w-96 text-left">
            {order?.description}

        </td>
    
        <td className="px-6 py-4 text-gray-900 text-base text-center">
            {status=='PENDING'?<button onClick={doneBtnHandler} className='bg-green-500 p-2 rounded-md'>Завершить</button> : "Выполнен"}
        </td>
    </tr>
  )
}

export default TableRow