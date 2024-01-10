import * as Style from './style'

type ButtonBackProps = {
  onClick: () => void
}
export function ButtonBack({ onClick }: ButtonBackProps) {
  return (
    <Style.WrapperButtonBack>
      <button onClick={onClick}>Voltar</button>
    </Style.WrapperButtonBack>
  )
}
