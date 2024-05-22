export const celsiusToFahrenheit = (celsius: number) => {
  const fahrenheit = (celsius * 9) / 5 + 32
  return fahrenheit
}

export const toggleCelsiusTemperature = (feelsLikeCelsius: number) => {
  const celsiusTemperature =
    feelsLikeCelsius && `${Math.trunc(feelsLikeCelsius)} Cº`

  return celsiusTemperature
}
export const toggleFahrenheitTemperature = (feelsLikeFahrenheit: number) => {
  const fahrenheitTemperature =
    feelsLikeFahrenheit &&
    `${celsiusToFahrenheit(Math.trunc(feelsLikeFahrenheit))} Fº`

  return fahrenheitTemperature
}
