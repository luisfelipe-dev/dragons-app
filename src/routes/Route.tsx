import { memo, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type PrivateRouterComponentProps = {
  children: ReactNode
}
function PrivateRouterComponent({ children }: PrivateRouterComponentProps) {
  const jwt = localStorage.getItem('@SnxPayment:token')
  if (!jwt) {
    return <Navigate to={{ pathname: '/' }} />
  }
  return children
}

export const PrivateRouter = memo(PrivateRouterComponent)
