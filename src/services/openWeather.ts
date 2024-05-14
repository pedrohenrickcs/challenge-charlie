import { api } from './api'

export const openWeather = async () => {
  try {
    const response = await api.get(
      'https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&lang=pt_br&APPID=772920597e4ec8f00de8d376dfb3f094&units=metric',
    )
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter os dados da API')
  }
}

export const openWeatherNextDays = async () => {
  try {
    const response = await api.get(
      'https://api.openweathermap.org/data/2.5/forecast?q=Sao Paulo&lang=pt_br&APPID=772920597e4ec8f00de8d376dfb3f094&units=metric',
    )
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter os dados da API')
  }
}
