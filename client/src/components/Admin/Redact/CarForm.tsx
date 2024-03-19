import React, { useEffect, useState } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { instance, multiInstance } from '../../../api/axios.api'
import { ICar, IType } from '../../../types/types'
import toast from 'react-hot-toast'



interface Props{
    car?: ICar
    isEdit: boolean
}

const CarForm = ({car , isEdit}:Props) => {

    const[title, setTitle] = useState<string|undefined>(isEdit?car?.title:'')
    const[description, setDescription] = useState<string|undefined>(isEdit?car?.description: '')
    const[price, setPrice] = useState<string|undefined>(isEdit?car?.price:'')
    const [type ,setType] = useState<string|undefined>(isEdit?car?.typeId:'')
    const [file, setFile] = useState<File>()

    console.log(isEdit)

    const[cars , setCars] = useState<ICar[]>()
    const[selectedCar , setSelectedCar] = useState(null)
    const getCarsData = async()=>{
        const {data}= await instance.get('car')
        setCars(data)
    }

    const[types , setTypes] = useState<IType[]>()
    const[selectedType , setSelectedType] = useState('')
    const getServicesData = async()=>{
        const {data}= await instance.get('type')
        setTypes(data)
    }
  
    useEffect(()=>{
      getCarsData()
      getServicesData()
  }, [])

  const addHandler = (e:React.FormEvent)=>{
    e.preventDefault()
        const data={
            title,
            description,
            image:file,
            price,
            typeId: selectedType
        }

        multiInstance.post('car', data).then(()=>{
            toast.success('Готово')
        })
  }

  const updHandler = (e:React.FormEvent)=>{
    e.preventDefault()

    const data={
        title,
        description,
        image:file,
        price
    }

    
    multiInstance.patch(`car/${car?.id}`, data).then(()=>{
        toast.success('Готово')
    })

  }

  return (
    <div className="">
    <form onSubmit={isEdit?updHandler:addHandler} className='bg-white'>



            <div className="mb-5">    
                <label htmlFor="email" className="block    mb-2 text-xl font-medium text-gray-900" >Название</label>
                <input
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                value={title}
                type="text" id="text" className= " py-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10"  required />
            </div>   

            
            {
                !isEdit&&
                <div className="mb-5">
                    <label htmlFor="email" className="block    mb-2 text-xl font-medium text-gray-900" >Категория</label>
                    <select onChange={(e)=>{
                            setSelectedType(e.target.value)
                            
                    }} value={type} required id="countries" className="mb-7 bg-gray-50 border rounded-md border-gray-300 text-gray-900  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Выберете категорию</option>
                        {
                            types?.map((el,i)=>(
                                <option value={el.id}>{el.title}</option>
                            ))
                        } 
                    </select>
                </div>
            }

            <div className="mb-5">    
                <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900 ">Описание</label>
                <textarea  onChange={(e)=>{setDescription(e.target.value)}} 
                    value={description}
                  rows={3} 
                  required
                  className="py-5 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10" placeholder="Описание" name="postContent" />
                    
            </div>

            <div className="mb-5">    
                <label htmlFor="email" className="block    mb-2 text-xl font-medium text-gray-900" >Цена</label>
                <input
                onChange={(e)=>{
                    setPrice(e.target.value)
                }}
                value={price}
                type="number" min="0" id="text" className= " py-2 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-10"  required />
            </div>   

            <div className="mb-5">    
                    <label htmlFor="email" className="block    mb-4 text-xl font-medium text-gray-700" >Фото</label>
                    
                    <input required={isEdit?false:true} onChange={(e)=>{
                            if(e.target.files){
                                setFile(e.target.files[0])
                            }
                            
                    }} className="p-2 block w-full text-sm cursor-pointer  text-gray-400 focus:outline-none placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>


                    </div>  
    
            <button className="flex w-full justify-center p-2 bg-green-400 rounded-md"  ><span>{isEdit?"Изменть":"Добавить"}</span><IoMdAdd className="text-2xl  text-center" /></button>
    </form>
</div>
  )
}

export default CarForm