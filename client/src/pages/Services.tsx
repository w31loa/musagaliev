import { useLoaderData } from "react-router-dom"
import { instance } from "../api/axios.api"
import Serivice from "../components/Services/Serivice"
import { IType } from "../types/types"
import { useContext } from "react"
import { ModalContext } from "../context/modal.context"
import { useAuth } from "../hooks/useAuth.hook"



export const servicesLoader = async()=>{
  const {data} = await instance.get('/type')
  return data 
}

const Services = () => {

  const data = useLoaderData() as IType[]


  return (
    <div className='container m-auto text-black'>
        <div className="text-5xl text-center mb-10 mt-10 ">Наши услуги:</div>
        <div className="  ">
            {
              data.map((el,i)=> (
                <Serivice title={el.title} cars={el.cars} key={i}/>
              ))
            }
        </div>
    </div>



  )
}

export default Services