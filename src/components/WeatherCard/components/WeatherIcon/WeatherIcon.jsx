import { RainIcon, SunIcon } from '../../../../assets/icons/WeatherIcons'

export const WeatherIcon = ({
  className = '',
  weather,
  width = 75,
  height = 'auto',
}) => {
  switch (weather) {
    case 'rain':
      return <RainIcon className={className} width={110} height={height} />
    case 'sunny':
      return <SunIcon className={className} width={width} height={height} />
  }
}
