import { useAppSelector } from "./redux.hook"

export const  useAuth = ():boolean =>{
    const isAuth = useAppSelector((state)=>{
        return state.user.isAuth
    })
    return isAuth
}