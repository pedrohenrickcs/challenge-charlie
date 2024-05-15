import { api } from './api'

export const bing = async () => {
  try {
    const response = await api.get(
      'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR',
    )
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter os dados da API')
  }
}
