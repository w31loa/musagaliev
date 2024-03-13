import { useLoaderData } from "react-router-dom"
import { instance } from "../api/axios.api"
import Serivice from "../components/Services/Serivice"
import { IType } from "../types/types"
import { useContext, useState } from "react"
import { ModalContext } from "../context/modal.context"
import { useAuth } from "../hooks/useAuth.hook"
import { IoMdAdd } from "react-icons/io";
import { useUser } from "../hooks/useUser.hook"
import OrderForm from "../components/Order/OrderForm"
import Modal from "../components/Modal"
import ServiceForm from "../components/Admin/Redact/ServiceForm"


export const servicesLoader = async()=>{
  const {data} = await instance.get('/type')
  return data 
}

const Services = () => {

  const {modal, close, open} = useContext(ModalContext)




  const openModalHandler = () => open()
  
  const сloseModalHandler = () => close()

  const user = useUser()
  const isAdmin = user?.role=="ADMIN" 
  const[isEdit , setIsEdit] = useState(false)
  const[carId , setCarId] = useState(0)

  const data = useLoaderData() as IType[]
  
  const[isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='container m-auto text-black'>
      <div className="flex justify-center items-center gap-10">
       <div className="text-5xl text-center mb-10 mt-10 ">Наши услуги:</div>

      </div>
    
        <div className="  ">
            {
              data.map((el,i)=> (
                <Serivice title={el.title} cars={el.cars} key={i} setCarId={setCarId}/>
              ))
            }
        </div>


             
       
        
        {
        modal&&carId&&
                <Modal title='Оформление заказа' onClose={сloseModalHandler}>
                    <OrderForm carId={carId}/>
                </Modal>
      }
    </div>





  )
}

export default Services