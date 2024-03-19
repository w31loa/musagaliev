import React, { useContext, useEffect, useState } from 'react'
import { ICar, IType } from '../types/types'
import { instance } from '../api/axios.api'
import { ModalContext } from '../context/modal.context'
import RedactCategory from '../components/Admin/Redact/RedactCategory'
import RedactCar from '../components/Admin/Redact/RedactCar'
import { IoMdAddCircle } from "react-icons/io";
import Modal from '../components/Modal'
import OrderForm from '../components/Order/OrderForm'
import ServiceForm from '../components/Admin/Redact/ServiceForm'
import CarForm from '../components/Admin/Redact/CarForm'

const Redact = () => {

  const {modal, close, open} = useContext(ModalContext)
  const openModalHandler = () => open()
  const сloseModalHandler = () => close()



  const[isEdit,setIsEdit] = useState(false)
 const [isCar, setIsCar] = useState(false)

  const[types , setTypes] = useState<IType[]>()
  const[selectedType , setSelectedType] = useState(null)
  const getServicesData = async()=>{
      const {data}= await instance.get('type')
      setTypes(data)
  }


  const[cars , setCars] = useState<ICar[]>()
  const[selectedCar , setSelectedCar] = useState(null)
  const getCarsData = async()=>{
      const {data}= await instance.get('car')
      setCars(data)
  }

  useEffect(()=>{
    getServicesData()
    getCarsData()
}, [])


  const [typeToEdit, setTypeToEtid] = useState()
  const [carToEdit , setCarToEdit] = useState()


  const addTypeBtn = ()=>{
    setIsEdit(false)
    setIsCar(false)
    open()
  }

  const addCarBtn = ()=>{
    setIsCar(true)
    setIsEdit(false)
    open()
  }

  return (


    <div className="mb-auto container mx-auto">
        <div className="">
          <div className="text-black text-5xl text-center mt-10 mb-10 flex justify-center items-center gap-3">
              Типы  
              <button onClick={addTypeBtn}>
                <IoMdAddCircle className='text-black text-3xl'/>
              </button>
          </div>
         
          <div className="flex  flex-col gap-5 items-center">
            {
              types?.map((type,i)=>(
                <RedactCategory type={type} key={i} setIsCar={setIsCar} setIsEdit={setIsEdit} setTypeToEtid={setTypeToEtid}/>
              ))
            }
          </div>
       
         
        </div>
        <div className="">   
        <div className="text-black text-5xl text-center mt-10 mb-10 flex justify-center items-center gap-3">
              Техника  
              <button onClick={addCarBtn}>
                <IoMdAddCircle className='text-black text-3xl'/>
              </button>
          </div>
            
            <div className="flex  flex-col gap-5 items-center">
              {
                cars?.map((car,i)=>(
                  <RedactCar car={car} key={i} setIsCar={setIsCar} setIsEdit={setIsEdit} setCarToEdit={setCarToEdit}/>
                ))
              }
            </div>
         
        </div>

        {
          modal&&<>

                    {
                      !isCar?<Modal title='Услуга' onClose={сloseModalHandler}>
                               <ServiceForm isEdit={isEdit} service={typeToEdit}/>
                            </Modal>
                            :<Modal title='Техника' onClose={сloseModalHandler}>
                                 <CarForm isEdit={isEdit} car={carToEdit}/>
                            </Modal>
                    }
                </>

                  
        }
    </div>
)
}

export default Redact