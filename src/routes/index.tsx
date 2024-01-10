import { createBrowserRouter } from 'react-router-dom'

import { App } from '@/pages/app'
import { CreateDragonPage } from '@/pages/create-dragon'
import { EditDragonPage } from '@/pages/edit-dragon'
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
  {
    path: '/edit-dragon/:id',
    element: (
      <PrivateRouter>
        <EditDragonPage />
      </PrivateRouter>
    ),
  },
  {
    path: '/create-dragon',
    element: (
      <PrivateRouter>
        <CreateDragonPage />
      </PrivateRouter>
    ),
  },
])
