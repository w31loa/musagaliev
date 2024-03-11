import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ModalContext } from '../../context/modal.context';
import { useAuth } from '../../hooks/useAuth.hook';
import { ICar, IType } from '../../types/types';
import Car from './Car'

import toast from 'react-hot-toast';
import OrderForm from '../Order/OrderForm';
import Modal from '../Modal';

export interface ICarsProps{
  title: string
  cars: ICar[]
}

const Serivice = ({title , cars}:ICarsProps) => {


  const [carId, setCarId] = useState()

  const isAuth = useAuth()

  const {modal, close, open} = useContext(ModalContext)



  const openModalHandler = () => open()
  
  const сloseModalHandler = () => close()


    

  return (
    <div className="bg-gray-200 p-10 rounded-lg mb-20">
    <div className="text-4xl mb-3">{title}</div>
      <ul className=" w-full flex  flex-wrap justify-between">

        {
          cars.map((el,i)=> (
            
            <Car title={el.title} text={el.description} key={i} id={el.id} type={title} price={el.price} img={el.img} setCarId={setCarId}/>
          )) 
        }
           
      
      </ul>

    <button onClick={()=>{
        openModalHandler()

      }
      } type="submit" className="mt-8 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Заказать</button>
     {
        modal&&carId&&
                <Modal title='Оформление заказа' onClose={сloseModalHandler}>
                    <OrderForm carId={carId}/>
                </Modal>
      }
  </div>


      
  )
}

export default Serivice