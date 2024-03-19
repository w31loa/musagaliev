import React, { useState } from 'react'
import { IComment } from '../../../types/types'
import toast from 'react-hot-toast'
import { instance } from '../../../api/axios.api'
import { formatDateFromIsoToLocal } from '../../../helpers/date.helper'
import { TiDeleteOutline } from 'react-icons/ti'

interface Iprop{
    comment: IComment
}

const CommentTableRow = ({comment}:Iprop) => {
    const [status, setStatus] = useState(comment.isPublished)
    const [deleted , setDeleted] = useState(false)
    console.log(comment)

    const doneBtnHandler = ()=>{
        instance.patch(`/comment/${comment.id}`)
        setStatus(true)
        toast.success('Отзыв опубликован')
    }

    const deleteHandler = ()=>{
        instance.delete(`/comment/${comment.id}`)
        setDeleted(true)
        toast.success('Отзыв удален')
        
    }


  return (

    <tr className={deleted?'hidden': "bg-gray-200 p-10 rounded-lg  border-b-2 border-slate-300 "} >
 
   
        <td className="px-6 py-4 text-gray-900 text-base text-center">
            {comment.request.name}

        </td>
        <td className="px-6 py-4 text-gray-900 text-base text-center">
            {comment.text}

        </td>
        <td className="px-6 py-4 text-gray-900 text-base text-center">
            {comment.request.car.type.title}

        </td>
        <td className="px-6 py-4 text-gray-900 text-base text-center">
            {comment.request.car.title}

        </td>
        <td className="px-6 py-4 text-gray-900 text-base text-center">
            {status?
                <>
                    Опубликован
                </>
            :
                <>
                    <button onClick={doneBtnHandler} className='bg-green-500 p-2 rounded-md'>Опубликовать</button>
                </>
            }    

        </td>
        <td>
            <button onClick={deleteHandler} className="text-3xl hover:text-red-300 transition-colors" ><TiDeleteOutline /></button>
        </td>
    
        {/* <td className="px-6 py-4 text-gray-900 text-base text-center">
            {status=='PENDING'?<button onClick={doneBtnHandler} className='bg-green-500 p-2 rounded-md'>Завершить</button> : "Выполнен"}
        </td> */}
    </tr>

   
  )
}

export default CommentTableRow