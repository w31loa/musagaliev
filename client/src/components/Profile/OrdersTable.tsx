import React from 'react'
import toast from 'react-hot-toast'
import { removeTokenFromLocalStorage } from '../../helpers/localStorage.helper'
import { logout } from '../../store/reducers/user.reducer'
import { useDispatch } from 'react-redux'
import { useAuth } from '../../hooks/useAuth.hook'
import { instance } from '../../api/axios.api'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/useUser.hook'
import { IOrder } from '../../types/types'
import OrdersTableRow from './OrdersTableRow'


interface ITableProps{
    orders: IOrder[]
}


const OrdersTable = ({orders}:ITableProps) => {


    const user = useUser()
    const dispatch = useDispatch()    
    const isAuth = useAuth()
    const navigate = useNavigate()

    console.log()

    const logoutHandler = ()=>{
        dispatch(logout())
        removeTokenFromLocalStorage('token')
        
        navigate('/auth')
      }

    

  return (
    <div>
        <div className="relative overflow-x-auto">
            <div className="text-5xl text-center mb-20 mt-10 ">История заказов</div>
            
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-20">
                <thead className="text-lg text-white uppercase  bg-gray-600">
                    <tr>
                   
                        <th scope="col" className="px-8 py-4 text-center">
                            Модель
                        </th>
                        <th scope="col" className="px-8 py-4 text-center">
                            Адрес
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
                    {
                        orders.length?orders.map((el,i)=> (
                            <OrdersTableRow order={el} key={i}/>
                        ) )
                        :<OrdersTableRow/>
                    }
                </tbody>
            </table>

            {
                isAuth&& 
                <div className="mb-20 flex justify-end">
                    <button onClick={logoutHandler} className='flex px-10 py-3 bg-red-300 rounded-md' >Выйти</button>
                </div>
            }
        </div>
    </div>
  )
}

export default OrdersTable