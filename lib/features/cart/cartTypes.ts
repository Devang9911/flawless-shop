export interface CartProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity : number
}

export interface CartState {
  id : number;
  userId : number;
  date : string;
  products : CartProduct[]
}