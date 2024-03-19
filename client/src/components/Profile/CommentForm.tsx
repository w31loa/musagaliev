import React, { useState } from 'react'
import { IOrder } from '../../types/types'
import { instance } from '../../api/axios.api'
import toast from 'react-hot-toast'

interface Iprop{
    order?: IOrder
}

const CommentForm = ({order}:Iprop) => {

    const [text,setText] = useState('')

    const sendHandler = ()=>{
        
        const data = {
            requestId: order?.id ,
            text: text
        }

        instance.post('comment', data).then(()=>{
            toast.success("Отзыв отправлен")
        })
    }

  return (
    <div className='flex w-full justify-between  mb-auto'>

                <form className="w-full mx-auto" onSubmit={sendHandler} >
                    
                    <div className="mb-5">    
                <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900 "></label>
                <textarea  onChange={(e)=>{setText(e.target.value)}} 
                  rows={5} 
                  required
                  className="py-5 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="Что хотите сказать?" name="postContent" />
                    
                  </div>


                        <div className="flex justify-center mt-5">
                
             
                

                        <div className=" flex flex-col gap-3">
                            <button type="submit" className="px-10 py-3 bg-orange-400 rounded-md text-center text-lg hover:bg-amber-300  transition-colors" >Отправить</button>

                        </div>
                        
                    
                    </div>
                
            
                    </form>

        </div>

  )
}

export default CommentForm