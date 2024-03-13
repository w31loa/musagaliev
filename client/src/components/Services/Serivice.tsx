import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ModalContext } from '../../context/modal.context';
import { useAuth } from '../../hooks/useAuth.hook';
import { ICar, IType } from '../../types/types';
import Car from './Car'
import { IoMdAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import toast from 'react-hot-toast';
import OrderForm from '../Order/OrderForm';
import Modal from '../Modal';

import { MdEdit } from "react-icons/md";
import { useUser } from '../../hooks/useUser.hook';

export interface ICarsProps{
  title: string
  cars: ICar[]
  setCarId: any
}

const Serivice = ({title , cars,  setCarId}:ICarsProps) => {



  const isAuth = useAuth()
  const user = useUser()
  const isAdmin = user?.role=="ADMIN" 

  const {modal, close, open} = useContext(ModalContext)




  const openModalHandler = () => open()
  
  const сloseModalHandler = () => close()


    

  return (
    <div className="bg-gray-200 p-10 rounded-lg mb-20 relative">
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
      } type="submit"  className="mt-8 focus:outline-none text-white bg-orange-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-3xl px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Заказать</button>
   
  </div>


      
  )
}

export default Serivice