import { api } from './api'

export const openCage = async (lat: number, lon: number) => {
  try {
    const response = await api.get(
      `${process.env.NEXT_PUBLIC_OPEN_CAGE}?q=${lat},${lon}&key=${process.env.NEXT_PUBLIC_OPEN_CAGE_API_KEY}&language=pt_br`,
    )
    return response.data
  } catch (error) {
    throw new Error('Erro ao obter os dados da API')
  }
}
