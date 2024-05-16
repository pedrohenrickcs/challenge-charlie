export const Temperature = (data) => {
  return (
    <div>
      <p className="py-4 text-3xl">HOJE</p>
      {data?.main?.feels_like && (
        <p className="pb-8 text-4xl">{Math.trunc(data?.main?.feels_like)} Cº</p>
      )}
    </div>
  )
}
