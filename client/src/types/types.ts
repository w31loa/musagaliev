
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