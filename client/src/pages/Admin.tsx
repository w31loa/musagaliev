import React from 'react'
import { useUser } from '../hooks/useUser.hook'
import { instance } from '../api/axios.api'
import { useLoaderData } from 'react-router-dom'
import OrdersTable from '../components/Admin/OrdersTable/OrdersTable'
import { IOrder } from '../types/types'


export const adminLoader = async ()=>{
    const {data} = await instance.get('/request')
    return data
}

const Admin = () => {

    const orders = useLoaderData() as IOrder[]

    const user = useUser()
    const isAdmin = user?.role=='ADMIN'
  return (
    <div className='text-black my-auto'>

        {
            isAdmin? <div className=" mb-[400px]">

                <OrdersTable orders={orders}/>
             
            </div>
            : <div className="text-9xl text-center text-red-600">Вам нельзя тут находиться)</div>
        }


    </div>
  )
}

export default Admin