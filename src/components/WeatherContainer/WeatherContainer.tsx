import Sun from '../icons/Sun'

const WeatherContainer = () => {
  return (
    <div className="flex flex-row justify-around pt-16 pb-32 bg-background-yellow bg-opacity-50">
      <div className="container flex justify-center items-center">
        <Sun size={500} color="#fff" />
      </div>
      <div className="container text-textSecondary">
        <div>
          <p className="py-4 text-3xl">HOJE</p>
          <p className="pb-8 text-4xl">32</p>
        </div>

        <p className="pb-4 text-5xl">Ensolarado</p>
        <p className="text-3xl leading-tight">Vento? NO 6.4Kmh</p>
        <p className="text-3xl leading-tight">Humidade: 78%</p>
        <p className="text-3xl leading-tight">Pressão: 1003hPA</p>
      </div>
    </div>
  )
}

export default WeatherContainer
