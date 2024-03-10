import React from 'react'
import OrdersTable from '../components/Profile/OrdersTable'
import { useAuth } from '../hooks/useAuth.hook'
import AuthForm from '../components/Profile/AuthForm'

const Profile = () => {

  const isAuth = useAuth()

  return (
    <div className='container mb-auto text-black mx-auto px-20'>
      {
        isAuth?<OrdersTable/>:<AuthForm/>
      }

  </div>
  )
}

export default Profile