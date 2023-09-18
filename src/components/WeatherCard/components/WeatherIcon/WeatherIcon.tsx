import { RainIcon, SunIcon } from '../../../../assets/icons/WeatherIcons'

export const WeatherIcon = ({ className = '', weather}:any) => {
  switch (weather) {
    case 'rain':
      return <RainIcon className={className} width={110} height={67} />
    case 'sunny':
      return <SunIcon className={className} width={75} height={75} />
    default:
      return <div>No icon</div>
  }
}
