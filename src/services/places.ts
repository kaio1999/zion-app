import { ListPLacesInterface } from '../types/filterData'

export const fetchPlaces = async (): Promise<ListPLacesInterface[]> => {
  try {
    const response = await fetch(
      'https://rent-zion-default-rtdb.firebaseio.com/places/.json',
    )
    const dataObject = await response.json()
    return Object.keys(dataObject).map((key) => ({
      id: key,
      ...dataObject[key],
    }))
  } catch (err) {
    console.error(err)
    return []
  }
}

export const postNewPlace = async (place: ListPLacesInterface) => {
  try {
    const response = await fetch(
      'https://rent-zion-default-rtdb.firebaseio.com/places.json',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(place),
      },
    )

    if (!response.ok) {
      throw new Error('Falha ao adicionar lugar')
    }
  } catch (error) {
    console.error('Erro ao adicionar lugar:', error)
  }
}
