import React from 'react'
import Comment from '../components/Comment/Comment'
import { instance } from '../api/axios.api'
import { useLoaderData } from 'react-router-dom'
import { IComment } from '../types/types'


export const commentLoader = async ()=>{
    const {data} = await instance.get('/comment')
    return data
}

const Comments = () => {

    const comments = useLoaderData() as IComment[]


  return (
    <div className='mb-auto container mx-auto ' >
       <div className="text-5xl text-center mb-10 mt-10 text-black">Отзывы клиентов:</div>


        <div className="flex justify-around gap-5 flex-wrap">
        {   
            
            comments.map((comment, i)=>(
                <Comment comment={comment} key={i}/>
            ))
        }
        </div>
   
    </div>
  )
}

export default Comments