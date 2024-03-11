import React from 'react'
import { IOrder } from '../../types/types'
import { formatDateFromIsoToLocal } from '../../helpers/date.helper'


interface IRow{
    order: IOrder
}

const OrdersTableRow = ({order}:IRow) => {
  return (
    <tr className="bg-gray-200 p-10 rounded-lg  border-b ">
 
    <td className="px-6 py-4 text-gray-900 text-base text-center">
        {order.car.title}

    </td>
    <td className="px-6 py-4 text-gray-900 text-base text-center">
        {order.adress}

    </td>
    <td className="px-6 py-4 text-gray-900 text-base text-center">
        {formatDateFromIsoToLocal(order.date)}
    </td>
    <td className="px-6 py-4 text-gray-900 text-base text-center">
        {order.status=='PENDING'?'В ожидании' : "Выполнен"}
    </td>
</tr>
  )
}

export default OrdersTableRow