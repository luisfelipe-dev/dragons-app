import { useNavigate } from 'react-router-dom'

import { Container } from '@/styles/Grid'

import AnimatedLogo from '../AnimatedLogo'
import * as Style from './style'

export function Header() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('@DragonsApp:token')
    navigate('/')
  }

  return (
    <Container>
      <Style.WrapperHeader>
        <div className="header-logo">
          <AnimatedLogo width={70} height={70} />
        </div>

        <div className="header-btns">
          <button onClick={() => alert('CADASTRAR')}>Cadastrar Dragão</button>
          <button onClick={handleLogout}>Sair</button>
        </div>
      </Style.WrapperHeader>
    </Container>
  )
}
