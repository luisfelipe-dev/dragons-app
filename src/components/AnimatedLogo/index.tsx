import Lottie from 'react-lottie'

import logoAnimation from '../../assets/logo-animation.json'

type AnimatedLogoProps = {
  width: number
  height: number
}
const AnimatedLogo = ({ width, height }: AnimatedLogoProps) => {
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: logoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return <Lottie width={width} height={height} options={loadingOptions} />
}

export default AnimatedLogo
