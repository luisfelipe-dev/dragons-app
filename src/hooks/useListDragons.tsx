import { useEffect, useState } from 'react'

import API from '@/services/api'
import { listDragonsProps } from '@/types/list-dragons'

export function useListDragons() {
  const [loading, setLoading] = useState(true)
  const [modalIsOpen, setIsOpen] = useState(false)
  const [selectedDragon, setSelectedDragon] = useState<{
    name: string
    id: string
  }>()
  const [listDragons, setListDragons] = useState<listDragonsProps>([])

  const handleDeleteModal = (values: { name: string; id: string }) => {
    setIsOpen(true)
    setSelectedDragon(values)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const getListDragons = async () => {
    setLoading(true)
    try {
      const response = await API.get('/dragon')
      const { data } = response
      const sortedData = data.sort((a, b) => a.name.localeCompare(b.name))
      setListDragons(sortedData)
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

  return {
    loading,
    modalIsOpen,
    selectedDragon,
    listDragons,
    handleDeleteModal,
    closeModal,
    getListDragons,
  }
}
