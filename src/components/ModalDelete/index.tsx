import { CgClose } from 'react-icons/cg'
import Lottie from 'react-lottie'
import Modal from 'react-modal'
import { toast } from 'react-toastify'

import API from '@/services/api'

import deleteIcon from '../../assets/delete.json'
import * as Style from './style'

type ModalDeleteProps = {
  infosDragon?: {
    name: string
    id: string
  }
  closeModal: () => void
  modalIsOpen: boolean
  getListDragons: () => void
}

export function ModalDelete({
  infosDragon,
  closeModal,
  modalIsOpen,
  getListDragons,
}: ModalDeleteProps) {
  const loadingOptions = {
    loop: false,
    autoplay: true,
    animationData: deleteIcon,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  const handleDeleteDragon = async () => {
    try {
      const response = await API.delete(`/dragon/${infosDragon?.id}`)

      closeModal()
      getListDragons()
      toast.success('Dragão deletado com sucesso', {
        theme: 'colored',
      })
      return response
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="global-modal-overlay"
        className="global-modal-classname"
      >
        <Style.WrapperModalDelete>
          <div className="modal-delete__header">
            <p>Deletar Dragão</p>
            <button onClick={closeModal}>
              <CgClose />
            </button>
          </div>

          <div className="modal-delete__content">
            <Lottie width={160} height={160} options={loadingOptions} />

            <div className="modal-delete__message">
              <p>
                <strong>Tem certeza que deseja deletar o dragão?</strong>
              </p>
              <p>{infosDragon?.name}</p>
            </div>

            <div className="modal-delete__btn">
              <button className="accept" onClick={handleDeleteDragon}>
                Sim
              </button>
              <button onClick={closeModal}>Não</button>
            </div>
          </div>
        </Style.WrapperModalDelete>
      </Modal>
    </div>
  )
}
