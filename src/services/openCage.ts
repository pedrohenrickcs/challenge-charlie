import { api } from './api'

export const openCage = async (
  lat: number | undefined,
  lon: number | undefined,
) => {
  try {
    const response = await api.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat},${lon}&key=66eaa7a9d980418884127f856962115d&language=pt_br`,
    )
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter os dados da API')
  }
}
