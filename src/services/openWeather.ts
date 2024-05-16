import { api } from './api'

export const openWeather = async (city: string) => {
  try {
    const response = await api.get(
      `${process.env.NEXT_PUBLIC_OPEN_WEATHER}weather?q=${city}&lang=pt_br&APPID=${process.env.NEXT_PUBLIC_OPEN_WEATHER_APP_ID}&units=metric`,
    )
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter os dados da API')
  }
}

export const openWeatherNextDays = async (city: string) => {
  try {
    const response = await api.get(
      `${process.env.NEXT_PUBLIC_OPEN_WEATHER}/forecast?q=${city}&lang=pt_br&APPID=${process.env.NEXT_PUBLIC_OPEN_WEATHER_APP_ID}&units=metric`,
    )
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter os dados da API')
  }
}
