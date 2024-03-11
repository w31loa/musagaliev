import React from 'react'
import OrdersTable from '../components/Profile/OrdersTable'
import { useAuth } from '../hooks/useAuth.hook'
import AuthForm from '../components/Profile/AuthForm'
import { useLoaderData } from 'react-router-dom'
import { instance } from '../api/axios.api'
import { useUser } from '../hooks/useUser.hook'
import { ICar, IOrder } from '../types/types'





export const ordersLoader = async({params}:any)=>{
  const {data} = await instance.get(`/request/${params.id}`)

  return data 
}

const Profile = () => {

  
  
  
  const isAuth = useAuth()

  const orders = useLoaderData() as IOrder[]


  return (
    <div className='container mb-auto text-black mx-auto px-20'>
      {
        isAuth&&<OrdersTable orders={orders}/>
      }

  </div>
  )
}

export default Profile