import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [windowDimension, setWindowDimension] = useState(0)

  useEffect(() => {
    setWindowDimension(window.innerWidth)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimension
}
