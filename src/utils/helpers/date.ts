import { FieldValue, Timestamp } from 'firebase/firestore'

export const addDays = (date: Date, days: number): Timestamp => {
  const result = new Date(date)
  result.setDate(result.getDate() + days)

  return Timestamp.fromDate(new Date(result.getTime()))
}

export const daysPassedSince = (someDate: Timestamp) => {
  const now = new Date(Timestamp.now().seconds * 1000).getTime()
  const updatedSomeDate = new Date(someDate.seconds * 1000).getTime()

  const oneDayMilliseconds = 24 * 60 * 60 * 1000

  const difference = now - updatedSomeDate

  return Math.floor(difference / oneDayMilliseconds)
}

export const dateToString = (
  date: Timestamp | FieldValue,
  isShort?: boolean
): string => {
  // if (seconds < 0) return '-' + secondsToString(-seconds)

  if (date instanceof FieldValue) return ''

  if (isShort) {
    return new Date(date.toDate()).toLocaleDateString('ru-RU', {
      timeZone: 'UTC',
      month: 'short',
      day: '2-digit'
    })
  } else {
    return new Date(date.toDate()).toLocaleDateString('ru-RU')
  }
}

export const getDateNow = () => {
  const date = new Date()
  const userTimezoneOffset = date.getTimezoneOffset() * 60000
  return new Date(date.getTime() - userTimezoneOffset).toLocaleDateString(
    'ru-RU'
  )
}
