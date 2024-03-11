import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { setTokenToLocalStorage } from '../../helpers/localStorage.helper'
import { instance } from '../../api/axios.api'
import { IUser, login } from '../../store/reducers/user.reducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/useUser.hook'

const AuthForm = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useUser()

    const loginHandler = async (e:React.MouseEvent)=>{
    
        e.preventDefault()
    
        try{
          const res = await instance.post<IUser>("/auth/login", {
            email,
            password
          })
      
          const data = res.data
          if(data){
              setTokenToLocalStorage('token', data.access_token)
              dispatch(login({user:data}))
    
              toast.success('Вы успешно авторизировались!')
              navigate(`/profile/${data.id}`)
          }else{
            toast.error('Неверные данные!')
           }
        }
        
        
        catch(err:any){
          const error = err.response?.data.message
          toast.error(error.toString())
        }  
    } 

    const registrationHandler = async(e:React.MouseEvent)=>{
        try {
          e.preventDefault()
          const data = await instance.post('/user' ,  {email,password})
          if(data){
            toast.success('Аккаунт создан!')
          }
        } catch (err:any) {
          const error = err.response?.data.message
          toast.error(error.toString())
        }
      }
       

  return (
        <div className='flex w-full justify-between mt-10'>

                <form className="w-96 mx-auto" >
                    <p className='text-4xl  border-b-2 pb-5 border-b-amber-400 font-medium text-center mb-5 text-gray-900'>Авторизация</p>
                     <div className="mb-5">    
                    <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900">Введите почту</label>
                    <input
                        onChange={(e)=>{
                        setEmail(e.target.value)
                        }}
                    type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-2" placeholder="test@mail.com" required />
                    </div>
                    <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-xl font-medium text-gray-900">Введите пароль</label>
                    <input 
                            onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                    type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-5 py-2" required />
                    </div>


                        <div className="flex justify-center mt-5">
                
             
                

                        <div className=" flex flex-col gap-3">
                            <button onClick={(e)=>{
                                loginHandler(e)
                            }} type="submit" className="px-10 py-3 bg-amber-400 rounded-md text-center text-lg hover:bg-amber-300  transition-colors" >Войти</button>

                            <button onClick={(e)=>{
                                registrationHandler(e)
                            }} type="submit" className="text-lg hover:text-amber-400">Зарегестрироваться</button>
                        </div>
                        
                    
                    </div>
                
            
                    </form>

        </div>

  )
}

export default AuthForm