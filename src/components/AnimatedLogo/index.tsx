import React from 'react'
import Lottie from 'react-lottie'

// import { Container } from './styles';
import logoAnimation from '../../assets/logo-animation.json'

const AnimatedLogo: React.FC = () => {
  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: logoAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return <Lottie width={120} height={120} options={loadingOptions} />
}

export default AnimatedLogo
