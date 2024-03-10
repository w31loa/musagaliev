import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { useState, useEffect } from "react"
import { instance } from "./api/axios.api"
import { getTokenFromLocalStorage } from "./helpers/localStorage.helper"
import { useAppDispatch } from "./hooks/redux.hook"
import { login, logout } from "./store/reducers/user.reducer"
import toast from "react-hot-toast"


function App() {


  const dispatch = useAppDispatch()

  const checkAuth = async()=>{
    const token = getTokenFromLocalStorage()
    try{  
        if(token){
          const data = await instance.get('/auth/profile')

          if(data){
            dispatch(login({user:{...data.data, access_token:token}}))
          }else{
            dispatch(logout())
          }
        }
    }catch(err:any){
      const error = err.response?.data.message
      toast.error(error.toString())
    }
  }

  useEffect(()=> { //чтобы функция вызывалась всегда
      checkAuth()
  }, [])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
