import React from 'react'
import toast from 'react-hot-toast'
import { removeTokenFromLocalStorage } from '../../helpers/localStorage.helper'
import { logout } from '../../store/reducers/user.reducer'
import { useDispatch } from 'react-redux'
import { useAuth } from '../../hooks/useAuth.hook'

const OrdersTable = () => {

    const dispatch = useDispatch()    
    const isAuth = useAuth()

    const logoutHandler = ()=>{
        dispatch(logout())
        removeTokenFromLocalStorage('token')
        toast.success('You logged out!')
      }

    

  return (
    <div>
        <div className="relative overflow-x-auto">
            <div className="text-5xl text-center mb-20 mt-10 ">Ваши заказы</div>
            
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-20">
                <thead className="text-lg text-white uppercase  bg-amber-400">
                    <tr>
                        <th scope="col" className="px-8 py-4 text-center">
                            Тип 
                        </th>
                        <th scope="col" className="px-8 py-4 text-center">
                            Модель
                        </th>
                        <th scope="col" className="px-8 py-4 text-center">
                            Дата
                        </th>
                        <th scope="col" className="px-8 py-4 text-center">
                            Статус
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-200 p-10 rounded-lg  border-b ">
                        <th scope="row" className="px-6 py-4 font-medium text-base text-center text-gray-900 whitespace-nowrap ">
                            Эвакуатор
                        </th>
                        <td className="px-6 py-4 text-gray-900 text-base text-center">
                            Hyundai HD 78

                        </td>
                        <td className="px-6 py-4 text-gray-900 text-base text-center">
                            20.11.2024
                        </td>
                        <td className="px-6 py-4 text-gray-900 text-base text-center">
                            Завершен
                        </td>
                    </tr>
                </tbody>
            </table>

            {
                isAuth&& 
                <div className="flex justify-end">
                    <button onClick={logoutHandler} className='flex px-10 py-3 bg-red-300 rounded-md' >Выйти</button>
                </div>
            }
        </div>
    </div>
  )
}

export default OrdersTable