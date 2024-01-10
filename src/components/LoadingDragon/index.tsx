import Lottie from 'react-lottie'

import dragonAnimation from '../../assets/dragon-animation.json'
import * as Style from './style'

export function LoadingDragon() {
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: dragonAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Style.WrapperLoadingDragon>
      <Lottie width={160} height={160} options={loadingOptions} />
      <p>Carregando...</p>
    </Style.WrapperLoadingDragon>
  )
}
