import { createBrowserRouter } from 'react-router-dom'

import { App } from '@/pages/app'
import { Auth } from '@/pages/auth'
import { PrivateRouter } from '@/routes/Route'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/logado',
    element: (
      <PrivateRouter>
        <Auth />
      </PrivateRouter>
    ),
  },
])
