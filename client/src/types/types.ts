
export interface IType{
    id:number
    title:string
    cars: ICar[]
  }
  
  export interface ICar{
    id:number
    title:string
    description: string 
    price:string
    img: string
    typeId: number
  }

  export interface IOrder{
    adress: string
    car: ICar,
    carId: number
    date: string
    description: string
    duraction: string
    id:number,
    name: string,
    phoneNumber: string
    status: string
    userId: number
  }