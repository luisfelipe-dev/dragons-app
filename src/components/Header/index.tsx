import { useNavigate } from 'react-router-dom'

import { Container } from '@/styles/Grid'

import AnimatedLogo from '../AnimatedLogo'
import * as Style from './style'

type HeaderProps = {
  showRegisterBtn?: boolean
}

export function Header({ showRegisterBtn }: HeaderProps) {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('@DragonsApp:token')
    navigate('/')
  }
  const handleCreateDragon = () => {
    navigate('/create-dragon')
  }

  return (
    <Container>
      <Style.WrapperHeader>
        <div className="header-logo">
          <AnimatedLogo width={70} height={70} />
        </div>

        <div className="header-btns">
          {showRegisterBtn && (
            <button onClick={handleCreateDragon}>Cadastrar Dragão</button>
          )}
          <button onClick={handleLogout}>Sair</button>
        </div>
      </Style.WrapperHeader>
    </Container>
  )
}
