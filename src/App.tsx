import 'react-toastify/dist/ReactToastify.css'

import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { router } from './routes'
import GlobalStyles from './styles/global'

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
      <ToastContainer />
    </>
  )
}
