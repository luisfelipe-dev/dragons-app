import { createBrowserRouter } from 'react-router-dom'

import { App } from '@/pages/app'
import { ListDragonsPage } from '@/pages/list-dragons'
import { PrivateRouter } from '@/routes/Route'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/list-dragons',
    element: (
      <PrivateRouter>
        <ListDragonsPage />
      </PrivateRouter>
    ),
  },
])
