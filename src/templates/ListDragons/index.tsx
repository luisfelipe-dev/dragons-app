import { useEffect, useState } from 'react'

import { Header } from '@/components/Header'
import { LoadingDragon } from '@/components/LoadingDragon'
import API from '@/services/api'
import { Container } from '@/styles/Grid'
import { listDragons } from '@/types/list-dragons'

export function ListDragons() {
  const [loading, setLoading] = useState(true)
  const [listDragons, setListDragons] = useState<listDragons>([])

  const getListDragons = async () => {
    try {
      const response = await API.get('/dragon')
      const { data } = response
      console.log(data)
      setListDragons(data)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getListDragons()
  }, [])

  return (
    <>
      <Header />

      <Container>
        {loading ? (
          <LoadingDragon />
        ) : (
          <>
            {listDragons
              ? listDragons.map((dragon) => (
                  <div key={dragon.id}>{dragon.name}</div>
                ))
              : ''}
          </>
        )}
      </Container>
    </>
  )
}
