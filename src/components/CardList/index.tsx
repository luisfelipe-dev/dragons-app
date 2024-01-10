import { useNavigate } from 'react-router-dom'

import * as Style from './style'

type CardListProps = {
  histories: string
  id: string
  name: string
  type: string
  deleteModal: (values: { name: string; id: string }) => void
}
export function CardList({
  name,
  type,
  id,
  histories,
  deleteModal,
}: CardListProps) {
  const navigate = useNavigate()
  const handleEditDragon = (id: string) => {
    navigate(`/edit-dragon/${id}`)
  }

  const handleDeleteDragon = (values: { name: string; id: string }) => {
    deleteModal(values)
  }

  return (
    <Style.WrapperCardList>
      {id && (
        <div className="id">
          <p>#{id}</p>
        </div>
      )}
      {name && (
        <div>
          <p>
            <strong>Nome</strong>
          </p>
          <p>{name}</p>
        </div>
      )}

      {type && (
        <div className="card-list__type">
          <p>
            <strong>Tipo</strong>
          </p>
          <p>{type}</p>
        </div>
      )}

      {histories.length > 0 && (
        <div className="histories">
          <p>
            <strong>Histórias</strong>
          </p>
          <p>{histories}</p>
        </div>
      )}

      <button className="edit" onClick={() => handleEditDragon(id)}>
        Editar
      </button>
      <button
        className="delete"
        onClick={() => handleDeleteDragon({ name, id })}
      >
        Deletar
      </button>
    </Style.WrapperCardList>
  )
}
