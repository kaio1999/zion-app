export interface ListPLacesInterface {
  category: string
  img: string
  address: string
  package: string
  have: string[]
  title: string
  pricePerNight: number
  id: string
}

export interface FilterData {
  data: ListPLacesInterface[]
  searchText: string
  selectedCategories: string[]
}
