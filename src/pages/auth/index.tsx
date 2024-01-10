import { useEffect } from 'react'

export function Auth() {
  useEffect(() => {
    console.log(import.meta.env.VITE_APP_TITLE)
  }, [])

  return <h1>hello world 2</h1>
}
