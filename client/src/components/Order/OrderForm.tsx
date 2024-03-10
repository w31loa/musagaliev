import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { InputMask } from 'primereact/inputmask';
// import Selector, { IServiceSelector } from './selector/Selector';

import toast from 'react-hot-toast';
import { useUser } from '../../hooks/useUser.hook';
import { AddressSuggestions } from 'react-dadata';

const OrderForm = ({serviceId}) => {

    const user = useUser()
    const [number,setNumber] = useState('')
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [adress, setAdress] = useState()
    const [duraction, setDuraction] = useState(0)
    // const [selectedService, setSelectedService] = useState<IServiceSelector | null>(null);

    const sendBtnHandler = async()=>{
      
      
        // const date = new Date(Date.now())

    
        // const data = {
        //   phoneNumber: number,
        //   name: name, 
        //   description: comment,
        //   date: date.toISOString(),
        //   userId: user?.id,
        //   serviceId: selectedService?.id || serviceId
        // }

    
        // instance.post('/request' , data)
        // toast.success('Заявка отправлена!')
        

    }

  
  return (
    <div>
        <Form>
              <div className="mb-5">    
                <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900 ">Номер телефона</label>

                <InputMask className="bg-gray-50 py-2 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" value={number} onChange={(e:any) => setNumber(e.target.value)}mask="+7(999) 999-9999" placeholder="+7(999) 999-9999"/>

              </div>   

              <div className="mb-5">    
                <label htmlFor="email" className="block    mb-2 text-xl font-medium text-gray-900">Имя</label>
                <input
                  onChange={(e)=>{
                      setName(e.target.value)
                  }}
                  type="text" id="text" className= " py-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="Иван Иванов" required />
              </div>   

              <div className="mb-5">    
                <label htmlFor="email" className="block    mb-2 text-xl font-medium text-gray-900">Адресс</label>
                {/* <input
                  onChange={(e)=>{
                    setAdress(e.target.value)
                  }}
                  type="text" id="text" className= " py-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="Иван Иванов" required /> */}
                  <AddressSuggestions className=" py-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" token="b9f8a374507bd3c27caecce9989a4b4071f5353b" value={adress} onChange={setAdress} />

              </div> 


              <div className="mb-5">    
                <label htmlFor="email" className="block    mb-2 text-xl font-medium text-gray-900">Часы заказа</label>
                <input
                  onChange={(e)=>{
                    setDuraction(+e.target.value)
                  }}
                  type="number" id="text" min={2} className= " py-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="Не меньше двух" required />
              </div>   
     
       
              <div className="mb-5">    
                <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900">Комментарий к заказу</label>
                <textarea  onChange={(e)=>{setComment(e.target.value)}} 
                  rows={5} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="Комментарий" name="postContent" />
              
              </div>

              <button  onClick={sendBtnHandler} type="button" className="focus:outline-none text-white bg-amber-400 hover:bg-amber-300 focus:ring-4 focus:ring-red-300 rounded-lg text-2xl w-full px-5 py-2.5 me-2 mb-2">Отправить!</button>

        </Form>
    </div>
  )
}

export default OrderForm