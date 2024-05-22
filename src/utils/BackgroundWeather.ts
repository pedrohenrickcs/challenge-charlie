export const BackgroundWeather = (temp: number) => {
  const winter = temp < 15
  const summer = temp > 35
  const mild = temp > 15 && temp < 35
  const noLocation = !temp

  if (winter) return 'bg-background-blue'
  if (summer) return 'bg-background-red'
  if (mild) return 'bg-background-yellow'
  if (noLocation) return 'bg-background-gray'
}
