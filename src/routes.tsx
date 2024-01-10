import { createBrowserRouter } from 'react-router-dom'

import { Dashboard } from './pages/app'
import { Auth } from './pages/auth'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/logado',
    element: <Auth />,
  },
])
