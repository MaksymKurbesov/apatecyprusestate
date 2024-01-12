import { Timestamp } from 'firebase/firestore'

export const addDays = (date: Timestamp, days: number): number => {
  const result = new Date(date.seconds * 1000)
  result.setDate(result.getDate() + days)

  return new Date(result.getTime()).getTime()
}

export const daysPassedSince = (someDate: Timestamp) => {
  const now = new Date(Timestamp.now().seconds * 1000).getTime()
  const updatedSomeDate = new Date(someDate.seconds * 1000).getTime()

  const oneDayMilliseconds = 24 * 60 * 60 * 1000

  const difference = now - updatedSomeDate

  return Math.floor(difference / oneDayMilliseconds)
}

export const secondsToString = (seconds: number, isShort?: boolean): string => {
  if (seconds < 0) return '-' + secondsToString(-seconds)

  if (isShort) {
    return new Date(seconds * 1000).toLocaleDateString('ru-RU', {
      timeZone: 'UTC',
      month: 'short',
      day: '2-digit'
    })
  } else {
    return new Date(seconds * 1000).toLocaleDateString('ru-RU')
  }
}

export const getDateNow = () => {
  const date = new Date()
  const userTimezoneOffset = date.getTimezoneOffset() * 60000
  return new Date(date.getTime() - userTimezoneOffset).toLocaleDateString(
    'ru-RU'
  )
}
