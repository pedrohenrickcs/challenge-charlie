import { ContentData } from '@/types/WeatherContainer'
import Sun from '../../assets/icons/Sun'

export const WeatherContainer = ({ data, dataNextDays }: ContentData) => {
  const firstLetter = `${data?.weather[0].description.charAt(0).toUpperCase()}${data?.weather[0].description.substring(1)}`

  return (
    <>
      <div className="flex flex-row justify-around pt-4 pb-4 bg-background-yellow bg-opacity-80">
        <div className="container flex justify-center items-center">
          <Sun size={500} color="#fff" />
        </div>
        <div className="container text-textSecondary">
          <div>
            <p className="py-4 text-3xl">HOJE</p>
            {data?.main?.feels_like && (
              <p className="pb-8 text-4xl">
                {Math.trunc(data?.main?.feels_like)} Cº
              </p>
            )}
          </div>

          <p className="pb-4 text-5xl">{firstLetter}</p>
          <p className="text-3xl leading-tight">
            Vento: {data?.wind?.speed}Kmh
          </p>
          <p className="text-3xl leading-tight">
            Humidade: {data?.main?.humidity}%
          </p>
          <p className="text-3xl leading-tight">
            Pressão: {data?.main?.pressure}hPA
          </p>
        </div>
      </div>

      <div className="flex flex-row justify-around bg-background-yellow bg-opacity-100">
        <div className="container flex justify-center items-center">
          {/* <Sun size={500} color="#fff" /> */}
        </div>
        <div className="container text-textSecondary">
          <div>
            <p className="py-4 text-3xl">Amanhã</p>
            {dataNextDays?.list[0].main.feels_like && (
              <p className="pb-8 text-4xl">
                {Math.trunc(dataNextDays?.list[0].main.feels_like)} Cº
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-around bg-background-yellow-secondary bg-opacity-100">
        <div className="container flex justify-center items-center">
          {/* <Sun size={500} color="#fff" /> */}
        </div>
        <div className="container text-textSecondary">
          <div>
            <p className="py-4 text-3xl">Depois de amanhã</p>
            {dataNextDays?.list[1].main.feels_like && (
              <p className="pb-8 text-4xl">
                {Math.trunc(dataNextDays?.list[1].main.feels_like)} Cº
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
