import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store/store'

// Define a type for the slice state

export interface IUser{
  id?:number
  email: string
  role: string
  access_token: string
}

interface IUserState {
  user:  IUser|null,
  isAuth: boolean
}

// Define the initial state using that type
const initialState: IUserState = {
  user: null,
  isAuth:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
        login:(state,action:PayloadAction<any>)=>{
            state.user=action.payload.user
            state.isAuth = true
        },
        logout: (state)=>{
            state.isAuth = false
            state.user = null
        }
  },
})

export const { login , logout } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user

export default userSlice.reducer