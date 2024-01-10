import { useEffect, useState } from 'react'

import { CardList } from '@/components/CardList'
import { Header } from '@/components/Header'
import { LoadingDragon } from '@/components/LoadingDragon'
import { ModalDelete } from '@/components/ModalDelete'
import API from '@/services/api'
import { Container } from '@/styles/Grid'
import { listDragonsProps } from '@/types/list-dragons'

import * as Style from './style'

export function ListDragons() {
  const [loading, setLoading] = useState(true)

  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedDragon, setSelectedDragon] = useState<{
    name: string
    id: string
  }>()

  const [listDragons, setListDragons] = useState<listDragonsProps>([])

  function handleDeleteModal(values: { name: string; id: string }) {
    setIsOpen(true)
    setSelectedDragon(values)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const getListDragons = async () => {
    setLoading(true)
    try {
      const response = await API.get('/dragon')
      const { data } = response
      setListDragons(data)
    } catch (err) {
      console.log(err)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }

  useEffect(() => {
    getListDragons()
  }, [])

  return (
    <>
      <Header showRegisterBtn />

      <Container>
        {loading ? (
          <LoadingDragon />
        ) : (
          <>
            <ModalDelete
              closeModal={closeModal}
              modalIsOpen={modalIsOpen}
              infosDragon={selectedDragon}
              getListDragons={getListDragons}
            />
            <Style.ContentListDragons>
              {listDragons
                ? listDragons.map((dragon) => (
                    <CardList
                      key={dragon.id}
                      id={dragon.id}
                      name={dragon.name}
                      type={dragon.type}
                      histories={dragon.histories}
                      deleteModal={handleDeleteModal}
                    />
                  ))
                : ''}
            </Style.ContentListDragons>
          </>
        )}
      </Container>
    </>
  )
}
