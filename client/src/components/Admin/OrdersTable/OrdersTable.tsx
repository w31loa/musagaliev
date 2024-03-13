import React from 'react'
import { IOrder } from '../../../types/types'
import TableRow from './TableRow'

interface ITableProps{
  orders: IOrder[]
}



const OrdersTable = ({orders}:ITableProps) => {



  return (
    <div>
    <div className="relative overflow-x-auto">
        <div className="text-5xl text-center mb-20 mt-10 ">Список заказов</div>
        
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-20">
            <thead className="text-lg text-white uppercase   bg-gray-600">
                <tr>
               
                    <th scope="col" className="px-8 py-4 text-center">
                        ID
                    </th>
                    <th scope="col" className="px-8 py-4 text-center">
                        Номер телефона
                    </th>
                    <th scope="col" className="px-8 py-4 text-center">
                        Дата
                    </th>
                    <th scope="col" className="px-8 py-4 text-center">
                        Имя
                    </th>
                    <th scope="col" className="px-8 py-4 text-center">
                        Длительность
                    </th>
                    <th scope="col" className="px-8 py-4 text-center">
                        Адрес
                    </th>
                    <th scope="col" className="px-8 py-4 text-center">
                        Машина
                    </th>
                    <th scope="col" className="px-8 py-4 text-center">
                        Комментарий
                    </th>
                    <th scope="col" className="px-8 py-4 text-center">
                        Статус
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                  
                    orders.map((el,i)=> (
                        <TableRow order={el} key={i}/>
                    ) )
                   
                 
                        
                  
                }
            </tbody>
        </table>

      
    </div>
</div>
  )
}

export default OrdersTable