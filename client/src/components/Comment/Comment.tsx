import React from 'react'
import { IComment } from '../../types/types'

interface Iprop{
    comment: IComment
}

const Comment = ({comment}: Iprop) => {
  return (
    <div className='text-black w-[40%]  flex border border-gray-400 bg-gray-200 p-5 mb-7'   >
            <div className="mr-5">
                <div className="w-fit mb-2 text-orange-400 font-bold text-xl">{comment.request.name}</div>
                <div className="flex flex-col  text-sm ">
                    <div className="text-gray-500 mb-2">
                        <div className="">Услуга:</div>
                        {/* <div className="">{comment.request.car.type.title}</div> */}
                        {comment.request.car?.type?.title?comment.request.car.type.title: <div className="text-red-400">Услуга больше не предоставляется</div> }

                    </div>
                    <div className="text-gray-500">
                        <div className="">Техника:</div> 
                        {/* <div className="">{comment.request.car.title}</div> */}
                            {comment.request.car?.title?comment.request.car.title: <div className="text-red-400">Техника больше не используется</div> }

                    </div>
                </div>
                
            </div>
           
            <div className="">
            {
                comment.text
            }
            </div>
    </div>
  )
}

export default Comment