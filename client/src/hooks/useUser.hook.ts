import { IUser } from "../store/reducers/user.reducer"
import { useAppSelector } from "./redux.hook"

export const  useUser = ():IUser|null =>{
    const user = useAppSelector((state)=>{
        return state.user.user
    })
    return user
}