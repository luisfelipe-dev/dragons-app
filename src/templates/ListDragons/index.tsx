import { CardList } from '@/components/CardList'
import { Header } from '@/components/Header'
import { LoadingDragon } from '@/components/LoadingDragon'
import { ModalDelete } from '@/components/ModalDelete'
import { useListDragons } from '@/hooks/useListDragons'
import { Container } from '@/styles/Grid'

import * as Style from './style'

export function ListDragons() {
  const {
    loading,
    closeModal,
    modalIsOpen,
    selectedDragon,
    listDragons,
    handleDeleteModal,
    getListDragons,
  } = useListDragons()

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
