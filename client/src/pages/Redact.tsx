import React, { useContext, useEffect, useState } from 'react'
import { ICar, IType } from '../types/types'
import { instance } from '../api/axios.api'
import { ModalContext } from '../context/modal.context'
import RedactCategory from '../components/Admin/Redact/RedactCategory'
import RedactCar from '../components/Admin/Redact/RedactCar'
import { IoMdAddCircle } from "react-icons/io";

const Redact = () => {

  const {modal, close, open} = useContext(ModalContext)
  const openModalHandler = () => open()
  const сloseModalHandler = () => close()



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

  return (


    <div className="mb-auto container mx-auto">
        <div className="">
          <div className="text-black text-5xl text-center mt-10 mb-10 flex justify-center items-center gap-3">
              Типы  
              <button>
                <IoMdAddCircle className='text-black text-3xl'/>
              </button>
          </div>
         
          <div className="flex  flex-col gap-5 items-center">
            {
              types?.map((type,i)=>(
                <RedactCategory type={type} key={i}/>
              ))
            }
          </div>
       
         
        </div>
        <div className="">   
        <div className="text-black text-5xl text-center mt-10 mb-10 flex justify-center items-center gap-3">
              Техника  
              <button>
                <IoMdAddCircle className='text-black text-3xl'/>
              </button>
          </div>
            
            <div className="flex  flex-col gap-5 items-center">
              {
                cars?.map((car,i)=>(
                  <RedactCar car={car} key={i}/>
                ))
              }
            </div>
         
        </div>
    </div>
)
}

export default Redact