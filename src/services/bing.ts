import { api } from './api'

export const bing = async () => {
  try {
    const response = await api.get(`${process.env.NEXT_PUBLIC_APP_BING}`)
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter os dados da API')
  }
}
