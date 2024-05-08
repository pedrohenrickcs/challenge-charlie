const WeatherContainer = () => {
  return (
    <div className="flex flex-row justify-around pt-16 pb-32 bg-amber-400 bg-opacity-50">
      <div className="container flex justify-center items-center">Icon</div>
      <div className="container  text-textSecondary">
        <div>
          <p className="py-4">HOJE</p>
          <p className="pb-4">32</p>
        </div>

        <p className="py-4">Ensolarado</p>
        <p>Vento? NO 6.4Kmh</p>
        <p>Humidade: 78%</p>
        <p>Pressão: 1003hPA</p>
      </div>
    </div>
  )
}

export default WeatherContainer
