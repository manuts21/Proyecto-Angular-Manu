export interface Car {
  name: string
  type: string
  gasolineLiter: number
  kindOfTransition: string
  people: number
  pricePerDay: number
  id: string
  img: string
  liked: boolean
}

export interface AllCarsMeta {
  total: number,
  last_page: number
}

export interface AllCars {
  data: Car[]
  meta: AllCarsMeta
}
export interface CarDetails {
  name: string;
  type: string;
  description: string;
  gasolineLiter: number;
  kindOfTransition: string;
  people: number;
  pricePerDay: number;
  id: string;
  img: string;
  images: {
    url: string;
  }[];
}
