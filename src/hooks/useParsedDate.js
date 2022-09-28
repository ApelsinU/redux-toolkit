export function useParsedDate(localtime) {
  const date = new Date(Date.parse(localtime))

  const allMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const getDayPostdix = (day) => {
    switch (day) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd'
      default:
        return 'th'
    }
  }

  const year = date.getFullYear()
  const shortYear = year.toString().slice(2, 4)
  const month = allMonth[date.getMonth()]
  const shortMonth = month.slice(0, 3)
  const day = date.getDay() < 10 ? '0' + date.getDay() : date.getDay()
  const dayPostfix = getDayPostdix(day)

  const fullTime = date
    .toLocaleTimeString('en-US', {
      weekday: 'long',
    })
    .split(' ')

  const weekDay = fullTime[0]
  const timePostfix = fullTime[2]

  const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const shortHour = date.getHours()
  const minute = date.getMinutes()

  return {
    year,
    shortYear,
    month,
    shortMonth,
    day,
    dayPostfix,
    weekDay,
    timePostfix,
    hour,
    shortHour,
    minute,
  }
}
