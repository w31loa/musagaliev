import React from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { removeTokenFromLocalStorage } from '../helpers/localStorage.helper'
import { logout } from '../store/reducers/user.reducer'
import { useDispatch } from 'react-redux'
import { useAuth } from '../hooks/useAuth.hook'
import { useUser } from '../hooks/useUser.hook'

const Header = () => {

  const dispatch = useDispatch()

    const isAuth = useAuth()
    const user = useUser()
    const isAdmin = user?.role == 'ADMIN'


  return (
    <div className="text-white bg-orange-500 p-5 flex flex-col justify-center  items-center font-medium ">
        
        <div className="container">
            <nav className='flex justify-around px-20 text-2xl items-center'>
            <Link className='mb-3 text-3xl ' to={'/'}><span className='text-white'>Орен</span><span className='font-bold text-black'>EVO</span></Link>
                <Link className='hover:text-gray-500/50 transition-colors' to={'/'}>Главная</Link>
                <Link className='hover:text-gray-500/50 transition-colors' to={'/services'}>Услуги</Link>
                <Link className='hover:text-gray-500/50 transition-colors' to={'/comments'}>Отзывы</Link>
                <Link className='hover:text-gray-500/50 transition-colors' to={'/contacts'}>Контакты</Link>
                {
                  isAuth?<Link className='hover:text-gray-500/50 transition-colors' to={`/Profile/${user?.id}`}>Личный кабинет</Link>
                  :<Link className='hover:text-gray-500/50 transition-colors' to={'/Auth'}>Войти</Link>
                }
                
          
            </nav>
        </div>
    </div>
  )
}

export default Header