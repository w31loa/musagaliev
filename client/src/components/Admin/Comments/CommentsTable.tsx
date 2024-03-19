import React from 'react'
import CommentTableRow from './CommentTableRow'
import { instance } from '../../../api/axios.api'
import { useLoaderData } from 'react-router-dom'
import { IComment } from '../../../types/types'
import { TiDeleteOutline } from 'react-icons/ti'


export const allCommentsLoader = async ()=>{
    const {data} = await instance.get('/comment/all')
    return data
}

const CommentsTable = () => {


    const comments = useLoaderData() as IComment[]

    return (
        <div>
        <div className="relative overflow-x-auto">
            <div className="text-5xl text-center mb-20 mt-10 ">Список заказов</div>
            
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-20">
                <thead className="text-lg text-white uppercase   bg-gray-600">
                    <tr>
                   
                        <th scope="col" className="px-8 py-4 text-center">
                            Имя
                        </th>
                        <th scope="col" className="px-8 py-4 text-center">
                            Текст
                        </th>
                        <th scope="col" className="px-8 py-4 text-center">
                            Услуга
                        </th>
                        <th scope="col" className="px-8 py-4 text-center">
                            Техника
                        </th>
                        <th scope="col" className="px-8 py-4 text-center">
                            Статус
                        </th>
                        <th scope="col" className="px-8 py-4 text-center">
                        
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                      
                      comments.map((comment,i)=> (
                            <CommentTableRow comment={comment} key={i}/>
                        ) )
                       
                     
                            
                      
                    }
                </tbody>
            </table>
    
          
        </div>
    </div>
)
}

export default CommentsTable