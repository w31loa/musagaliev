import React from 'react'
import OrdersTable from '../components/Profile/OrdersTable'
import { useAuth } from '../hooks/useAuth.hook'
import AuthForm from '../components/Profile/AuthForm'
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom'
import { instance } from '../api/axios.api'
import { useUser } from '../hooks/useUser.hook'
import { ICar, IOrder } from '../types/types'
import { removeTokenFromLocalStorage } from '../helpers/localStorage.helper'
import { logout } from '../store/reducers/user.reducer'
import { useDispatch } from 'react-redux'





export const ordersLoader = async({params}:any)=>{
  const {data} = await instance.get(`/request/${params.id}`)

  return data 
}

const Profile = () => {

  const dispatch = useDispatch()
const navigate = useNavigate()

const logoutHandler = ()=>{
  dispatch(logout())
  removeTokenFromLocalStorage('token')
  
  navigate('/auth')
}


  const user = useUser()
  const isAdmin = user?.role=="ADMIN"  
  
  
  const isAuth = useAuth()

  const orders = useLoaderData() as IOrder[]


  return (
    <div className='container mb-auto text-black mx-auto px-20'>
      {
       !isAdmin?<OrdersTable orders={orders}/>
       : <div className=" flex flex-col pt-14 gap-10 items-center justify-center font-bold text-xl text-gray-700">
            <NavLink className=' text-center px-10 py-5 bg-green-400 rounded-md w-1/2 hover:bg-green-300 transition-colors' to={'/admin'}>Просмотр заявок</NavLink>
            <NavLink className='text-center px-10 py-5 bg-orange-400 rounded-md w-1/2 hover:bg-orange-300 transition-colors' to={'/redact'}>Редактирование данных</NavLink>
            <NavLink className='text-center px-10 py-5 bg-orange-400 rounded-md w-1/2 hover:bg-orange-300 transition-colors' to={'/admin-comments'}>Отзывы</NavLink>
            <button onClick={logoutHandler} className='   px-10 py-5 bg-red-300 rounded-md w-1/2 hover:bg-red-200 transition-colors' >Выйти</button>

       </div>
      } 

  </div>
  )
}

export default Profile