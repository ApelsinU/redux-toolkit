import { ReactElement } from 'react'

export interface IWeatherExtendedFabric {
  name?: 'wind_dir' | ''
  title: string
  icon: ReactElement | null
  text: IWeatherExtendedItemText | null
}

export interface IWeatherExtendedItem {
  title: string
  icon: ReactElement | null
  text: IWeatherExtendedItemText | null
}

export interface IWeatherExtendedItemText {
  value: string
  postfix?: string
}
