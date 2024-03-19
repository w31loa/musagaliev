import React, { useContext } from 'react'
import { IOrder } from '../../types/types'
import { formatDateFromIsoToLocal } from '../../helpers/date.helper'
import { ModalContext } from '../../context/modal.context'
import OrderForm from '../Order/OrderForm'
import CommentForm from './CommentForm'
import Modal from '../Modal'


interface IRow{
    order?: IOrder
}

const OrdersTableRow = ({order}:IRow) => {
    console.log(order)
    const {modal, close, open} = useContext(ModalContext)
    const openModalHandler = () => open() 
    const сloseModalHandler = () => close()

  return (
    <tr className="bg-gray-200 p-10 rounded-lg  border-b ">
 
    <td className="px-6 py-4 text-gray-900 text-base text-center">
        {order?.car?.title?order?.car?.title: <div className="text-red-400">Техника больше не используется</div> }


    </td>
    <td className="px-6 py-4 text-gray-900 text-base text-center">
        {order?.adress}

    </td>
    <td className="px-6 py-4 text-gray-900 text-base text-center">
        {order&&formatDateFromIsoToLocal(order?.date)}
    </td>
    <td className="px-6 py-4 text-gray-900 text-base text-center">
        {order?order?.status=='PENDING'?'В ожидании' : 
            order.comment?
            'Отзыв оставлен'
            
            :<button onClick={open} className='bg-orange-400 text-white p-2 rounded-md '>Оставить отзыв</button>
            
            :''
        }
    </td>

        {
          modal&&
                  <Modal title='Отзыв' onClose={сloseModalHandler}>
                      <CommentForm order={order}/>
                  </Modal>
        }

    
</tr>
  )
}

export default OrdersTableRow